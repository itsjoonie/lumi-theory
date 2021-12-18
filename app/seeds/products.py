from app.models import db, Product

def seed_products():
    night_owl = Product(
        name = 'Night Owl',
        top_scent = 'Lemon, Lime, Berry',
        base_scent = 'Vanilla, Sandalwood',
        lid_color = 'Silver',
        description = 'Have you ever craved cereal in the middle of the night, but don\'t want the calories? This candle is perfect for you! It smells like a freshly poured big bowl of Fruit Loop. A perfect balance of citrus and berries, it is a nostalgia in a jar for sure. ',
        price = 20,
        quantity = 5,
        seasonal = False,
        special = False,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/night_owl.jpg',
    )
    deja_brew = Product (
        name = 'Deja Brew',
        top_scent = 'Coffee, Hazelnut',
        base_scent = 'Vanilla, Caramel, Sweet Cream',
        lid_color = 'Gold',
        description = 'Need the daily coffee fix but without the caffeine? This candle is perfect for you! It leaves your place smelling like freshly brewed coffee in the morning.  A perfect scent if you like your place smelling like a coffee shop with a shot of espresso, whipped Cream, and caramel syrup.',
        price  = 20,
        quantity = 5,
        seasonal = False,
        special = False,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/deja_brew.jpg',
    )
    hidden_page = Product (
        name = 'Hidden Page',
        top_scent = 'Cedarwood, Leather, Honey',
        base_scent = 'Sandalwood, Tonka',
        lid_color = 'Gold',
        description = 'Miss the smell of old books as you flip through the page? Reading and holding a book in your hand hits differently than reading it on an ebook. This soft comforting scent makes you want to sit next to a fireplace and flip through pages of your favorite stories.',
        price  = 20,
        quantity = 5,
        seasonal = False,
        special = False,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/hidden_page.jpg'
    )
    starlight = Product (
        name = 'Starlight',
        top_scent = 'Roses, Jasmine',
        base_scent = 'Sandalwood, Vanilla',
        lid_color = 'Gold',
        description = 'Are you a romantic? This soft floral scent elevates any room with a subtle earthy scent and laid back mood. Perfect for date night at home or for yourself bundle up on the couch watching a romance movie or reading a romance book. Topped with rose petal and gold mica for love.',
        price  = 25,
        quantity = 5,
        seasonal = False,
        special = True,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/starlight.jpg',
        pic2 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/starlight2.jpg'
    )
    sea_the_good = Product (
        name = 'Sea the Good',
        top_scent = 'Bergamot, Mandarin, Lemon',
        base_scent = 'Cedarwood, Musk, Salt ',
        lid_color = 'Silver',
        description = 'Love the fresh breeze of the ocean in the summertime? This candle is for you. It smells like fresh sea salt at the beach with a tiny hint of citrus. Very light and clean scent that brings you back to summer time and calming afternoon waves at the beach.',
        price  = 20,
        quantity = 5,
        seasonal = False,
        special = False,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/sea_the_good.jpg',
    )
    manifestation = Product (
        name = 'Manifestation',
        top_scent = 'Eucalyptus, Lemon, Citronella',
        base_scent = 'Warm Amber , Sandalwood',
        lid_color = 'Gold',
        description = 'Need a little bit of positivity in your life to reach your goal? This candle is for you! This fresh citrus scent helps cleanse your negativity and produce serotonin to give you a boost of energy and motivation. Hope you achieve your dreams. We are all rooting for you! Topped with Calendula Petal and Gold Mica for the exta positive vibe.',
        price  = 25,
        quantity = 5,
        seasonal = False,
        special = True,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/manifestation.jpg',
        pic2 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/manifestation2.jpg',
    )
    me_time = Product (
        name = 'Me Time',
        top_scent = 'Honey, Lavender',
        base_scent = 'Oatmilk, Almond',
        lid_color = 'Gold',
        description = 'After working all day, you deserve a break! Self care is the best care. This candle is perfect for the days when you want to take it easy and take care of yourself. Very calming scent with a hint of honey and oatmeal that will make you feel relaxed after a long day. Topped with dried rose petal for that extra relaxation. ',
        price  = 25,
        quantity = 5,
        seasonal = False,
        special = True,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/me_time.jpg',
        pic2 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/me_time2.jpg'
    )
    pumpkin_season = Product (
        name = 'Pumpkin Season',
        top_scent = 'Pumpkin, Clove, Allspice, Ginger',
        base_scent = 'Cinnamon,  Brown Sugar, Vanilla, Molasses',
        lid_color = 'Gold',
        description = 'It is pumpkin season! Love the smell of freshly baked pumpkin pie straight from the oven? This candle is perfect for the holidays or anytime you’re craving pumpkin pie. Very warm, sweet, and spiced scent with a hint of fresh pumpkin.',
        price  = 20,
        quantity = 5,
        seasonal = True,
        special = False,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/pumpkin_season.jpg'
    )
    witchin_life = Product (
        name = 'Witchin\' Life',
        top_scent = 'Apple, Leaves, Pears, Pomegranate',
        base_scent = 'Brown Sugar, Cedarwood',
        lid_color = 'Gold',
        description = 'Do you like caramel apples and apple orchards? This candle is perfect for you. It has a wonderful fresh, sweet, earthy scent that will remind you of fall. It is a limited edition candle for halloween. Hope you get more treats than tricks!',
        price  = 20,
        quantity = 5,
        seasonal = True,
        special = False,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/witchin_life.jpg'
    )
    cozy = Product (
        name = 'Cozy n\' Toasy',
        top_scent = 'Marshmallow, Vanilla',
        base_scent = 'Cedarwood, Brown sugar',
        lid_color = 'Gold',
        description = 'Do you like roasting marshmallows in the fireplace? This candle is perfect for you when you are craving something sweet and nostalgic. It has a sweet but not overwhelming scent to help cozy up and bring joy to your room. Limited Edition holiday candle.',
        price  = 20,
        quantity = 5, 
        seasonal = True,
        special = False,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/cozy.jpg',
    )
    autumn_mood = Product (
        name = 'Autumn Mood',
        top_scent = 'Birch Leaf, Juniper Berry',
        base_scent = 'Pine, Musk, Tonka',
        lid_color = 'Gold',
        description = 'Do you like the cold chilly air of freshly fallen leaves? This candle is perfect for autumn time. The change in season, the fresh breeze, the crunchy leaves fallen from the tree. This soft earthy scent will make your room smell like autumn.',
        price  = 20,
        quantity = 5,
        seasonal = True,
        special = False,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/public/images/autumn_mood.jpg'
    )

    db.session.add(night_owl)
    db.session.add(deja_brew)
    db.session.add(hidden_page)
    db.session.add(starlight)
    db.session.add(sea_the_good)
    db.session.add(manifestation)
    db.session.add(me_time)
    db.session.add(pumpkin_season)
    db.session.add(witchin_life)
    db.session.add(cozy)
    db.session.add(autumn_mood)

    db.session.commit()


# Remove all data from table and reset Identity
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
