# Chroma vector database

from langchain_chroma import Chroma
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from config import settings

def get_vector_store():

    embeddings = GoogleGenerativeAIEmbeddings(
        # model="models/embedding-001",
        model="gemini-embedding-001",
        google_api_key=settings.GEMINI_API_KEY
    )

    vector_store = Chroma(
        persist_directory=settings.CHROMA_DB_DIR,
        embedding_function=embeddings
    )

    return vector_store

