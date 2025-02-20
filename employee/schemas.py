from pydantic import BaseModel, EmailStr
from datetime import date

class EmployeeBase(BaseModel):
    full_name: str
    date_of_birth: date
    address: str
    phone_number: str
    email: EmailStr
    emergency_contact_name: str
    emergency_contact_phone: str
    job_title: str
    employee_id: str
    work_schedule: str

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeUpdate(EmployeeBase):
    pass

class Employee(EmployeeBase):
    id: int

    class Config:
        from_attributes = True
