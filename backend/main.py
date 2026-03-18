# FastAPI entrypoint

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import pdf_router, qa_router, mcq_router
from auth.auth_router import router as auth_router

app = FastAPI(
    title="Student Corner AI",
    version="1.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    # allow_origins=["*"],  # for development
    allow_origins = ["https://student-corner-frontend.onrender.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# app.include_router(router=pdf_router, prefix="/pdf")
app.include_router(pdf_router.router, prefix="/pdf")
app.include_router(qa_router.router, prefix="/qa")
app.include_router(mcq_router.router, prefix="/mcq")
app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "Student Corner Backend Running"}