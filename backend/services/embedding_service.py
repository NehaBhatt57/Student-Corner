# Stores embeddings in Chroma

from database.vector_store import get_vector_store

def store_embeddings(chunks):

    vector_store = get_vector_store()

    vector_store.add_documents(chunks)

    # vector_store.persist()

