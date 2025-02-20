from fastapi import FastAPI
from routes import users, esb
from database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(users.router, prefix="/api/users", tags=["Users"])
app.include_router(esb.router, prefix="/api/esb", tags=["ESB"])

@app.get("/")
def root():
    return {"message": "Employee Management System API is running"}
