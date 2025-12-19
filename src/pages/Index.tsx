import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const services = [
    { name: "Диагностика", price: "Бесплатно", icon: "Search", description: "Полная диагностика неисправностей" },
    { name: "Замена матрицы", price: "от 3500₽", icon: "Monitor", description: "Оригинальные комплектующие" },
    { name: "Ремонт блока питания", price: "от 2000₽", icon: "Zap", description: "Быстрое восстановление" },
    { name: "Настройка ПО", price: "от 1000₽", icon: "Settings", description: "Обновление и настройка" },
    { name: "Замена подсветки", price: "от 2500₽", icon: "Lightbulb", description: "LED и CCFL подсветка" },
    { name: "Ремонт разъемов", price: "от 800₽", icon: "Cable", description: "HDMI, USB и другие" },
  ];

  const reviews = [
    { name: "Алексей М.", rating: 5, text: "Быстро починили телевизор Samsung, цена приятно удивила. Теперь работает как новый!", date: "15 декабря 2024" },
    { name: "Мария К.", rating: 5, text: "Отличный сервис! Заменили матрицу на LG за день. Мастер приехал на дом, всё объяснил.", date: "10 декабря 2024" },
    { name: "Дмитрий П.", rating: 5, text: "Профессионалы своего дела. Отремонтировали блок питания Sony за 2 часа. Гарантия 6 месяцев.", date: "5 декабря 2024" },
  ];

  const guarantees = [
    { title: "6 месяцев гарантии", description: "На все виды работ и установленные комплектующие", icon: "Shield" },
    { title: "Оригинальные запчасти", description: "Используем только сертифицированные детали от производителей", icon: "CheckCircle" },
    { title: "Бесплатная диагностика", description: "При ремонте у нас диагностика не стоит ни копейки", icon: "Search" },
    { title: "Быстрый ремонт", description: "90% ремонтов выполняем в день обращения", icon: "Zap" },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Tv" size={32} className="text-primary" />
            <span className="text-2xl font-bold">ТВ-Мастер</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#guarantees" className="hover:text-primary transition-colors">Гарантии</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="lg" className="hidden md:flex">
            <Icon name="Phone" size={20} className="mr-2" />
            8 (800) 555-35-35
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="text-lg px-4 py-2" variant="secondary">
                <Icon name="Wrench" size={16} className="mr-2" />
                Профессиональный ремонт с 2010 года
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Ремонт телевизоров
                <span className="text-primary"> всех марок</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Быстро, качественно, с гарантией. Выезд мастера и диагностика бесплатно при ремонте.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Phone" size={24} className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Calculator" size={24} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">отремонтировано</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20"></div>
              <img 
                src="https://cdn.poehali.dev/projects/aa752e1a-ac1f-4974-a8b4-56b466edefa3/files/66e90a2b-9fae-46c9-bd63-5ebc00cac8fd.jpg" 
                alt="Ремонт телевизоров" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги и цены</h2>
            <p className="text-xl text-muted-foreground">Прозрачное ценообразование без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:border-primary">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши гарантии</h2>
            <p className="text-xl text-muted-foreground">Мы уверены в качестве нашей работы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={guarantee.icon} size={32} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{guarantee.title}</CardTitle>
                  <CardDescription className="text-base">{guarantee.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Card className="mt-12 border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Icon name="FileText" size={28} className="text-primary" />
                Гарантийные обязательства
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                <strong>Гарантия на работы:</strong> 6 месяцев на все виды выполненных работ. В случае возникновения неисправности по нашей вине, мы устраним её бесплатно.
              </p>
              <p>
                <strong>Гарантия на запчасти:</strong> от 3 до 12 месяцев в зависимости от типа комплектующих. Все детали оригинальные, с сертификатами качества.
              </p>
              <p>
                <strong>Бесплатный повторный выезд:</strong> если проблема повторится в течение гарантийного срока, мастер приедет бесплатно в удобное для вас время.
              </p>
              <p className="text-muted-foreground">
                * Гарантия не распространяется на механические повреждения и несоблюдение правил эксплуатации.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Нам доверяют тысячи людей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={18} className="text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Все отзывы на Яндекс.Картах
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                <CardDescription className="text-base">Мы перезвоним в течение 5 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Описание проблемы</label>
                  <Textarea placeholder="Опишите что случилось с телевизором..." rows={4} />
                </div>
                <Button size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Icon name="Phone" size={24} className="text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:88005553535" className="text-2xl font-bold hover:text-primary transition-colors">
                    8 (800) 555-35-35
                  </a>
                  <p className="text-muted-foreground mt-2">Звонок бесплатный, работаем 24/7</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Icon name="Mail" size={24} className="text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@tv-master.ru" className="text-xl hover:text-primary transition-colors">
                    info@tv-master.ru
                  </a>
                  <p className="text-muted-foreground mt-2">Ответим в течение часа</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl">Москва, ул. Примерная, д. 1</p>
                  <p className="text-muted-foreground mt-2">Работаем по всему городу</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-lg">© 2024 ТВ-Мастер. Все права защищены.</p>
          <p className="text-sm mt-2">Профессиональный ремонт телевизоров с гарантией</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;