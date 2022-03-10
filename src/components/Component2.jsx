import React from "react";
import Component3 from "./Component3";

const Component2 = ({name, age, email}) => {
    return (
<div>
    <h2>I am compo 2 and i am displaying data send to me fromm component one</h2>
    <p>Name {name}</p>
    <Component3 age={age} email={email}/>
    </div>
    
    );
};



export default Component2;