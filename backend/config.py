# Centralized configuration

import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
    MONGO_URI = os.getenv("MONGO_URI")
    MONGO_DB = os.getenv("MONGO_DB")
    CHROMA_DB_DIR = os.getenv("CHROMA_DB_DIR")
    UPLOAD_DIR = os.getenv("UPLOAD_DIR", "uploads")
    JWT_SECRET = os.getenv("JWT_SECRET")

settings = Settings()