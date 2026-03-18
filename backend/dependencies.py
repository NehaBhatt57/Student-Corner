# Shared Services(vector store + rag pipeline)

from database.vector_store import get_vector_store
from ai.rag_pipeline import build_rag_pipeline

vector_store = get_vector_store()
rag_pipeline = build_rag_pipeline()