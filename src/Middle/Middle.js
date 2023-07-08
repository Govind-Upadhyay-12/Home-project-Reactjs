import Context from "./Context";
import Dataimg from "./Dataimg";
import List from "./List";

function Middle(){
    return(
        <>
        <div className="container">
            <div className="1st">
                <Dataimg></Dataimg>

            </div>
            <div>
                <Context name="Best Choice" heading="Popular Residencies"></Context>
            </div>
            <div className="All-data">
                <List></List>
            </div>
        </div>
        </>

    )

}
export default Middle;