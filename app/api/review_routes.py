from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, request
from sqlalchemy.sql.functions import user
from app.forms.review_edit_form import ReviewEditForm
from app.forms.review_form import ReviewForm
from flask_login import login_required, current_user
from app.models import User, db, Review

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/', methods = ['GET'])
def all_reviews():
    reviews = Review.query.all()
    return {review.to_dict()['id']:review.to_dict() for review in reviews}

@review_routes.route('/create', methods = ['POST'])
@login_required
def create_review ():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review (
            user_id=form.data['user_id'],
            product_id=form.data['product_id'],
            title=form.data['title'],
            rating=form.data['rating'],
            body=form.data['body']
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    else:
        return {'errors':form.errors}, 500

@review_routes.route('/<int:id>', methods = ['DELETE'])
@login_required
def update_review(id):
    review = Review.query.get(id)
    print(review, "YHFDFFJKBKHKHKHKHLJJKJKJKJKJJKKJKK")
    db.session.delete(review)
    db.session.commit()
    return {'message': 'Review Deleted'}


