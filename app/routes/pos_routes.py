from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import models
from app.schemas import schemas

router = APIRouter()

@router.post("/", response_model=schemas.OrderCreate)
def create_order(order: schemas.OrderCreate, db: Session = Depends(get_db)):
    new_order = models.Order(**order.dict())
    db.add(new_order)
    db.commit()
    db.refresh(new_order)
    return new_order
