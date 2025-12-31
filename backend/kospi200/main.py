from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
import json
from typing import List, Dict

app = FastAPI(title="KOSPI 200 Stock Data Service")

# Enable CORS for frontend apps
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")

@app.get("/stocks")
async def get_stocks():
    codes_path = os.path.join(DATA_DIR, "codes.json")
    if not os.path.exists(codes_path):
        return []
    with open(codes_path, "r", encoding="utf-8") as f:
        return json.load(f)

@app.get("/stocks/{code}")
async def get_stock_detail(code: str):
    file_path = os.path.join(DATA_DIR, f"data{code}.json")
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="Stock data not found")
    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
