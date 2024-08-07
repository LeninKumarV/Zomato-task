import React from 'react'
import Comp from './Comp'
import './Faq.css';

const Faq = () => {
  
    const data=[
        {
            id:1,
            question:"Popular cuisines near me",
            answer:"BBQ food near me, Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Chettinad food near me, Chinese food near me, Desserts food near me, Ice Cream food near me, Lebanese food near me, Mughlai food near me, North Indian food near me, Pizza food near me, Sandwich food near me, Seafood food near me, Shake food near me, South Indian food near me, Street food near me, Tamil food near me, Tea food near me"
        },
        {
            id:2,
            question:"Popular restaurant types near me",
            answer:"Bakeries near me, Beverage Shops near me, Cafés near me, Casual Dining near me, Dessert Parlors near me, Fine Dining near me, Food Trucks near me, Quick Bites near me, Sweet Shops near me"
        },
        {
            id:3,
            question:"Cities We Deliver To",
            answer:"Chennai, Coimbatore, Erode, Salem, Namakka, Delhi, NCR, Kolkata, Mumbai, Bengaluru, Pune, Hyderabad, Chennai, Lucknow, Kochi, Jaipurl, Nashik, Ooty, Shimla, Ludhiana, Guwahati, Amrit, sarKanpur, Allahabad, Aurangabad, Bhopal"
        }
    ]
    return (
    <div className='faq'>
        <h1>Explore options near me</h1>
        <br></br>
        {
            data.map((item)=>(
                <Comp key={item.id} question={item.question} answer={item.answer}/>
            ))
        }
    </div>
  )
}

export default Faq