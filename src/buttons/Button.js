import './Button.css'
function Button(props){
    return(
        <div >
                <button className='button'>{props.name}</button>
            </div>

    )
}
export default Button;