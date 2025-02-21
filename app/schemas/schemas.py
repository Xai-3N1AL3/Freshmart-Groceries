from pydantic import BaseModel
from datetime import date

# ✅ Base Schema
class EmployeeBase(BaseModel):
    full_name: str
    date_of_birth: date
    address: str
    contact_number: str
    emergency_contact: str
    job_title: str
    department: str
    employee_id: str
    work_schedule: str

# ✅ Create Schema
class EmployeeCreate(EmployeeBase):
    pass

# ✅ Read Schema
class EmployeeRead(EmployeeBase):
    id: int

    class Config:
        orm_mode = True

# ✅ Response Schema (Extends EmployeeRead)
class EmployeeResponse(EmployeeRead):
    pass

class EmployeeResponse(EmployeeCreate):
    id: int

    class Config:
        orm_mode = True