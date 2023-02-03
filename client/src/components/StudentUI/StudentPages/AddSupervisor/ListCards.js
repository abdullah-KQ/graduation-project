import React from 'react'
import SupervisorCard from './SupervisorCard'
import "./AddSupervisor.css";

const ListCards = ({ searchResulte }) => {

    const resulte = searchResulte.map(card =><SupervisorCard key={card.UserName} card={card}/>)

    const content = resulte?.length ? resulte : <p className="p-Supervisor-Card"> no matching Supervisor  </p>
  return (
    <div>
        {content}
    </div>
  )
}

export default ListCards