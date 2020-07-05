import React, { Component } from 'react';
import Project from './project';
import data from '../mydata';


class Work extends Component {
    state = {  }
    render() { 
        return ( <div>
        <h1 className='heading'>
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                 ))}
        </div>
        </h1> 
                </div>)}}
export default Work;