import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import '@fontsource/inter';
import '@fontsource/roboto';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const cards = [
    {
      title: 'МИР',
      description: 'Всемирная дебетовая карта',
      features: ['Работает по всему миру', 'Бесплатное обслуживание', 'Cashback до 5%', 'Мгновенные переводы'],
      gradient: 'from-vbank-blue to-blue-600',
      icon: 'Globe'
    },
    {
      title: 'VILL-PREMIUM',
      description: 'Премиальная карта для Венгрии',
      features: ['Без комиссий по всем операциям', 'Бонусы увеличены в 1,5 раза', 'Технология V-PAY', 'Премиум поддержка 24/7'],
      gradient: 'from-yellow-400 to-amber-600',
      icon: 'Crown',
      isPremium: true
    },
    {
      title: 'VILL',
      description: 'Дебетовая карта для Венгрии',
      features: ['Технология V-PAY', 'Только для Венгрии', 'Локальные бонусы', 'Низкие комиссии'],
      gradient: 'from-vbank-light-blue to-slate-600',
      icon: 'MapPin'
    }
  ];

  const services = [
    { icon: 'Shield', title: 'Безопасность', description: 'Защита средств 24/7' },
    { icon: 'Smartphone', title: 'Мобильный банк', description: 'Управление счетами' },
    { icon: 'CreditCard', title: 'Переводы', description: 'Мгновенные операции' },
    { icon: 'HeadphonesIcon', title: 'Поддержка', description: 'Круглосуточная помощь' },
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-vbank-blue to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <h1 className="text-2xl font-bold text-vbank-dark" style={{ fontFamily: 'Inter' }}>V-BANK</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'cards', label: 'Карты' },
                { id: 'services', label: 'Услуги' },
                { id: 'vpremium', label: 'V-PREMIUM' },

                { id: 'about', label: 'О банке' },
                { id: 'support', label: 'Поддержка' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm transition-colors hover:text-vbank-blue ${
                    activeSection === item.id ? 'text-vbank-blue font-medium' : 'text-gray-600'
                  }`}
                  style={{ fontFamily: 'Roboto' }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button className="bg-vbank-blue hover:bg-blue-700">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-vbank-dark mb-6" style={{ fontFamily: 'Inter' }}>
              Банк будущего 
              <span className="bg-gradient-to-r from-vbank-blue to-blue-600 bg-clip-text text-transparent"> уже здесь</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Roboto' }}>
              Инновационные банковские решения с технологиями завтрашнего дня. 
              Управляйте финансами проще, быстрее и безопаснее.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-vbank-blue hover:bg-blue-700 px-8 py-6 text-lg">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Открыть карту
              </Button>
              <Button size="lg" variant="outline" className="border-vbank-blue text-vbank-blue hover:bg-vbank-blue hover:text-white px-8 py-6 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-vbank-dark mb-4" style={{ fontFamily: 'Inter' }}>
              Наши карты
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Выберите карту, которая подходит именно вам
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                card.isPremium ? 'border-2 border-yellow-400 scale-105' : 'border-0'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10`} />
                {card.isPremium && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-amber-600 text-white px-4 py-1 font-bold">
                      PREMIUM
                    </Badge>
                  </div>
                )}
                <CardHeader className="relative">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center`}>
                      <Icon name={card.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl" style={{ fontFamily: 'Inter' }}>{card.title}</CardTitle>
                      <CardDescription style={{ fontFamily: 'Roboto' }}>{card.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-gray-700" style={{ fontFamily: 'Roboto' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${
                    card.isPremium 
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-white' 
                      : 'bg-vbank-blue hover:bg-blue-700'
                  }`}>
                    Оформить карту
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-vbank-dark mb-4" style={{ fontFamily: 'Inter' }}>
              Наши услуги
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Полный спектр банковских услуг для вашего комфорта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-vbank-blue to-blue-600 rounded-2xl flex items-center justify-center">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-vbank-dark mb-2" style={{ fontFamily: 'Inter' }}>
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Roboto' }}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* About Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-vbank-dark mb-6" style={{ fontFamily: 'Inter' }}>
              О банке V-BANK
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Roboto' }}>
              V-BANK — современный цифровой банк, который объединяет инновационные технологии 
              и персональный подход к каждому клиенту. Мы предлагаем удобные банковские решения 
              для жизни в цифровую эпоху.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-vbank-blue mb-2" style={{ fontFamily: 'Inter' }}>500K+</div>
                <div className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vbank-blue mb-2" style={{ fontFamily: 'Inter' }}>24/7</div>
                <div className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Поддержка клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vbank-blue mb-2" style={{ fontFamily: 'Inter' }}>99.9%</div>
                <div className="text-gray-600" style={{ fontFamily: 'Roboto' }}>Время работы системы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-vbank-dark mb-4" style={{ fontFamily: 'Inter' }}>
              Поддержка
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Roboto' }}>
              Мы всегда готовы помочь вам решить любые вопросы
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80">
              <CardContent className="p-6">
                <Icon name="Phone" size={32} className="mx-auto mb-4 text-vbank-blue" />
                <h4 className="text-lg font-semibold text-vbank-dark mb-2" style={{ fontFamily: 'Inter' }}>
                  Телефон
                </h4>
                <p className="text-vbank-blue font-medium" style={{ fontFamily: 'Roboto' }}>
                  8 800 555 00 00
                </p>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Roboto' }}>
                  Звонок бесплатный
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80">
              <CardContent className="p-6">
                <Icon name="MessageCircle" size={32} className="mx-auto mb-4 text-vbank-blue" />
                <h4 className="text-lg font-semibold text-vbank-dark mb-2" style={{ fontFamily: 'Inter' }}>
                  Онлайн-чат
                </h4>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Roboto' }}>
                  Быстрые ответы на ваши вопросы
                </p>
                <Button className="mt-3 bg-vbank-blue hover:bg-blue-700">
                  Открыть чат
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80">
              <CardContent className="p-6">
                <Icon name="Mail" size={32} className="mx-auto mb-4 text-vbank-blue" />
                <h4 className="text-lg font-semibold text-vbank-dark mb-2" style={{ fontFamily: 'Inter' }}>
                  Email
                </h4>
                <p className="text-vbank-blue font-medium" style={{ fontFamily: 'Roboto' }}>
                  support@v-bank.ru
                </p>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Roboto' }}>
                  Ответ в течение 2 часов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-vbank-blue/5 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-vbank-dark mb-4" style={{ fontFamily: 'Inter' }}>
                Контакты
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                Свяжитесь с нами удобным для вас способом
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 bg-white/80">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Icon name="MapPin" size={24} className="text-vbank-blue mt-1" />
                      <div>
                        <h4 className="font-semibold text-vbank-dark mb-1" style={{ fontFamily: 'Inter' }}>
