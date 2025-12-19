import json
from typing import Dict, Any
from pydantic import BaseModel, Field, validator
import re

class OrderRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    description: str = Field(..., min_length=10, max_length=1000)
    
    @validator('phone')
    def validate_phone(cls, v):
        phone_clean = re.sub(r'[^\d+]', '', v)
        if len(phone_clean) < 10:
            raise ValueError('Некорректный номер телефона')
        return phone_clean
    
    @validator('name')
    def validate_name(cls, v):
        if not v.strip():
            raise ValueError('Имя не может быть пустым')
        return v.strip()

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        order = OrderRequest(**body_data)
        
        response_data = {
            'success': True,
            'message': 'Заявка успешно отправлена! Мы свяжемся с вами в течение 5 минут.',
            'order_id': context.request_id,
            'data': {
                'name': order.name,
                'phone': order.phone,
                'description': order.description
            }
        }
        
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps(response_data, ensure_ascii=False),
            'isBase64Encoded': False
        }
        
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Некорректный JSON'}, ensure_ascii=False),
            'isBase64Encoded': False
        }
    except ValueError as e:
        return {
            'statusCode': 400,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': str(e)}, ensure_ascii=False),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Внутренняя ошибка сервера'}, ensure_ascii=False),
            'isBase64Encoded': False
        }
