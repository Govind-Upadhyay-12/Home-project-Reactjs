import './Dataimg.css';
import img3 from '../images/prologis.png'
import img4 from '../images/tower.png'
import img5 from '../images/equinix.png'
import img6 from'../images/realty.png'
function Dataimg(){
    return(
        <>
        <div className='collection'>
        
        <img src={img3} width={250}></img>
        <img src={img4} width={250}></img>
        <img src={img5} width={250}></img>
        <img src={img6} width={250}></img>

        </div>
        
        </>

    )
}
export default Dataimg;