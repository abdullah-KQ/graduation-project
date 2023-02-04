import React from 'react'
import OpportunityCard from './OpportunityCard'
import "./SearchForOpportunity.css";

const ListCards = ({ searchResulte }) => {

    const resulte = searchResulte.map(card =><OpportunityCard key={card.id} card={card}/>)

    const content = resulte?.length ? resulte : <p className="p-Supervisor-Card"> no matching Supervisor  </p>
  return (
    <div>
        {content}
    </div>
  )
}

export default ListCards