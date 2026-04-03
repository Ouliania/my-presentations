import React from 'react';
import { Target, ArrowRight, MousePointerClick, Users, BadgeRussianRuble, LayoutTemplate, Megaphone, Clock, LineChart, MessageSquare, UserCheck, HelpCircle, Trophy, FileText, RefreshCw, Zap, Search, Type, Gift, Settings, Globe, CreditCard, Database, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Section 1: Hero */}
      <section className="bg-white py-20 md:py-32 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full w-fit mb-8">
            <Target className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wider">О чём этот проект</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
            Запуск нового канала привлечения b2b‑клиентов
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl leading-relaxed">
            По всей России для направления <span className="font-semibold text-amber-600">«Приправы и специи»</span>.
          </p>

          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Инструмент</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex-1 w-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 relative z-10">
                  <MousePointerClick className="w-7 h-7" />
                </div>
                <span className="font-semibold text-slate-800 text-lg relative z-10">Лендинг + Яндекс.Директ</span>
              </div>
              
              <ArrowRight className="w-8 h-8 text-slate-300 hidden md:block shrink-0" />
              
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex-1 w-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-amber-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-4 relative z-10">
                  <Users className="w-7 h-7" />
                </div>
                <span className="font-semibold text-slate-800 text-lg relative z-10">Генерация лидов</span>
              </div>
              
              <ArrowRight className="w-8 h-8 text-slate-300 hidden md:block shrink-0" />
              
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex-1 w-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 relative z-10">
                  <BadgeRussianRuble className="w-7 h-7" />
                </div>
                <span className="font-semibold text-slate-800 text-lg relative z-10">Продажа менеджером</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Steps */}
      <section className="bg-slate-50 py-20 md:py-32 border-b border-slate-200/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 tracking-tight">Что делаем и в какие сроки</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600">
                <LayoutTemplate className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">1. Лендинг</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Создаём сайт с нуля в чистом стиле. Главная задача — плавно довести потенциального клиента до заявки, а не «красота ради красоты».</p>
            </div>

            <div className="p-8 rounded-3xl border border-amber-100 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-amber-50 text-amber-600">
                <Megaphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">2. Реклама</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Настраиваем кампанию в Яндекс.Директ по регионам РФ. Фокус на целевом трафике от корпоративных клиентов.</p>
            </div>

            <div className="p-8 rounded-3xl border border-purple-100 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-purple-50 text-purple-600">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">3. Сроки</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Подготовка лендинга и рекламы: 2–3 недели. Далее запуск рекламы: 2 недели открутки для получения первых лидов и сбора статистики.</p>
            </div>

            <div className="p-8 rounded-3xl border border-emerald-100 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-emerald-50 text-emerald-600">
                <LineChart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">4. Результат теста</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Через 2 недели после запуска рекламы поймем стоимость лида и окупаемость. Принимаем решение: масштабировать, дорабатывать или менять стратегию.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Requirements */}
      <section className="bg-white py-20 md:py-32 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">Что нужно от вас на старте</h2>
          
          <div className="flex items-center space-x-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10 w-fit">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <MessageSquare className="w-6 h-6 text-amber-500" />
            </div>
            <p className="text-slate-700 font-medium text-lg">Интервью 30–60 минут — чтобы глубоко погрузиться в ваш бизнес.</p>
          </div>

          <h3 className="text-2xl font-semibold text-slate-800 mb-8">Мне важно выяснить:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start space-x-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
              <div className="bg-blue-50 p-4 rounded-xl text-blue-600 shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="pt-1">
                <p className="text-slate-700 text-lg">Кто ваш типичный b2b‑клиент и как он принимает решение о закупке.</p>
              </div>
            </div>

            <div className="flex items-start space-x-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-rose-200 transition-colors">
              <div className="bg-rose-50 p-4 rounded-xl text-rose-600 shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="pt-1">
                <p className="text-slate-700 text-lg">Какие вопросы и возражения чаще всего возникают на входе.</p>
              </div>
            </div>

            <div className="flex items-start space-x-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-amber-200 transition-colors">
              <div className="bg-amber-50 p-4 rounded-xl text-amber-600 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="pt-1">
                <p className="text-slate-700 text-lg">Чем вы отличаетесь от конкурентов и почему с вами продолжают работать.</p>
              </div>
            </div>

            <div className="flex items-start space-x-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
              <div className="bg-emerald-50 p-4 rounded-xl text-emerald-600 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="pt-1">
                <p className="text-slate-700 text-lg">Важные условия: объёмы, сроки и способы поставки, цены, оплата.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-8 rounded-r-2xl">
            <p className="text-amber-900 font-medium text-xl">
              Все это позволит сделать лендинг, который говорит с вашим клиентом на его языке и приводит больше релевантных заявок.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Feedback */}
      <section className="bg-slate-50 py-20 md:py-32 border-b border-slate-200/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">Обратная связь во время запуска</h2>
          
          <p className="text-xl text-slate-600 mb-10 max-w-4xl leading-relaxed">
            После старта рекламной кампании первые заявки начинают поступать менеджерам. 
            <span className="font-semibold text-slate-900 block mt-4 bg-rose-50 p-6 rounded-2xl border border-rose-100">
              Критично важно быстро получать от вас обратную связь по каждому лиду: был ли он целевым, если нет — в чём именно несоответствие.
            </span>
          </p>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
            <div className="flex items-center space-x-4 mb-10">
              <div className="bg-blue-100 p-3 rounded-xl">
                <RefreshCw className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800">Это даёт возможность оперативно корректировать:</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center justify-center">
                <div className="bg-indigo-100 p-4 rounded-full mb-6">
                  <Search className="w-8 h-8 text-indigo-600" />
                </div>
                <p className="font-semibold text-slate-800 text-lg">Объявления и ключевые фразы</p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center justify-center">
                <div className="bg-rose-100 p-4 rounded-full mb-6">
                  <Type className="w-8 h-8 text-rose-600" />
                </div>
                <p className="font-semibold text-slate-800 text-lg">Тексты и акценты на лендинге</p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center justify-center">
                <div className="bg-amber-100 p-4 rounded-full mb-6">
                  <Gift className="w-8 h-8 text-amber-600" />
                </div>
                <p className="font-semibold text-slate-800 text-lg">Офферы и формулировки</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 text-emerald-800 font-semibold bg-emerald-100/50 py-5 px-8 rounded-2xl w-fit mx-auto border border-emerald-100">
              <Zap className="w-6 h-6 text-emerald-600" />
              <span className="text-lg">Чтобы не сливать бюджет и постепенно повышать качество заявок.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Organization */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center space-x-4 mb-10">
            <div className="bg-slate-100 p-4 rounded-2xl">
              <Settings className="w-8 h-8 text-slate-700" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Организационные моменты</h2>
          </div>
          
          <p className="text-xl text-slate-600 mb-12">
            В процессе работы нам нужно согласовать несколько вопросов:
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-start space-x-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="bg-blue-100 p-5 rounded-2xl text-blue-600 shrink-0 group-hover:bg-blue-200 transition-colors">
                <Globe className="w-8 h-8" />
              </div>
              <div className="pt-1">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">Домен и доступы</h3>
                <p className="text-slate-600 text-lg">Домен для лендинга и доступы (если домен уже есть).</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all group">
              <div className="bg-emerald-100 p-5 rounded-2xl text-emerald-600 shrink-0 group-hover:bg-emerald-200 transition-colors">
                <CreditCard className="w-8 h-8" />
              </div>
              <div className="pt-1">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">Бюджет</h3>
                <p className="text-slate-600 text-lg">Рекламный бюджет и порядок его пополнения.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all group">
              <div className="bg-purple-100 p-5 rounded-2xl text-purple-600 shrink-0 group-hover:bg-purple-200 transition-colors">
                <Database className="w-8 h-8" />
              </div>
              <div className="pt-1">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">Учёт заявок</h3>
                <p className="text-slate-600 text-lg">Наличие и использование CRM (если доступны встроенные интеграции), либо получение заявок в мессенджеры и т.п.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-6 bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-xl">
            <div className="bg-emerald-500/20 p-4 rounded-full shrink-0 mb-6 md:mb-0">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <p className="font-medium text-xl md:text-2xl leading-relaxed text-center md:text-left">
              Все эти моменты мы решим в рабочем порядке до запуска рекламы, чтобы старт прошёл максимально гладко.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
