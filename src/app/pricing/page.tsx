'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Star, Crown, CreditCard, Shield, Zap } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Básico e Viral',
      description: 'Ideal para começar',
      monthlyPrice: 0,
      annualPrice: 0,
      icon: <Zap className="h-6 w-6" />,
      features: [
        'Até 5 cartões/mês',
        '5-10 templates gratuitos',
        'Geração básica de imagem com IA',
        'Compartilhamento básico',
        'Galeria de inspiração',
        'Marca d\'água nos cartões'
      ],
      buttonText: 'Começar Grátis',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Criador Pro',
      description: 'Personalização avançada',
      monthlyPrice: 4.99,
      annualPrice: 49.99,
      icon: <Star className="h-6 w-6" />,
      features: [
        'Tudo do plano Básico',
        'IA de imagem avançada (estilos variados)',
        'Geração de mensagem com IA',
        'Cartões animados (5-10s)',
        'Templates premium ilimitados',
        'Sem marca d\'água',
        'Salvar na nuvem',
        'Agendamento de envio',
        'Histórico de criações'
      ],
      buttonText: 'Assinar Pro',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: 'Embaixador de Emoções',
      description: 'Para usuários fiéis',
      monthlyPrice: 39.99,
      annualPrice: 399.99,
      icon: <Crown className="h-6 w-6" />,
      features: [
        'Tudo do plano Pro',
        'Biblioteca completa de datas comemorativas',
        'Cartões empresariais customizados',
        'Criação em lote (até 20 contatos)',
        'Armazenamento ampliado',
        'Suporte prioritário',
        'Badge Premium na comunidade',
        'Descontos em pacotes de vídeos'
      ],
      buttonText: 'Assinar Anual',
      buttonVariant: 'outline' as const,
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Escolha seu Plano</h1>
          <p className="text-xl text-gray-600 mb-8">
            Desbloqueie todo o potencial da criação de cartões com IA
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Label htmlFor="billing-toggle" className={!isAnnual ? 'font-semibold' : ''}>
              Mensal
            </Label>
            <Switch
              id="billing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label htmlFor="billing-toggle" className={isAnnual ? 'font-semibold' : ''}>
              Anual
              <Badge variant="secondary" className="ml-2">Economia de 17%</Badge>
            </Label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white">Mais Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold">
                    R$ {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    {plan.monthlyPrice > 0 && (
                      <span className="text-lg font-normal text-gray-500">
                        /{isAnnual ? 'ano' : 'mês'}
                      </span>
                    )}
                  </div>
                  {isAnnual && plan.monthlyPrice > 0 && (
                    <div className="text-sm text-gray-500 mt-1">
                      R$ {(plan.annualPrice / 12).toFixed(2)}/mês
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.buttonVariant}>
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Posso cancelar a qualquer momento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim, você pode cancelar sua assinatura a qualquer momento. Não há taxas de cancelamento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como funciona o plano anual?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  O plano anual oferece desconto de 17% comparado ao mensal. Você paga uma vez por ano.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Posso mudar de plano?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento nas configurações.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">O que acontece com meus cartões salvos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seus cartões salvos permanecem disponíveis mesmo após cancelar. Apenas recursos premium são bloqueados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
          <p className="text-lg mb-6">
            Junte-se a milhares de usuários criando cartões incríveis com IA
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <CreditCard className="h-5 w-5 mr-2" />
              Começar Teste Grátis
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Shield className="h-5 w-5 mr-2" />
              Garantia de 30 dias
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}