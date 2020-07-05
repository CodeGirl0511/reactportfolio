import React, { Component } from 'react';
import data from '../mydata';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
                    <p>{data.abouttext}</p>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
            

        </div>  );
    }
}
 
export default About;