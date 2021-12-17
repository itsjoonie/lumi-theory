from app.models import db, Order_Total

def seed_order_totals():
    order1 = Order_Total(
        user_id = 1,
        total_price = 25.00
    )

    db.session.add(order1)

    db.session.commit()

def undo_order_totals():
    db.session.execute('TRUNCATE order_totals RESTART IDENTITY CASCADE;')
    db.session.commit()