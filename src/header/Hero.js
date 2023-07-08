import img1 from '../images/hero-image.png'
import './Hero.css'
function Hero(){
    return(
        <>
        <div className='Hero'> 
        <img src={img1} width={650} height={700} className='Hero1'></img>
        </div>

        </>
    )
}
export default Hero