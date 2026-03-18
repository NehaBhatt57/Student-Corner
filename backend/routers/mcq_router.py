# Generate MCQs

from fastapi import APIRouter
from pydantic import BaseModel
from services.mcq_service import generate_mcqs

router = APIRouter()

class MCQRequest(BaseModel):
    text: str

@router.post("/generate")
def generate(data: MCQRequest):

    mcqs = generate_mcqs(data.text)

    return {"mcqs": mcqs}

