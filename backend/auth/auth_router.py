from fastapi import APIRouter
from pydantic import BaseModel
from auth.auth_service import register_user, login_user

router = APIRouter(prefix="/auth")


class AuthRequest(BaseModel):
    email: str
    password: str


@router.post("/register")

async def register(data: AuthRequest):
    return await register_user(data.email, data.password)


@router.post("/login")

async def login(data: AuthRequest):
    return await login_user(data.email, data.password)