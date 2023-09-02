import './HeroStyle.css'

export default function Hero({bg , title , info , btn}) {
  return (
    <div className='hero'>
        <img src={bg} alt="" />
       <div className="desc">
       <h1>{title}</h1>
        <p>{info}</p>
        <button>{btn}</button>
       </div>

    </div>
  )
}
