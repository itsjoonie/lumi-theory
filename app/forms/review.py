
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, TextAreaField, TextField
from wtforms.validators import DataRequired, ValidationError
from app.models import Review

def title_limit(form, field):
    #if title is over 200 varchar
    title = field.data
    if title.length > 200:
        raise ValidationError("Character limit reached. Please shorten.")
    

class ReviewForm (FlaskForm):
    user_id = IntegerField()
    product_id = IntegerField()
    title = StringField(validators=[DataRequired(message='Please fill out'), title_limit])
    rating = IntegerField('rating', validators=[DataRequired(message='Please give it a rating from 1 to 5')])
    body= TextAreaField('review')