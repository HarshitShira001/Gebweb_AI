const openRouterUrl="https://openrouter.ai/api/v1/chat/completions"
const model = "deepseek/deepseek-chat-v3-0324"

export const generateResponse=async (prompt)=>{
  try {
    const res = await fetch(openRouterUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': process.env.SITE_URL || 'http://localhost:5173',
        'X-OpenRouter-Title': 'Genweb.Ai',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model,
        messages: [
            {role:"system",content:"You must return ONLY valid raw JSON."

            },
            {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.2
      }),
    })

    
    const data = await res.json()
    return data?.choices?.[0]?.message?.content ?? null
  } catch (error) {
    console.error('OpenRouter API error:', error)
    throw error
  }
}

export default generateResponse