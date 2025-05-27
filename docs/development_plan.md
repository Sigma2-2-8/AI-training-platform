# План разработки AI Training Platform

## 📋 Общая информация

**Проект**: Платформа для создания и тренировки ИИ-моделей
**Технологии**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Supabase
**Репозиторий**: https://github.com/Sigma2-2-8/AI-training-platform
**Методология**: Поэтапная разработка с коммитами после каждого этапа

---

## 🎯 Этапы разработки

### Этап 1: Базовая инфраструктура ⏱️ 30-45 мин
**Статус**: ✅ Завершен

#### Задачи:
- [x] Инициализация Next.js проекта с TypeScript
- [x] Настройка Tailwind CSS
- [x] Установка и настройка shadcn/ui
- [x] Создание базовой структуры папок
- [x] Настройка темной/светлой темы
- [x] Создание базового layout
- [x] Создание главной страницы с Hero секцией

#### Файлы созданы:
- `src/components/ui/button.tsx` ✅
- `src/components/ui/theme-toggle.tsx` ✅
- `src/lib/utils.ts` ✅
- `src/app/layout.tsx` ✅ (обновлен с ThemeProvider)
- `src/app/page.tsx` ✅ (создана landing page)
- `src/app/globals.css` ✅
- `tailwind.config.ts` ✅
- `next.config.ts` ✅
- `postcss.config.mjs` ✅

#### Коммит: "feat: базовая инфраструктура Next.js с темной темой и landing page"

---

### Этап 2: Система аутентификации ⏱️ 1-1.5 часа
**Статус**: ⏳ Ожидает

#### Задачи:
- [ ] Создание проекта Supabase
- [ ] Настройка переменных окружения
- [ ] Создание Supabase клиента
- [ ] Middleware для защищенных маршрутов
- [ ] Страница входа (`/auth/login`)
- [ ] Страница регистрации (`/auth/register`)
- [ ] Компонент AuthProvider
- [ ] Хук useAuth

#### Файлы для создания:
- `.env.local`
- `src/lib/supabase.ts`
- `src/components/auth/auth-provider.tsx`
- `src/components/auth/login-form.tsx`
- `src/components/auth/register-form.tsx`
- `src/app/auth/login/page.tsx`
- `src/app/auth/register/page.tsx`
- `src/hooks/use-auth.ts`
- `middleware.ts`

#### Коммит: "feat: система аутентификации с Supabase"

---

### Этап 3: Основной интерфейс ⏱️ 45 мин
**Статус**: ⏳ Ожидает

#### Задачи:
- [ ] Создание главной страницы Dashboard
- [ ] Навигационное меню (Sidebar)
- [ ] Хедер с профилем пользователя
- [ ] Адаптивный дизайн
- [ ] Базовые страницы (Модели, Конструктор, Обучение)

#### Файлы для создания:
- `src/components/layout/sidebar.tsx`
- `src/components/layout/header.tsx`
- `src/components/layout/dashboard-layout.tsx`
- `src/app/dashboard/page.tsx`
- `src/app/dashboard/layout.tsx`
- `src/app/models/page.tsx`
- `src/app/constructor/page.tsx`
- `src/app/training/page.tsx`

#### Коммит: "feat: основной интерфейс Dashboard с навигацией"

---

### Этап 4: Визуальный конструктор нейронных сетей ⏱️ 2-2.5 часа
**Статус**: ⏳ Ожидает

#### Подэтап 4.1: Базовая структура конструктора
- [ ] Установка React Flow
- [ ] Создание canvas для drag-and-drop
- [ ] Базовые компоненты узлов
- [ ] Панель инструментов

#### Подэтап 4.2: Компоненты слоев нейронной сети
- [ ] Dense (Полносвязный слой)
- [ ] Conv2D (Сверточный слой)
- [ ] MaxPooling2D (Слой пулинга)
- [ ] Dropout (Слой регуляризации)
- [ ] Flatten (Слой выравнивания)
- [ ] Input (Входной слой)
- [ ] Output (Выходной слой)

#### Подэтап 4.3: Настройка параметров слоев
- [ ] Панель свойств слоя
- [ ] Валидация параметров
- [ ] Предварительный просмотр архитектуры

#### Файлы для создания:
- `src/components/neural-network/canvas.tsx`
- `src/components/neural-network/toolbar.tsx`
- `src/components/neural-network/layer-nodes/`
  - `dense-node.tsx`
  - `conv2d-node.tsx`
  - `pooling-node.tsx`
  - `dropout-node.tsx`
  - `flatten-node.tsx`
  - `input-node.tsx`
  - `output-node.tsx`
- `src/components/neural-network/properties-panel.tsx`
- `src/types/neural-network.ts`
- `src/stores/neural-network-store.ts`

#### Коммит: "feat: визуальный конструктор нейронных сетей"

---

### Этап 5: Конфигуратор параметров обучения ⏱️ 1 час
**Статус**: ⏳ Ожидает

