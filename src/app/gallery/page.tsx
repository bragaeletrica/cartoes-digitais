'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Heart, Share2, Download, Search, Filter } from 'lucide-react'

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterOccasion, setFilterOccasion] = useState('')

  // Mock data - in real app, this would come from Supabase
  const cards = [
    {
      id: 1,
      title: 'Feliz Natal!',
      occasion: 'natal',
      author: 'Maria Silva',
      likes: 124,
      image: '🎄',
      message: 'Que este Natal traga paz e alegria para sua família!',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Parabéns!',
      occasion: 'aniversario',
      author: 'João Santos',
      likes: 89,
      image: '🎂',
      message: 'Que seu aniversário seja repleto de momentos especiais!',
      createdAt: '2024-01-10'
    },
    {
      id: 3,
      title: 'Feliz Ano Novo!',
      occasion: 'ano-novo',
      author: 'Ana Costa',
      likes: 156,
      image: '🎆',
      message: 'Que o novo ano traga realizações e felicidade!',
      createdAt: '2024-01-01'
    },
    {
      id: 4,
      title: 'Dia das Mães',
      occasion: 'dia-das-maes',
      author: 'Pedro Oliveira',
      likes: 203,
      image: '🌸',
      message: 'Obrigado por tudo, mamãe! Você é o nosso maior tesouro.',
      createdAt: '2024-01-20'
    },
  ]

  const filteredCards = cards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesOccasion = !filterOccasion || card.occasion === filterOccasion
    return matchesSearch && matchesOccasion
  })

  const getOccasionName = (occasion: string) => {
    const names: { [key: string]: string } = {
      'natal': 'Natal',
      'aniversario': 'Aniversário',
      'ano-novo': 'Ano Novo',
      'dia-das-maes': 'Dia das Mães'
    }
    return names[occasion] || occasion
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Galeria de Inspiração</h1>
          <p className="text-gray-600">Explore cartões criados pela comunidade e inspire-se</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar cartões..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={filterOccasion} onValueChange={setFilterOccasion}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filtrar por ocasião" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas as ocasiões</SelectItem>
              <SelectItem value="natal">Natal</SelectItem>
              <SelectItem value="aniversario">Aniversário</SelectItem>
              <SelectItem value="ano-novo">Ano Novo</SelectItem>
              <SelectItem value="dia-das-maes">Dia das Mães</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCards.map((card) => (
            <Card key={card.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center relative">
                <div className="text-6xl">{card.image}</div>
                <Badge className="absolute top-2 left-2" variant="secondary">
                  {getOccasionName(card.occasion)}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{card.message}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>Por {card.author}</span>
                  <span>{card.likes} curtidas</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Heart className="h-3 w-3 mr-1" />
                    Curtir
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum cartão encontrado com os filtros aplicados.</p>
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">
            Carregar Mais Cartões
          </Button>
        </div>
      </div>
    </div>
  )
}