import React from 'react'
import Hero from '../components/Hero'
import Banner from  '../components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'

function Rooms() {
    return (
        <>
          <Hero hero="roomsHero"> 
             <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
             </Banner>
           </Hero>
           <RoomContainer />
        </>
    )
}

export default Rooms










// import React, { useState } from 'react'



// const Rooms = () => {
//     const [gela, setGela] = useState(false)

//     const shecvla = () =>{
//         setGela(!gela)
//         console.log(gela)
//     }
//     return (
//         <div>
//             <button type="button" onClick={shecvla}>2</button>
//             <p className={gela? "aris" : "ara"}>dedasheveci</p>
//         </div>
//     )
// }

// export default Rooms
