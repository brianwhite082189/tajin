import hero from '../images/hero_lg.png'

export default function Hero(){
    return(
        <section className='hero-content'>

            <div className='hero-img-container'>
                <img className = 'hero-photo' src={hero} />
            </div>

            <h1 className="hero-head">Online Experiences</h1>
            <p className='hero-p1'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}