from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='Lition',
        email='demo@aa.io',
        password='password')
    marnie = User(
        first_name='Marnie',
        last_name='Woo',
        email='marnie@aa.io',
        password='password')
    bobbie = User(
        first_name='Bobbie',
        last_name='Smith',
        email='bobbie@aa.io',
        password='password')
    steph = User(
        first_name='Stephanie',
        last_name='Vargas',
        email='steph@aa.io',
        password='password')
    katie = User(
        first_name='Katie',
        last_name='Muck',
        email='katie@aa.io',
        password='password'
    )
    chuck = User(
        first_name='Chuck',
        last_name='Chee',
        email='chuck@aa.io',
        password='password'
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(steph)
    db.session.add(katie)
    db.session.add(chuck)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
