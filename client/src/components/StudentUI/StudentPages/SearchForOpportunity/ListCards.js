import React from 'react'
import OpportunityCard from './OpportunityCard'
import "./SearchForOpportunity.css";

const ListCards = ({ searchResulte }) => {

    const resulte = searchResulte.map(card =><OpportunityCard key={card.id} card={card}/>)

    const content = resulte?.length ? resulte : <p className="p-Opp-Card">   يرجى البحث عن فرصة تدريبية صحيحة  </p>
  return (
    <div>
        {content}
    </div>
  )
}

export default ListCards