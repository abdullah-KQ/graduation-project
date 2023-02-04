import React from 'react'
import StudentsCard from './StudentsCard'
import "./AddSuperviseStudents.css";

const ListCards = ({ searchResulte }) => {

    const resulte = searchResulte.map(card =><StudentsCard key={card.UserName} card={card}/>)

    const content = resulte?.length ? resulte : <p className="p-Students-Card"> no matching Students  </p>
  return (
    <div>
        {content}
    </div>
  )
}

export default ListCards
