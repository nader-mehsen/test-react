import { useState } from 'react'
import Container from '../Container/Container'
import './PopularDestinations.css'
import FirstImg from './../../assets/imges/5.jpg'
import SecImg from './../../assets/imges/8.jpg'
import thirdImg from './../../assets/imges/1.jpg'
import fourImg from './../../assets/imges/2.jpg'
export default function PopularDestinations() {
const [FirstTitle]  = useState("Mt. Daguldul, Batangas");
const [FirstInfo]  = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam incidunt odit nulla veritatis repellat voluptatibus alias a molestias? Consequuntur sed atque doloribus nisi exercitationem repellendus ab velit expedita dolore adipisci.");
const [SecTitle]  = useState("Taal Volcano, Batangas");
const [SecInfo]  = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam incidunt odit nulla veritatis repellat voluptatibus alias a molestias? Consequuntur sed atque doloribus nisi exercitationem repellendus ab velit expedita dolore adipisci.");
return (
<div className='Popular'>
<h1>Popular Destinations</h1>
<p>Tours dive you the opportunity to see a lot,within a time frame</p>

<Container title= {FirstTitle} 
info={FirstInfo}
firstPic={FirstImg}
secPic={SecImg}/>

<Container title= {SecTitle} 
info={SecInfo}
firstPic={thirdImg}
secPic={fourImg}
class= "reverse" />

</div>

)
}
