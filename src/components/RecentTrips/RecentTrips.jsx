import Card from '../Card/Card'
import './RecentTripsStyle.css'
import firstpic from './../../assets/imges/5.jpg'
import secpic from './../../assets/imges/8.jpg'
import thridtpic from './../../assets/imges/6.jpg'

export default function RecentTrips() {
  return (
    <div className='RecentTrips'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Googel Maps.</p>
        <div className="container">
            <Card
            title ="Trip in Indonesia"
            info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum ex modi ipsum, maiores veniam obcaecati voluptates dolores optio ab necessitatibus similique architecto rem quibusdam, aut reprehenderit, ratione nam labore"
            pic ={firstpic}
            />
            <Card
            title ="Trip in MalaySia"
            info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum ex modi ipsum, maiores veniam obcaecati voluptates dolores optio ab necessitatibus similique architecto rem quibusdam, aut reprehenderit, ratione nam labore"
            pic ={secpic}
            />
            <Card
            title ="Trip in France"
            info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum ex modi ipsum, maiores veniam obcaecati voluptates dolores optio ab necessitatibus similique architecto rem quibusdam, aut reprehenderit, ratione nam labore"
            pic ={thridtpic}
            />

        </div>
    </div>
  )
}
