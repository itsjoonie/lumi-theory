from .db import db
from sqlalchemy.sql import func

class Review(db.Model):
    __tablename__='reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    title = db.Column (db.String(50))
    star = db.Column(db.Numeric, nullable=False)
    body = db.Column(db.Text)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    user_relation = db.relationship('User', back_populate='review_relation', lazy =True )
    product_relation = db.relationship('Product', back_populate='review_relation', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'title': self.title,
            'star': self.star,
            'body': self.body,
            'first_name': self.user_relation.first_name,
            'last_name': self.user_relation.last_name,
        }