from fastapi import FastAPI
from app.routes import employee_routes

app = FastAPI()

app.include_router(employee_routes.router)

@app.get("/") 
def root():
    return {"message": "Welcome to Freshmart EMS"}