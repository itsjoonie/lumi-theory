from app.models import db, Review

def seed_reviews():
    r1 = Review(
        user_id= 2,
        product_id= 1,
        title='Smells Just Like Fruit Loops!!!',
        rating= 5,
        body='This is probably one of the best purchase ever. This candle smell exactly like a bowl of Fruit Loops! Can\'t wait to gift this to my friends and family'
    )
    r2 = Review(
        user_id= 3,
        product_id= 1,
        title='This is AMAZING!',
        rating= 5,
        body='Oh wow this brings back so many childhood memories. Just like Fruit Loops but not overwhelming scent. '
    )
    r3 = Review(
        user_id= 4,
        product_id= 1 ,
        title='Must Get!',
        rating= 5,
        body='Everyone need to get this candles! This scent is on point. Such cute packaging and customer service is AMAZING!'
    )
    r4 = Review(
        user_id= 4,
        product_id= 2,
        title='I love coffee!',
        rating= 5,
        body='This candle is amazing! My place smells just like a coffee shop after using it!'
    )
    r5 = Review(
        user_id= 5,
        product_id= 2,
        title='LOVE THIS!!!',
        rating= 5,
        body= 'Coffee is my favorite scent ever.'
    )
    r6 = Review(
        user_id= 2,
        product_id= 3,
        title='Good but too strong for me!',
        rating= 3,
        body='This scent smells good but I\'m not a fan of leather smell.'
    )
    r7 = Review(
        user_id= 3,
        product_id= 3,
        title='Book smell?',
        rating= 4,
        body= 'A little bit close to book smell, but need less of leather. Packaging is cute. '
    )
    r8 = Review(
        user_id= 4,
        product_id= 4,
        title='Pretty candle! WORTH!',
        rating= 5,
        body='This candle is so pretty and smells so good. The roses and the sparkle makes the candle so beautiful to even use.'
    )
    r9 = Review(
        user_id= 5 ,
        product_id= 6,
        title='AMAZING AND PRETTY',
        rating= 5,
        body='This candle smells amazing! Fresh citrus smell and the packaging 10 out of 10! The flower petal and the gold sparkle OMG!'
    )
    r10 = Review(
        user_id= 3,
        product_id= 9,
        title='Smells like apples!',
        rating= 5,
        body= 'Happy Halloween. The candle name is hilarious!'
    )
    r11 = Review(
        user_id= 3,
        product_id= 11,
        title='What I imagine autumn to smell like.',
        rating= 5,
        body='This scent smells so fresh! love it. I wish it is not a seasonal candle. Would buy all year around'
    )

    db.session.add(r1)
    db.session.add(r2)
    db.session.add(r3)
    db.session.add(r4)
    db.session.add(r5)
    db.session.add(r6)
    db.session.add(r7)
    db.session.add(r8)
    db.session.add(r9)
    db.session.add(r10)
    db.session.add(r11)

    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()

