# Upload and process PDF

from fastapi import APIRouter , File , UploadFile
import shutil
import os

from services.pdf_service import parse_pdf
from services.embedding_service import store_embeddings
from utils.helpers import ensure_upload_dir
from config import settings

router = APIRouter()

@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    ensure_upload_dir()

    file_path = os.path.join(settings.UPLOAD_DIR , file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    chunks = parse_pdf(file_path)

    store_embeddings(chunks)

    return {"message": "PDF processed successfully"}
