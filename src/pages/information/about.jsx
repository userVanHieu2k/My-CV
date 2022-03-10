
import { FaFacebookSquare, FaGooglePlusSquare, FaDribbbleSquare, FaAddressCard } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { BiUser, BiPhone, BiEnvelope } from 'react-icons/bi'
import { BsCalendar2Date } from 'react-icons/bs'
import { MdLanguage } from 'react-icons/md'
const about = () => {
    return (
        <>
            <div className="col-sm-12">
                <div className="card-box">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="header-text text-center">
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfoDyl2pM5xT_cGcblTQCZAn8CLvXw3KOkPOjNAKzS_aL-LtJwUG1Y5VkBwcG8hFIhcZs&usqp=CAU'
                                    className="img-circle"
                                />

                                <h2>Nguyen Van Hieu</h2>

                                <p>I'm Product Designer</p>
                                <div className="social-links header-links">
                                    <ul>
                                        <li><a href="/" ><FaFacebookSquare className='fbgh' /></a></li>
                                        <li><a href="/" ><FaTwitterSquare className='fbgh' /></a></li>
                                        <li><a href="/" ><FaGooglePlusSquare className='fbgh' /></a></li>
                                        <li><a href="/" ><FaDribbbleSquare className='fbgh' /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-1">
                            <div className="introduce">
                                <h2 className="title">Personal Details</h2>
                                <p>Hye, I’m Nguyen Van Hieu residing in this beautiful world. I create websites and mobile apps with great UX and UI design. I have done work with big companies like Nokia, Google and Yahoo. Meet me or about me for any queries. One Extra line for filling space. Fill as many you want.Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                            </div>
                        </div>
                        <div className="col-md-5 col-xs-12">
                            <div className="presonal-inform">
                                <ul className="list-unstyled">
                                    <li className="clearfix"><BiUser className='fbg' /><b>Name:</b> Nguyen Van Hieu</li>
                                    <li className="clearfix"><BiPhone className='fbg' /><b>Phone:</b> 0978320672</li>
                                    <li className="clearfix"><BiEnvelope className='fbg' /><b>Email:</b> hieu30032000@gmail.com</li>
                                    <li className="clearfix"><BsCalendar2Date className='fbg' /><b>Date of Birth:</b> 30/03/2000</li>
                                    <li className="clearfix"><FaAddressCard className='fbg' /><b>Address:</b> Nhan Binh, Ly Nhan, Ha Nam.</li>
                                    <li className="clearfix"><MdLanguage className='fbg' /><b>Languages:</b> Vietnamese</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default about;
