from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, request
from sqlalchemy.sql.functions import user
from flask_login import login_required, current_user
from app.models import User, db, Product

product_routes = Blueprint('products', __name__)

@product_routes.route('/', methods=['GET'])
def all_products():
    products = Product.query.all()
    return {product.to_dict()['id']: product.to_dict() for product in products}
    # products = Product.query.all()
    # return {'products': [product.to_dict() for product in products]}