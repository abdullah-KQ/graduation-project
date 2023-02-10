import React from 'react'
import StudentsCard from './StudentsCard'
import "./Forms.css";

const ListCards = ({ card }) => {
  let content;
  
  if(card.length > 0){

    const resulte = card.map(card =><StudentsCard key={card.UserName} card={card}/>)

     content = resulte?.length ? resulte : <p className="p-Students-Card"> لا يوجد طلاب تحت اشرافك  </p>

  }else{
    if(card.length == 0){
      content = <p className="p-Students-Card"> لا يوجد طلاب تحت اشرافك  </p> 
    }else{
    const resulte =<StudentsCard key={card.UserName} card={card}/>
    
    content = resulte;
    }
  }


  return (
    <>
      {content}
    </>
  )
}

export default ListCards
