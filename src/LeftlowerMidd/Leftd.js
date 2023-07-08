import Context from '../Middle/Context';
import About from '../header/About';
import'./Leftd.css';
// import Context from '../Context/Middle';
function Leftd( ){

    return(
        <div>
        <div>
        <Context name="Our Value" heading="Value We Give To you "></Context>
        </div>
        <div className='ab'>
            <About></About>
        </div>
        </div>
        

    )
}
export default Leftd;