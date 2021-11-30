from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, request
from sqlalchemy.sql.functions import user
from flask_login import login_required, current_user
from app.models import User, db, Review

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/', methods = ['GET'])
def all_reviews():
    reviews = Review.query.all()
    return {review.to_dict()['id']:review.to_dict() for review in reviews}

