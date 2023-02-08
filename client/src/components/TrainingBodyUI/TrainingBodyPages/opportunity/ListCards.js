import React from 'react'
import OpportunityCard from "./OpportunityCard"
import "./opportunity.css";

const ListCards = ({ card }) => {
  let content;
  
  if(card.length > 0){

    const resulte = card.map(card =><OpportunityCard key={card.Opport_name} card={card}/>)

     content = resulte?.length ? resulte : <p className="p-Students-Card"> لا يوجد طلاب تحت اشرافك  </p>

  }else{
    if(card.length == 0){
      content = <p className="p-Students-Card"> لا يوجد طلاب تحت اشرافك  </p> 
    }else{
    const resulte =<OpportunityCard key={card.Opport_name} card={card}/>
    
    content = resulte;
    }
  }


  return (
    <div>
        {content}
    </div>
  )
}

export default ListCards
