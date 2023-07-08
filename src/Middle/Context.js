import './Context.css'
function Context(props){
    return(
        <>
        <div className="line1">
        <h2>{props.name}</h2>
        </div>
        <div className="line2">
            <h1>{props.heading}</h1>
        </div>

        </>

    )

}
export default Context