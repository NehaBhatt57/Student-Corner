# # Handles question answering

# from dependencies import rag_pipeline
# from langchain_google_genai import ChatGoogleGenerativeAI
# from config import settings

# llm = ChatGoogleGenerativeAI(
#     model="gemini-2.5-flash",
#     google_api_key=settings.GEMINI_API_KEY,
#     temperature=0
# )

# # async def answer_question_stream(question):

# #     response = await llm.astream(question)

# #     async for chunk in response:
# #         yield chunk.content

# async def answer_question_stream(question: str):

#     async for chunk in llm.astream(question):
#         yield chunk.content


# def answer_question(question : str):

#     result = rag_pipeline.invoke({
#         "query": question
#     })
#     print("Quesry ka output : ", result)

#     return result["result"]



# Handles question answering with RAG + streaming

from database.vector_store import get_vector_store
from langchain_google_genai import ChatGoogleGenerativeAI
from config import settings

llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=settings.GEMINI_API_KEY,
    temperature=0
)

async def answer_question_stream(question: str):

    vector_store = get_vector_store()

    # Retrieve similar chunks from embeddings
    docs = vector_store.similarity_search(question, k=3)

    if not docs:
        yield "No data available in uploaded documents."
        return

    context = "\n\n".join([doc.page_content for doc in docs])

    prompt = f"""
Answer the question ONLY using the context below.
If the answer is not in the context, say: 'No data available'.

Context:
{context}

Question:
{question}
"""

    async for chunk in llm.astream(prompt):
        yield chunk.content


def answer_question(question: str):

    vector_store = get_vector_store()

    docs = vector_store.similarity_search(question, k=3)

    if not docs:
        return "No data available in uploaded documents."

    context = "\n\n".join([doc.page_content for doc in docs])

    prompt = f"""
Answer the question ONLY using the context below.

Context:
{context}

Question:
{question}
"""

    response = llm.invoke(prompt)

    return response.content