import './FooterStyle.css'
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoBehance } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer >
        <div className="Trippy">
            <div className="Trippy-s1">
                <h1>Trippy</h1>
                <p>Choose Your Favourite Destination.</p>
            </div>
            <div className="Trippy-s2">
            <ul >
<a href="#"><li><AiFillFacebook/></li></a>
<a href="#"><li><AiOutlineInstagram/></li> </a>
<a href="#"><li><BiLogoBehance/></li></a>
<a href="#"><li><AiOutlineTwitter/></li></a>
</ul>
            </div>
        </div>
        <div className="home">
            <div className="f1">
                <h3>Project</h3>
                <ul>
                    <li>Changelog</li>
                    <li>Status</li>
                    <li>License</li>
                    <li>All Version</li>
                </ul>
            </div>
            <div className="f2">
                <h3>Community</h3>
                <ul>
                    <li>Github</li>
                    <li>lssues</li>
                    <li>Project</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div className="f3">
                <h3>Help</h3>
                <ul>
                    <li>Support</li>
                    <li>Troubleshooying</li>
                    <li>Contact Us</li>
                    
                </ul>
            </div>
            <div className="f4">
                <h3>Oters</h3>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privcy Policy</li>
                    <li>License</li>
                </ul>
            </div>
           
        </div>

    </footer>
  )
}
