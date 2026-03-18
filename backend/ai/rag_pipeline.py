# Core RAG pipeline

from langchain_classic.chains import RetrievalQA
from database.vector_store import get_vector_store
from langchain_google_genai import ChatGoogleGenerativeAI
from config import settings

def build_rag_pipeline():

    vector_store = get_vector_store()

    retriever = vector_store.as_retriever(
        search_kwargs={"k":3}
    )

    llm = ChatGoogleGenerativeAI(
        model="gemini-1.5-flash",
        google_api_key=settings.GEMINI_API_KEY
    )

    qa_chain = RetrievalQA.from_chain_type(
        llm = llm,
        retriever = retriever
    )

    return qa_chain
