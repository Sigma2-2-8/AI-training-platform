import Link from 'next/link'
import { Brain } from 'lucide-react'
import { LoginForm } from '@/components/auth/login-form'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center">
              <Brain className="h-12 w-12 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold">
              Вход в AI Training Platform
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Или{' '}
              <Link
                href="/auth/register"
                className="font-medium text-primary hover:underline"
              >
                создайте новый аккаунт
              </Link>
            </p>
          </div>

          <LoginForm />
        </div>
      </div>

      {/* Right side - Hero */}
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center bg-muted">
        <div className="max-w-md text-center space-y-6">
          <h3 className="text-2xl font-bold">
            Создавайте ИИ-модели визуально
          </h3>
          <p className="text-muted-foreground">
            Простой drag-and-drop интерфейс для создания нейронных сетей. 
            Никакого программирования - только ваши идеи.
          </p>
        </div>
      </div>

      {/* Theme toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  )
}
