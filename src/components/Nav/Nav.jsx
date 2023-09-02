import './NavStyle.css'
import { AiFillHome } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import { FaToolbox } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';
export default function Nav() {
  return (
<nav>
<h1 className="logo"> Trippy</h1>
<div className='navitem'>
<ul >
<a href="#"><li><AiFillHome/> Home</li></a>
<a href="#"><li><HiInformationCircle/> About</li> </a>
<a href="#"><li><FaToolbox/> Service</li></a>
<a href="#"><li><BiSolidContact/> Contact</li></a>
</ul>
<button>Sing Up</button>
</div>
</nav>


    )
}
