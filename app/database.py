from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# ✅ Load database URL from environment variables
DATABASE_URL = os.getenv("DATABASE_URL", "mysql+pymysql://root:@localhost/freshmart")

if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set in the environment variables")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependency for DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
