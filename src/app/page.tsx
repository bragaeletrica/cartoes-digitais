import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Star, Crown, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">Cartão Digital</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#plans" className="text-gray-600 hover:text-gray-900">Planos</Link>
            <Link href="#features" className="text-gray-600 hover:text-gray-900">Funcionalidades</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-gray-900">Galeria</Link>
            <Button asChild>
              <Link href="/create">Criar Cartão</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Crie cartões incríveis com <span className="text-red-500">IA</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Cartões personalizados para todas as datas comemorativas. Imagens geradas por IA,
            mensagens emocionantes e vídeos animados curtos.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/create">Começar Grátis</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#plans">Ver Planos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Escolha seu Plano</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Free Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Básico e Viral
                  <Badge variant="secondary">Grátis</Badge>
                </CardTitle>
                <CardDescription>Ideal para começar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">R$ 0</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Até 5 cartões/mês
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    5-10 templates gratuitos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Geração básica de imagem com IA
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Compartilhamento básico
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Galeria de inspiração
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/create">Começar</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Premium */}
            <Card className="relative border-2 border-blue-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500">Mais Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Criador Pro
                </CardTitle>
                <CardDescription>Personalização avançada</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">R$ 4,99 <span className="text-sm font-normal">/mês</span></div>
                <p className="text-sm text-gray-500 mb-4">Tudo do plano gratuito +</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    IA de imagem avançada
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Geração de mensagem com IA
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cartões animados (5-10s)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Templates premium ilimitados
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Sem marca d'água
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Salvar na nuvem
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Agendamento de envio
                  </li>
                </ul>
                <Button className="w-full" variant="default" asChild>
                  <Link href="/pricing">Assinar</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Annual Premium */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-purple-500" />
                  Embaixador de Emoções
                </CardTitle>
                <CardDescription>Para usuários fiéis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">R$ 39,99 <span className="text-sm font-normal">/ano</span></div>
                <p className="text-sm text-gray-500 mb-4">Economia de 33%</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Tudo do plano mensal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Biblioteca completa de datas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cartões empresariais
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Criação em lote (até 20)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Suporte prioritário
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Badge Premium
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/pricing">Assinar Anual</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Funcionalidades Incríveis</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>IA Artística</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Gere imagens temáticas únicas com IA avançada. De realista a cartoon, tudo personalizado.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mensagens Inteligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>IA cria mensagens emocionantes baseadas na relação e ocasião. Escolha o tom perfeito.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vídeos Animados</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Cartões que ganham vida com animações sutis e música de fundo temática.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Templates Diversos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>De Natal a Aniversário, escolha entre dezenas de designs atualizados mensalmente.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Compartilhamento Fácil</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Envie diretamente para WhatsApp, Instagram, e-mail ou agende para envio automático.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Galeria Comunitária</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Inspire-se com criações da comunidade e compartilhe suas próprias obras de arte.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-red-500 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para criar memórias?</h3>
          <p className="text-xl mb-8">Comece agora mesmo, é grátis!</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/create">Criar Meu Primeiro Cartão</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}