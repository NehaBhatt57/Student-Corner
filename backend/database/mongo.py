# MongoDB connection

from pymongo import MongoClient 
from config import settings

client = MongoClient(settings.MONGO_URI)
# print("mongo client : ", client)

db = client[settings.MONGO_DB]
# print("mongi db : ", db)

pdf_collection = db["pdfs"]
chat_collection = db["chat_history"]
mcq_collection = db["mcqs"]
users_collection = db["users"]