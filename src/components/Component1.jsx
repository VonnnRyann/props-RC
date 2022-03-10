import React from "react";
import Component2 from "./Component2";

/* const Component1 = ({arr,obj,show}) => {
    //console.log(props);
    const {name,age,email} = obj;

    console.log(arr);
    show()

const list = arr.map((elem,i) => <p key={i}> {elem}</p>)

console.log(list);

    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p>
            {list}

            
        </div>
    )
}
 */
const Component1 = ({name, age, email}) => {
    

    return(
        <div>
            <h2>I am Component one</h2>
            <Component2 name={name} age={age} email={email}/>
        </div>
    )
}

export default Component1;
