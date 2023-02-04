import React from 'react'
import StudentsCard from './StudentsCard'
import "./SuperviseStudents.css";

const ListCards = ({ card }) => {

    const resulte = card.map(card =><StudentsCard key={card.UserName} card={card}/>)

    const content = resulte?.length ? resulte : <p className="p-Students-Card"> no matching Students  </p>
  return (
    <div>
        {content}
    </div>
  )
}

export default ListCards
