import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';
import Form from './Form.js'

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <Form />
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+50 531 43 60'} text2={'+50 331 92 77'} title={'Phone'} />
                    <ContactItem icon={email} text1={'mmmdvsaa@gmail.com'} text2={'WGgame@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Khazar, Baku'} text2={'Azerbaijan'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;