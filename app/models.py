from sqlalchemy import Column, Integer, String, Date
from database import Base

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    date_of_birth = Column(Date, nullable=False)
    address = Column(String(255), nullable=False)
    contact_number = Column(String(20), nullable=False)
    emergency_contact = Column(String(20), nullable=False)
    job_title = Column(String(100), nullable=False)
    department = Column(String(100), nullable=False)
    employee_id = Column(String(50), unique=True, nullable=False)
    work_schedule = Column(String(255), nullable=False)
