import { Bot, Zap, BarChart3, MessageSquare, TrendingUp, Check, Star, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-gray-900">AI Business OS</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition">Возможности</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition">Тарифы</a>
            <a href="#demo" className="text-gray-600 hover:text-primary transition">Демо</a>
          </nav>
          <a 
            href="https://t.me/Sashikom_bot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition"
          >
            Попробовать
          </a>
        </div>
      </header>

      {/* Главный экран */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">🎁 3 дня бесплатно — без карты!</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI-помощник для вашего бизнеса
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Автоматизируйте контент, исследуйте рынок, стройте воронки продаж 
            с помощью искусственного интеллекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://t.me/Sashikom_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition flex items-center justify-center"
            >
              Начать бесплатно
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition"
            >
              Смотреть тарифы
            </a>
          </div>
          <p className="mt-4 text-blue-200 text-sm">
            💰 От 1 490₽/мес • ⚡ Мгновенный старт • 🚀 Без программиста
          </p>
        </div>
      </section>

      {/* Возможности */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Всё, что нужно для роста бизнеса
            </h2>
            <p className="text-xl text-gray-600">
              4 мощных AI-модуля в одной платформе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<MessageSquare className="w-12 h-12 text-primary" />}
              title="AI Чат"
              description="Задавайте любые вопросы о бизнесе. Получайте мгновенные ответы и рекомендации 24/7."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-12 h-12 text-primary" />}
              title="Исследование рынка"
              description="Анализируйте конкурентов, тренды и целевую аудиторию за 30 секунд."
            />
            <FeatureCard 
              icon={<Zap className="w-12 h-12 text-primary" />}
              title="Контент"
              description="Генерируйте посты, статьи, email-рассылки и описания товаров автоматически."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-12 h-12 text-primary" />}
              title="Воронки продаж"
              description="Создавайте эффективные воронки и скрипты продаж под ваш бизнес."
            />
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Простые и честные тарифы
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Выберите подходящий план
            </p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Check className="w-5 h-5 mr-2" />
              <span className="font-semibold">🎁 3 дня бесплатно — любой тариф!</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Старт */}
            <PricingCard 
              name="Старт"
              price="1 490₽"
              period="/мес"
              description="Для фрилансеров и начинающих"
              features={[
                "100 AI-запросов/мес",
                "AI Чат",
                "Контент-модуль",
                "Email поддержка",
              ]}
              cta="Начать"
              href="https://t.me/Sashikom_bot"
            />

            {/* Бизнес - Популярный */}
            <PricingCard 
              name="Бизнес"
              price="2 490₽"
              period="/мес"
              description="Для малого бизнеса"
              features={[
                "500 AI-запросов/мес",
                "Все 4 модуля",
                "Исследование рынка",
                "Воронки продаж",
                "Telegram поддержка 24/7",
                "API доступ",
              ]}
              cta="Попробовать 3 дня"
              href="https://t.me/Sashikom_bot"
              popular
            />

            {/* Премиум */}
            <PricingCard 
              name="Премиум"
              price="4 990₽"
              period="/мес"
              description="Для растущих компаний"
              features={[
                "Безлимит AI-запросов",
                "Все модули",
                "Личный менеджер",
                "Приоритетная поддержка",
                "White label",
                "Кастомные интеграции",
              ]}
              cta="Связаться"
              href="https://t.me/Sashikom"
            />
          </div>
        </div>
      </section>

      {/* Демо */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              Попробуйте бесплатно прямо сейчас
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              3 дня полного доступа ко всем функциям. 
              Никакой карты не требуется.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/Sashikom_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
              >
                Запустить бота в Telegram
              </a>
              <a 
                href="https://t.me/Sashikom" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition"
              >
                Задать вопрос
              </a>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              ⚡ Мгновенная активация • 🚀 Работает 24/7 • 💯 Без обязательств
            </p>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">AI Business OS</span>
              </div>
              <p className="text-gray-400">
                AI-помощник для автоматизации бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <p className="text-gray-400">Telegram: @Sashikom</p>
              <p className="text-gray-400">Бот: @Sashikom_bot</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Ссылки</h3>
              <a href="#features" className="block text-gray-400 hover:text-white transition">Возможности</a>
              <a href="#pricing" className="block text-gray-400 hover:text-white transition">Тарифы</a>
              <a href="https://t.me/Sashikom_bot" className="block text-gray-400 hover:text-white transition">Попробовать</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 AI Business OS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6 rounded-xl hover:shadow-lg transition bg-gray-50">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  cta, 
  href,
  popular = false 
}: { 
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  cta: string; 
  href: string;
  popular?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-8 ${popular ? 'bg-blue-600 text-white shadow-xl scale-105' : 'bg-white text-gray-900 shadow-lg'}`}>
      {popular && (
        <div className="inline-block bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
          ⭐ Популярный
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className={`mb-4 ${popular ? 'text-blue-100' : 'text-gray-600'}`}>{description}</p>
      <div className="mb-6">
        <span className="text-5xl font-bold">{price}</span>
        <span className={popular ? 'text-blue-200' : 'text-gray-500'}>{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${popular ? 'text-blue-200' : 'text-green-500'}`} />
            <span className={popular ? 'text-blue-100' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center py-3 rounded-lg font-bold transition ${
          popular 
            ? 'bg-white text-blue-600 hover:bg-gray-100' 
            : 'bg-primary text-white hover:bg-secondary'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

export default App;