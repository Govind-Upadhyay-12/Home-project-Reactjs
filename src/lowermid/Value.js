import './Value.css'
import img1 from '../images/value.png'
import Leftd from '../LeftlowerMidd/Leftd';
import Ltext from './Lotext';
function  Value(){
    return(
        <>
        <div className='ma'>
        <div className='img2'>
        <img src={img1} width={660}className='img1'/>
        </div>
        <div className='da'>
        <Leftd></Leftd>
        </div>
        <div>
            <Ltext></Ltext>
        </div>
        </div>
        </>
    )
}
export default Value;