#### Задачи:
- [ ] Выбор оптимизатора (Adam, SGD, RMSprop)
- [ ] Настройка функции потерь
- [ ] Управление гиперпараметрами
- [ ] Настройки эпох и batch size
- [ ] Валидация конфигурации

#### Файлы для создания:
- `src/components/training/optimizer-selector.tsx`
- `src/components/training/loss-function-selector.tsx`
- `src/components/training/hyperparameters-panel.tsx`
- `src/components/training/training-config.tsx`
- `src/types/training.ts`

#### Коммит: "feat: конфигуратор параметров обучения"

---

### Этап 6: Графики обучения с Recharts ⏱️ 1 час
**Статус**: ⏳ Ожидает

#### Задачи:
- [ ] Компонент графика точности
- [ ] Компонент графика потерь
- [ ] Компонент метрик в реальном времени
- [ ] Мок-данные для демонстрации
- [ ] Экспорт графиков

#### Файлы для создания:
- `src/components/charts/accuracy-chart.tsx`
- `src/components/charts/loss-chart.tsx`
- `src/components/charts/metrics-dashboard.tsx`
- `src/components/charts/real-time-chart.tsx`
- `src/lib/mock-data.ts`

#### Коммит: "feat: графики обучения с Recharts"

---

### Этап 7: Облачное хранение моделей ⏱️ 1.5 часа
**Статус**: ⏳ Ожидает

#### Задачи:
- [ ] Настройка Supabase Storage
- [ ] Сохранение архитектуры модели
- [ ] Загрузка/выгрузка моделей
- [ ] Версионирование моделей
- [ ] Список сохраненных моделей

#### Файлы для создания:
- `src/lib/model-storage.ts`
- `src/components/models/model-list.tsx`
- `src/components/models/model-card.tsx`
- `src/components/models/save-model-dialog.tsx`
- `src/components/models/load-model-dialog.tsx`

#### Коммит: "feat: облачное хранение моделей"

---

### Этап 8: Дополнительные функции ⏱️ 2 часа
**Статус**: ⏳ Ожидает

#### Подэтап 8.1: Шаблоны для быстрого старта
- [ ] Предустановленные архитектуры
- [ ] Шаблоны для разных задач (классификация, регрессия)
- [ ] Импорт шаблонов

#### Подэтап 8.2: Визуализация работы моделей
- [ ] Предварительный просмотр данных
- [ ] Визуализация активаций
- [ ] Интерпретация результатов

#### Подэтап 8.3: Инструменты тестирования и экспорт
- [ ] Валидация модели
- [ ] Экспорт в ONNX
- [ ] Экспорт в TensorFlow
- [ ] Экспорт в PyTorch

#### Файлы для создания:
- `src/components/templates/template-gallery.tsx`
- `src/components/visualization/model-preview.tsx`
- `src/components/export/export-dialog.tsx`
- `src/lib/model-export.ts`

#### Коммит: "feat: шаблоны, визуализация и экспорт моделей"

---

## 🔧 Технические детали

### Структура проекта:
```
src/
├── app/                    # Next.js App Router
│   ├── auth/              # Страницы аутентификации
│   ├── dashboard/         # Главная панель
│   ├── constructor/       # Конструктор моделей
│   ├── training/          # Обучение моделей
│   └── models/            # Управление моделями
├── components/            # React компоненты
│   ├── ui/               # Базовые UI компоненты
│   ├── auth/             # Компоненты аутентификации
│   ├── neural-network/   # Конструктор нейросетей
│   ├── charts/           # Графики и визуализация
│   └── layout/           # Компоненты макета
├── lib/                  # Утилиты и конфигурация
├── hooks/                # Пользовательские хуки
├── stores/               # Состояние приложения
└── types/                # TypeScript типы
```

### Зависимости:
- **Основные**: Next.js 14, React 18, TypeScript
- **UI**: Tailwind CSS, shadcn/ui, Lucide React
- **Состояние**: Zustand (для конструктора)
- **Графики**: Recharts
- **Drag & Drop**: React Flow
- **Аутентификация**: Supabase Auth
- **База данных**: Supabase
- **Темы**: next-themes

---

## 📝 Правила коммитов

### Формат коммитов:
```
<type>: <description>

feat: новая функциональность
fix: исправление ошибки
docs: обновление документации
style: форматирование кода
refactor: рефакторинг
test: добавление тестов
```

### После каждого этапа:
1. Тестирование функциональности
2. Проверка на ошибки
3. Коммит изменений
4. Push в GitHub
5. Обновление статуса в плане

---

## 🎯 Критерии готовности

### Минимально жизнеспособный продукт (MVP):
- ✅ Базовая инфраструктура
- ⏳ Система аутентификации
- ⏳ Простой конструктор нейросетей
- ⏳ Базовые графики обучения
- ⏳ Сохранение моделей

### Полная версия:
- Все функции из ТЗ
- Адаптивный дизайн
- Темная/светлая тема
- Экспорт моделей
- Шаблоны и визуализация

---

**Дата создания**: 20 мая 2025
**Последнее обновление**: 20 мая 2025
**Статус проекта**: В разработке (Этап 2) - Этап 1 завершен ✅
