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
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/night_owl.jpg?token=AQLSLSGIEF265AKNI52EZA3BSXPI2',
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
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/deja_brew.jpg?token=AQLSLSANBXSDZVQOKGHSNBDBSXPKG',
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
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/hidden_page.jpg?token=AQLSLSCXWNRJTG5BCNMJ27TBSXLMO'
    )
    starlight = Product (
        name = 'Starlight',
        top_scent = 'Roses, Jasmine',
        base_scent = 'Sandalwood, Vanilla',
        lid_color = 'Gold',
        description = 'Are you a romantic? This soft floral scent elevates any room with a subtle earthy scent and laid back mood. Perfect for date night at home or for yourself bundle up on the couch watching a romance movie or reading a romance book.',
        price  = 25,
        quantity = 5,
        seasonal = False,
        special = True,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/starlight.jpg?token=AQLSLSBGOBKTZDISUN7W2NTBSXLGW',
        pic2 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/starlight2.jpg?token=AQLSLSHY3NUYIQXL566X7XDBSXLIC'
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
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/sea_the_good.jpg?token=AQLSLSHGVFPITTUZLXSGWC3BSXLXI',
    )
    manifestation = Product (
        name = 'Manifestation',
        top_scent = 'Eucalyptus, Lemon, Citronella',
        base_scent = 'Warm Amber , Sandalwood',
        lid_color = 'Gold',
        description = 'Need a little bit of positivity in your life to reach your goal? This candle is for you! This fresh citrus scent helps cleanse your negativity and produce serotonin to give you a boost of energy and motivation. Hope you achieve your dreams. We are all rooting for you!',
        price  = 25,
        quantity = 5,
        seasonal = False,
        special = True,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/manifestation.jpg?token=AQLSLSH25EAESGARTU55ZTTBSXL5E',
        pic2 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/manifestation2.jpg?token=AQLSLSH6NFIZQA62XEMAN5TBSXL5S',
    )
    me_time = Product (
        name = 'Me Time',
        top_scent = 'Honey, Lavender',
        base_scent = 'Oatmilk, Almond',
        lid_color = 'Gold',
        description = 'After working all day, you deserve a break! Self care is the best care. This candle is perfect for the days when you want to take it easy and take care of yourself. Very calming scent with a hint of honey and oatmeal that will make you feel relaxed after a long day.',
        price  = 25,
        quantity = 5,
        seasonal = False,
        special = True,
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/me_time.jpg?token=AQLSLSBK2AGP7IEKLOFWHQDBSXMLA',
        pic2 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/me_time2.jpg?token=AQLSLSBEQOYSQXXGCQPTDE3BSXMLG'
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
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/pumpkin_season.jpg?token=AQLSLSB42UTBX23RADWZ5J3BSXMZ4'
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
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/witchin_life.jpg?token=AQLSLSGNOAAZVRA7QKNZ5WTBSXNIG'
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
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/cozy.jpg?token=AQLSLSCQ7TP4K4CIB5G5PQDBSXNOK',
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
        pic1 = 'https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/images/autumn_mood.jpg?token=AQLSLSAK2I4IQD656OTCNA3BSXPES'
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
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCASE;')
    db.session.commit()
