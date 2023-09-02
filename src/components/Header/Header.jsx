import './HeaderStyle.css'
import heroBg from './../../assets/imges/12.jpg' 
import Hero from '../Hero/Hero'
function Header() {
  return (
  <div className="header">
      <Hero  bg= {heroBg} 
title= "Your Journey Your Story"
info= "Choose Your Favourite Destination."
btn = "travel now" />
  </div>

  )
}

export default Header