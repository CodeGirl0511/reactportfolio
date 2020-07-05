import React, { Component } from 'react';
import data from '../mydata'


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>CREATE</h1>
            <header>    
            </header>
           
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>



        </div>);
    }
}

export default Header;