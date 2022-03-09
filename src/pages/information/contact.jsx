
import { Row, Col, Container, Card } from 'react-bootstrap'
import { FaFacebookSquare, FaGooglePlusSquare, FaDribbbleSquare, FaAddressCard } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { BiUser, BiPhone, BiEnvelope } from 'react-icons/bi'
import { BsCalendar2Date } from 'react-icons/bs'
import { MdLanguage } from 'react-icons/md'
const contact = () => {
    return (
        <>
            <div className="card-box">
                <div className="section-title">
                    <h2>Contact</h2>
                    <div className='title-border'></div>
                </div>
                <div className="contact">
                    <form action="">
                        <div className="inputBox">
                            <input type='text' placeholder='Name' required />
                            <input type='number' placeholder='Phone' required />
                            <input type='email' placeholder='Email' required />
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your message' required></textarea>
                        <button type='submit'>Submit Now</button>
                    </form>

                    <div class="social-links header-links text-center">
                        <ul>
                            <li><a href="#" ><FaFacebookSquare className='fbgh' /></a></li>
                            <li><a href="#" ><FaTwitterSquare className='fbgh' /></a></li>
                            <li><a href="#" ><FaGooglePlusSquare className='fbgh' /></a></li>
                            <li><a href="#" ><FaDribbbleSquare className='fbgh' /></a></li>
                        </ul>
                        <p>© 2022.Design Nguyen Van Hieu</p>
                    </div>

                </div>
            </div>
        </>
    );
};
export default contact;
