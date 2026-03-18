# Generate MCQs using Gemini

from langchain_google_genai import ChatGoogleGenerativeAI
from config import settings

llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=settings.GEMINI_API_KEY,
    temperature=0.7
)

def generate_mcqs(text):

    prompt = f"""
Generate 5 multiple choice questions about the topic below.

Topic: {text}

Rules:
- Each question must test conceptual understanding.
- Provide 4 options (A,B,C,D).
- Mark the correct answer.
- Do not explain the prompt itself.
- Do not say the text is insufficient.

Output format:

Question:
A)
B)
C)
D)
Answer:
"""

#     prompt = f"""
# Generate 5 MCQs from the text.

# Format:
# Question
# A)
# B)
# C)
# D)
# Answer

# Text:
# {text}
# """
    
    response = llm.invoke(prompt)
    # print("llm se response ye aaya question ka mcqs ka :\n", response)

    return response.content

