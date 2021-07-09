import React from "react";

const Person = ({fullname , personDelete , changed }) => {
return(
    <div>
        {`${fullname}  `}
        <input type="text" placeholder={fullname} onChange={changed}/>
        <button  onClick={personDelete} > پاک کردن </button>
    </div>
);
}
export default Person;