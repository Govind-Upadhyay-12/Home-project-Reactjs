import Button from '../buttons/Button';
import img from '../images/Screenshot 2023-07-07 034025.png'
import About from './About';
import Content from './Content';
import Text from './Text'
// import img1 from '../images/hero-image.png'

import './Header.css'
import Hero from './Hero';
import Count from './Count';
import Middle from '../Middle/Middle';
import Value from '../lowermid/Value';
import Basefoot from '../BaseFooter/Basefoot';
function Header(){
    return (
        <>
        <div className='main'>
        <div className='header-main'>
            <div className='logo'>
                
                <img src={img} width={100} className='img'/>
                
                
            </div>
            <div className='items'>
                <li className='li1'>Residencies </li>
                <li className='li2'>Our values</li>
                <li className='li3'>Contact us</li>
                <li className='li4'>Get Started</li>
            </div>
            <div className='btnn'>
            <Button name="Contact"></Button>
            </div>

        </div>
        <div className='Content'>
            <Content></Content>

        </div>
        <div>
            <About></About>
        </div>
        <div>
              <Text />
              <div className='btn'>
              <Button name="Search" />
              </div>
              <div className='loc'>
              <h1>📍</h1>
              </div>
            
        </div>
       <div>
        <Hero></Hero>
       </div>
       <div>
        <Count></Count>
       </div>
       </div>
       <div className='mid'>
        <Middle></Middle>

       </div>
       <div>
        <Value></Value>
       </div>
       <div className='basw'>
        <Basefoot></Basefoot>
       </div>
        </>

    )
}
export default Header;