</h4>
                        <p className="text-gray-600 font-normal" style={{ fontFamily: 'Roboto' }}></p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Icon name="Clock" size={24} className="text-vbank-blue mt-1" />
                      <div>
                        <h4 className="font-semibold text-vbank-dark mb-1" style={{ fontFamily: 'Inter' }}>
                          Время работы
                        </h4>
                        <p className="text-gray-600" style={{ fontFamily: 'Roboto' }}>
                          Пн-Пт: 9:00 - 20:00<br />
                          Сб-Вс: 10:00 - 18:00
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Icon name="Globe" size={24} className="text-vbank-blue mt-1" />
                      <div>
                        <h4 className="font-semibold text-vbank-dark mb-1" style={{ fontFamily: 'Inter' }}>
                          Социальные сети
                        </h4>
                        <div className="flex space-x-3">
                          <Button size="sm" variant="outline" className="p-2">
                            <Icon name="MessageCircle" size={16} />
                          </Button>
                          <Button size="sm" variant="outline" className="p-2">
                            <Icon name="Send" size={16} />
                          </Button>
                          <Button size="sm" variant="outline" className="p-2">
                            <Icon name="Instagram" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-white/80">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-vbank-dark mb-6" style={{ fontFamily: 'Inter' }}>
                    Напишите нам
                  </h4>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vbank-blue focus:border-transparent"
                      style={{ fontFamily: 'Roboto' }}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vbank-blue focus:border-transparent"
                      style={{ fontFamily: 'Roboto' }}
                    />
                    <textarea
                      placeholder="Сообщение"
                      rows={4}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vbank-blue focus:border-transparent resize-none"
                      style={{ fontFamily: 'Roboto' }}
                    />
                    <Button className="w-full bg-vbank-blue hover:bg-blue-700">
                      Отправить сообщение
                      <Icon name="Send" size={16} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vbank-dark text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-vbank-blue to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Inter' }}>V-BANK</span>
              </div>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Roboto' }}>
                Современный цифровой банк для вашего комфорта
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4" style={{ fontFamily: 'Inter' }}>Продукты</h5>
              <ul className="space-y-2 text-sm text-gray-400" style={{ fontFamily: 'Roboto' }}>
                <li>Карты МИР</li>
                <li>Карты VILL</li>
                <li>Депозиты</li>
                <li>Кредиты</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4" style={{ fontFamily: 'Inter' }}>Услуги</h5>
              <ul className="space-y-2 text-sm text-gray-400" style={{ fontFamily: 'Roboto' }}>
                <li>Мобильный банк</li>
                <li>Интернет-банк</li>
                <li>Переводы</li>
                <li>Инвестиции</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4" style={{ fontFamily: 'Inter' }}>Компания</h5>
              <ul className="space-y-2 text-sm text-gray-400" style={{ fontFamily: 'Roboto' }}>
                <li>О банке</li>
                <li>Вакансии</li>
                <li>Пресс-центр</li>
                <li>Лицензии</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Roboto' }}>
              © 2024 V-BANK. Все права защищены. Лицензия ЦБ РФ № 123456
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}