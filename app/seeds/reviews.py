from app.models import db, Review

def seed_reviews():
    r1 = Review(
        user_id= 2,
        product_id= 1,
        title="Amazing Scent!!!",
        rating= 5,
    )

