import "./LandingPage.css"

function LandingPage(){
    return (
        <div className="landing-page">
            <div className="landing-banner-one">
                <div>
                    <div className="banner-one-content">
                        <h2 className="banner-one-content-h2" id="h2-banner1">Handcrafted & Handpoured</h2>
                        <h2 className="banner-one-content-h2">Scented Candles</h2>
                        <p className="banner-one-content-p" id="id-banner1">Our products are artisanally made with</p>
                        <p className="banner-one-content-p" >passion, eco-friendly and high-quality ingredients</p>
                        <button className="banner1-btn btn1">SHOP NOW</button>
                    </div>
                

                </div>
            </div>
            <div className="landing-banner-two">
                <div className="banner-two-container">
                    <div className="banner-two-content">
                        <img className="banner-two-img" src="https://img.icons8.com/dotty/80/000000/warranty.png" alt="pic"/>
                        <h4>Premium Quality</h4>
                        <p>We ensure each product meets our high standards.</p>
                    </div>
                    <div className="banner-two-content">
                        <img className="banner-two-img" src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-eco-light-ecology-justicon-lineal-justicon.png" alt="pic"/>
                        <h4>Eco Friendly</h4>
                        <p>Made from Eco-friendly and non-toxic materials.</p>
                    </div>
                    <div className="banner-two-content">
                        <img className="banner-two-img" src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-hand-world-pride-day-wanicon-lineal-wanicon.png" alt="pic"/>
                        <h4>Hand Poured</h4>
                        <p>Carefully hand poured using high-quality ingredients.</p>

                    </div>
                    <div className="banner-two-content">
                        <img className="banner-two-img" src="https://img.icons8.com/dotty/80/000000/time.png" alt="pic"/>
                        <h4>Long Burn Time</h4>
                        <p>Long consistent burn times, over 40+ hours!</p>
                    </div>
                </div>
            </div>
            <div className="landing-banner-three">
                <div className="banner-3-container">
                    <div>
                    <img className="banner-three-img" src="https://raw.githubusercontent.com/itsjoonie/lumi-theory/main/react-app/src/components/Home/image/banner3.jpg?token=AQLSLSF6X7NCANP6E5LXAI3BRISAM" alt="pic"/>
                    </div>
                    <div className="aboutUs">
                        <h1>About Us</h1>
                        <p id="p1">
                            Lumi Theory is created by a Software Engineer and an Artist with a genuine love for subtle and calming scent.
                            <br/>It was created during the early beginning of the pandemic to symbolize hope.  
                            We had in mind that when there are darkness, then light shines the brightest. 
                        </p>
                        <p className="aboutUs-p">
                            We hand poured & personally crafted our candles in small batches for our friends and families.
                        </p>
                        <p className="aboutUs-p">
                            We hope our products give you happiness as it does to us.
                        </p>
                    </div>
                </div>
                <div>
                    <h1>Seasonal Scents</h1>
                </div>

            </div>
        </div>
    )
}

export default LandingPage;