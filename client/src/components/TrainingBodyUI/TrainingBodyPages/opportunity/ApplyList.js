import React from 'react'
import ApplyCard from './ApplyCard';
import "./opportunity.css";

const ApplyList = ({ apply }) => {

let content;

if(apply.length > 0){

    const resulte = apply.map(apply =><ApplyCard key={apply.student} apply={apply}/>)

    content = resulte?.length ? resulte : <p className="p-Students-Card"> لا يوجد تقديمات حاليا على الفرصة </p>

}else{ 
    content = <p className="p-Apply-Card"> لا يوجد تقديمات حاليا على الفرصة </p> 
    
    
}


return (
    <div>
        {content}
    </div>
)
}

export default ApplyList