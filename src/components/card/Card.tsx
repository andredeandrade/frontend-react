import React from 'react'
import './card.scss'

interface CardProps {
  title: string
}

const Card: React.FC<CardProps> = props => {
	return (
		<div className="card">
      <h2>{props.title}</h2>

      {props.children}
    </div>
	)
}

export default Card