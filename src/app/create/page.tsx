'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Image, Type, Palette, Download, Share2 } from 'lucide-react'

export default function CreateCard() {
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [message, setMessage] = useState('')
  const [recipient, setRecipient] = useState('')
  const [occasion, setOccasion] = useState('')
  const [tone, setTone] = useState('')
  const [imagePrompt, setImagePrompt] = useState('')
  const [font, setFont] = useState('inter')
  const [color, setColor] = useState('#ff0000')
  const [emoji, setEmoji] = useState('🎄')

  const templates = [
    { id: 'christmas', name: 'Natal', preview: '🎄' },
    { id: 'birthday', name: 'Aniversário', preview: '🎂' },
    { id: 'newyear', name: 'Ano Novo', preview: '🎆' },
    { id: 'mothersday', name: 'Dia das Mães', preview: '🌸' },
  ]

  const generateMessage = async () => {
    // TODO: Integrate with OpenAI for message generation
    setMessage(`Feliz ${occasion}! ${recipient}, espero que este cartão traga alegria aos seus dias.`)
  }

  const generateImage = async () => {
    // TODO: Integrate with OpenAI DALL-E for image generation
    console.log('Generating image with prompt:', imagePrompt)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Criar Cartão Personalizado</h1>
          <p className="text-gray-600">Use IA para criar cartões únicos e emocionantes</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Editor Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="template" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="template">Template</TabsTrigger>
                <TabsTrigger value="message">Mensagem</TabsTrigger>
                <TabsTrigger value="image">Imagem</TabsTrigger>
                <TabsTrigger value="style">Estilo</TabsTrigger>
              </TabsList>

              <TabsContent value="template" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Escolha um Template</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {templates.map((template) => (
                        <div
                          key={template.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                            selectedTemplate === template.id ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedTemplate(template.id)}
                        >
                          <div className="text-4xl mb-2">{template.preview}</div>
                          <div className="text-sm font-medium">{template.name}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="message" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Type className="h-5 w-5" />
                      Personalizar Mensagem
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="recipient">Para quem é o cartão?</Label>
                        <Input
                          id="recipient"
                          placeholder="Ex: Minha mãe, Meu amigo João"
                          value={recipient}
                          onChange={(e) => setRecipient(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="occasion">Ocasião</Label>
                        <Select value={occasion} onValueChange={setOccasion}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a ocasião" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="natal">Natal</SelectItem>
                            <SelectItem value="aniversario">Aniversário</SelectItem>
                            <SelectItem value="ano-novo">Ano Novo</SelectItem>
                            <SelectItem value="dia-das-maes">Dia das Mães</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="tone">Tom da mensagem</Label>
                      <Select value={tone} onValueChange={setTone}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tom" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emocional">Emocional</SelectItem>
                          <SelectItem value="divertida">Divertida</SelectItem>
                          <SelectItem value="profissional">Profissional</SelectItem>
                          <SelectItem value="religiosa">Religiosa</SelectItem>
                          <SelectItem value="poetica">Poética</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={generateMessage} className="w-full">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Gerar Mensagem com IA
                    </Button>
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Digite ou gere sua mensagem personalizada"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="image" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Image className="h-5 w-5" />
                      Gerar Imagem com IA
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="imagePrompt">Descrição da imagem</Label>
                      <Textarea
                        id="imagePrompt"
                        placeholder="Ex: Cena natalina com neve, luzes e família reunida"
                        value={imagePrompt}
                        onChange={(e) => setImagePrompt(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <Button onClick={generateImage} className="w-full">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Gerar Imagem
                    </Button>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Image className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-500">Sua imagem gerada aparecerá aqui</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="style" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      Personalizar Estilo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="font">Fonte</Label>
                        <Select value={font} onValueChange={setFont}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inter">Inter</SelectItem>
                            <SelectItem value="roboto">Roboto</SelectItem>
                            <SelectItem value="open-sans">Open Sans</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="color">Cor principal</Label>
                        <Input
                          id="color"
                          type="color"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          className="w-full h-10"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emoji">Emoji</Label>
                        <Input
                          id="emoji"
                          value={emoji}
                          onChange={(e) => setEmoji(e.target.value)}
                          placeholder="🎄"
                          maxLength={2}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[3/4] bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">{emoji}</div>
                    <div className="text-lg font-medium mb-4" style={{ color }}>
                      {selectedTemplate ? templates.find(t => t.id === selectedTemplate)?.name : 'Selecione um template'}
                    </div>
                    <div className="text-sm text-gray-600 whitespace-pre-line">
                      {message || 'Sua mensagem aparecerá aqui'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download JPG
                </Button>
                <Button className="w-full" variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
                <Button className="w-full">
                  Salvar Cartão
                </Button>
                <div className="text-xs text-gray-500 text-center">
                  Plano gratuito: 5 cartões/mês restantes
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}