import React from 'react';
import "../../PageContents.css";
import "./SearchForOpportunity.css";

const Opportunity = ({ card }) => {
  return (
<div className="Supervisor-Card">
<button className="button-Add-Supervisor"> للمزيد من المعلومات </button>
<p className="p-Supervisor-Card">
{card.Opport_name+" : الفرصة التدريبة "}  
<br />
<br />
   {card.Description+" : الوصف "}
</p>
</div>

  )
}

export default Opportunity