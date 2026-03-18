# # Ask questions

# from fastapi import APIRouter
# from fastapi.responses import StreamingResponse
# from pydantic import BaseModel
# from services.qa_service import answer_question

# router = APIRouter()

# class QuestionRequest(BaseModel):
#     question: str

# @router.post("/ask")
# def ask_question(data: QuestionRequest):

#     answer = answer_question(data.question)

#     return {"answer": answer}


# @router.post("/stream")
# async def stream_answer(data: QuestionRequest):

#     async def generator():

#         async for chunk in answer_question_stream(data.question):
#             yield chunk

#     return StreamingResponse(generator(), media_type="text/plain")

from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from services.qa_service import answer_question, answer_question_stream

router = APIRouter()

class QuestionRequest(BaseModel):
    question: str


@router.post("/ask")
def ask_question(data: QuestionRequest):

    answer = answer_question(data.question)
    return {"answer": answer}


@router.post("/stream")
async def stream_answer(data: QuestionRequest):

    async def generator():
        async for chunk in answer_question_stream(data.question):
            yield chunk

    return StreamingResponse(generator(), media_type="text/plain")