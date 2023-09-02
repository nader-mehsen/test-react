import './CardStyle.css'
export default function Card({pic , title , info}) {
  return (
    <div className='card'>
      <div className='imge'> 
      <img src={pic} alt="" />

      </div>
        <h2>{title}</h2>
        <p>{info}</p>

    </div>
  )
}
