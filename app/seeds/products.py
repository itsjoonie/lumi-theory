from app.models import db, Product

def seed_products():
    autumn_mood = Product(
        name = 'Autumn Mood'
    )