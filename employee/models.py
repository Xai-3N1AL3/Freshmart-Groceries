from sqlalchemy import Column, Integer, String, Date, Text, TIMESTAMP
from sqlalchemy.sql import func
from employee.database import Base

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(255), nullable=False)
    date_of_birth = Column(Date, nullable=False)
    address = Column(Text, nullable=False)
    phone_number = Column(String(20), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    emergency_contact_name = Column(String(255), nullable=False)
    emergency_contact_phone = Column(String(20), nullable=False)
    job_title = Column(String(100), nullable=False)
    employee_id = Column(String(50), unique=True, nullable=False)
    work_schedule = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
