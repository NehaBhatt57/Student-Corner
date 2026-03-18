from database.mongo import users_collection
from passlib.context import CryptContext
from auth.jwt_handler import create_access_token

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str):
    return pwd_context.hash(password)


def verify_password(password, hashed):
    return pwd_context.verify(password, hashed)


async def register_user(email, password):

    existing = users_collection.find_one({"email": email})

    if existing:
        raise Exception("User already exists")

    hashed = hash_password(password)

    users_collection.insert_one({
        "email": email,
        "password": hashed
    })

    return {"message": "User created"}


async def login_user(email, password):

    user = users_collection.find_one({"email": email})

    if not user:
        raise Exception("Invalid credentials")

    if not verify_password(password, user["password"]):
        raise Exception("Invalid credentials")

    token = create_access_token({
        "user_id": str(user["_id"]),
        "email": email
    })

    return {"token": token}