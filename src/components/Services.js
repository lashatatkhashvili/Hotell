import React, { useState } from 'react'
import Title from '../components/Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer}
from 'react-icons/fa'



export default function Services() {
    const [services] = useState([
        {
            icon: <FaCocktail/>,
            title: "Free cocktails",
            info: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'
        },
        {
            icon: <FaHiking/>,
            title: "Endless Hiking",
            info: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .'
        },
        {
            icon: <FaShuttleVan/>,
            title: "Free shuttle",
            info: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .'
        },
        {
            icon: <FaBeer/>,
            title: "Strongest Beer",
            info: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries .'
        }
    ])
    
    return (
    <section className="services"> 
        <Title title="Services" />
        <div className="services-center">
            {services.map((item,index) => {
              return( 
              <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
              </article>
              )
            })}
            
        </div>
    </section>
    )
}
