import React from 'react'
import Demo from './Demo'
import Card from './Card'

const App = () => {
  const cardeData = [
    {
      title:'Card 1',
      text: 'This is the first card',
      customClasses:'bg-yellow-100'
    },
    {
      title:'Card 2',
      text: 'This is the second card',
      customClasses:'bg-green-100'
    },
    {
      title:'Card 3',
      text: 'This is the third card',
      customClasses:'bg-blue-100'
    }
  ]
  return (
    <>
    
    <Demo />
    {
      cardeData.map((card,index)=>(
        <Card key={index}
        title={card.title}
        text = {card.text}
        customClasses ={card.customClasses} />
      ))
    }
    </>
  )
}

export default App
