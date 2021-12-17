from app.models import db, Order_Detail

def seed_order_details():

    one = Order_Detail(
        user_id = 1,
        order_totals_id = 1,
        product_id = 1,
        quantity = 2,
    )

    two = Order_Detail(
        user_id = 1,
        order_totals_id = 1,
        product_id = 3,
        quantity = 4,
    )

    db.session.add(one)
    db.session.add(two)

    db.session.commit()

def undo_order_details():
    db.session.execute('TRUNCATE order_details RESTART IDENTITY CASCADE;')
    db.session.commit()