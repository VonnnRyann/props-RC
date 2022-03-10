import React from "react";
import Component4 from "./Component4";

const Component3 = ({age, email}) => {
    return (
        <div>
            <h2>Im a component 3 and i received data from compo 2</h2>
            <p>Age: {age} </p>
            <Component4 email={email}/>
        </div>
    )
}



export default Component3;