from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .reviews import seed_reviews, undo_reviews
from .order_totals import seed_order_totals, undo_order_totals
from .order_details import seed_order_details, undo_order_details

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_products()
    seed_reviews()
    seed_order_totals()
    seed_order_details()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_products()
    undo_reviews()
    undo_order_totals()
    undo_order_details()
    # Add other undo functions here
