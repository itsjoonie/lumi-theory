from .db import db
from sqlalchemy.sql import func

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(300), unique=True)
    top_scent = db.Column(db.String, nullable=False)
    base_scent = db.Column(db.String, nullable=False)
    lid_color = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Numeric, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    pic1 = db.Column(db.Text, nullable=False)
    pic2 = db.Column(db.Text)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    def to_dict(self):
        return{
            'id': self.id,
            'name': self.name,
            'top_scent': self.top_scent,
            'base_scent': self.base_scent,
            'lid_color': self.lid_color,
            'description': self.description,
            'price': self.price,
            'quantity': self.quantity,
            'pic1': self.pic1,
            'pic2': self.pic2
        }
