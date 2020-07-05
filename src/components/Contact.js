import React, { Component } from 'react';
import data from '../mydata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <div className='contact-content'>
                <h1>
                Let’s Create!<br></br>
                <span className='amazing-color'>Do you have the courage to Create?</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>

            <span className='footer'>Made With ❤ by <a href="#">Swati Patel</a></span>
        </div>);
    }
}
 
export default Contact;