import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Brain, Zap, BarChart3, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">AI Training Platform</h1>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" asChild>
              <Link href="/auth/login">Войти</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/register">Регистрация</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Создавайте и тренируйте
              <span className="text-primary block">ИИ-модели</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Интерактивная платформа для студентов, разработчиков и исследователей.
              Создавайте нейронные сети с помощью визуального интерфейса.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Начать создание
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Посмотреть демо
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Визуальный конструктор</h3>
            <p className="text-muted-foreground">
              Создавайте нейронные сети перетаскиванием слоев
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Быстрое обучение</h3>
            <p className="text-muted-foreground">
              Настраивайте параметры и запускайте обучение в один клик
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Графики в реальном времени</h3>
            <p className="text-muted-foreground">
              Отслеживайте метрики обучения в реальном времени
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Cloud className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Облачное хранение</h3>
            <p className="text-muted-foreground">
              Сохраняйте и делитесь своими моделями
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
