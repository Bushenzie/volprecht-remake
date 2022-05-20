import { useState } from "react"
import "./ContactUs.scss"
import Link from "../Link"
import {FaLinkedin ,FaFacebookSquare ,FaInstagram ,FaArrowRight} from "react-icons/fa"



const ContactUs = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }




    return (
        <div className='contact-us-content content' id="contact-us">
            <div className="left">
                <h2>Let's get in touch</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda nisi et, beatae animi consectetur perferendis delectus iste alias eius quo magnam porro placeat commodi! Facere cumque iste quidem provident.</p>
                <div className="item">
                    <span>Living in:</span>
                    <p>221B Baker Street</p>
                </div>
                <div className="item">
                    <span>Call on:</span>
                    <p>(+420) 123 456 789</p>
                </div>
                <div className="links">
                    <Link where="https://linkedin.com"><FaLinkedin/></Link>
                    <Link where="https://facebook.com"><FaFacebookSquare/></Link>
                    <Link where="https://instagram.com"><FaInstagram/></Link>
                </div>
            </div>

            <div className="right">
                <h2>Estimate your Project?</h2>
                <form action="/" onSubmit={handleSubmit}>
                    <div className="inputEl">
                        <label htmlFor="name">What's your name:</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" autoComplete="off" required/>
                    </div>
                    <div className="inputEl">
                        <label htmlFor="email">Your Email Address:</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" autoComplete="off" required />
                    </div>
                    <div className="textareaEl">
                        <label htmlFor="textarea">How can we help you?:</label>
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="textarea" rows={5} autoComplete="off" required/>
                    </div>
                    <button className="btn btn_black" type="submit">Send<FaArrowRight/></button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs