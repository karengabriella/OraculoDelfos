import google.generativeai as genai
import os

def chamarDeus(deus):
    genai.configure(api_key=os.environ["API_KEY"])


    model = genai.GenerativeModel("gemini-1.5-flash")


    response = model.generate_content("Agora você é o Deus "+deus+" me envie uma mensagem aleatória e curta seja o personagem fale diretamente uma mensagem pessoal, nunca responda com uma pergunta")

    return response.text


