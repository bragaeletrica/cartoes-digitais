import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateImage(prompt: string) {
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      size: '1024x1024',
      quality: 'standard',
      n: 1,
    })

    return response.data[0].url
  } catch (error) {
    console.error('Error generating image:', error)
    throw new Error('Falha ao gerar imagem')
  }
}

export async function generateMessage(recipient: string, occasion: string, tone: string) {
  try {
    const prompt = `Crie uma mensagem personalizada de cartão para ${recipient} na ocasião de ${occasion}, com tom ${tone}. A mensagem deve ser emocionalmente apropriada, concisa e calorosa.`

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente especializado em criar mensagens emocionantes e personalizadas para cartões comemorativos.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 200,
      temperature: 0.7,
    })

    return response.choices[0].message.content?.trim() || ''
  } catch (error) {
    console.error('Error generating message:', error)
    throw new Error('Falha ao gerar mensagem')
  }
}