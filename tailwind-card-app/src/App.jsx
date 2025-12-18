import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';



export default function App() {

  const cards = [
    {
      title: 'React Devlopment',
      description: 'Build modern UIs uisng React and components',
      buttonText: 'Learn More',
       
    },
    {
      title: 'Tailwind CSS',
      description: ' Style faster with utility-first CSS.',
      buttonText: 'Explore',
       
    },
  ];
  return (
     <div className='min-h-screen bg-gray-100 p-8'>
        <h1 className='text-3xl font-bold text-center mb-8'>
            My Card Application
        </h1>


        <div className='flex flex-wrap justify-center'>
          {cards.map((card, index) => (
            <Card key={index} {...card}/>
          ))}
        </div>
     </div>
  );
}

