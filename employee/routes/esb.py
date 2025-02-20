from fastapi import APIRouter

router = APIRouter()

@router.get("/esb/status")
def esb_status():
    return {"message": "ESB is running"}
