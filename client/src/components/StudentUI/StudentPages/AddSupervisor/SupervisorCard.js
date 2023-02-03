import React from 'react';
import "../../PageContents.css";
import "./AddSupervisor.css";

const SupervisorCard = ({ card }) => {
  return (
<div className="Supervisor-Card">
<button className="button-Add-Supervisor"> التقديم لطلب الاشراف </button>
<p className="p-Supervisor-Card">
{" اسم المشرف : "+card.Fullname}  
<br />
<br />
   {card.UserName+" : اسم المستخدم "}
<br />
<br />
    {card.Email+" : البريد الاكتروني  "} 
</p>
</div>

  )
}

export default SupervisorCard