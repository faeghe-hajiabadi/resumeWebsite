import React from 'react';
import './Work.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function WorkExperience(props) {
  return (
        <div className='container'>
        <p className='date'>{props.date}</p>
        <p className={props.education?'education':'company'}>{props.company}</p>
        <p className='job'>{props.job}</p>
        </div>
  );
}

export default WorkExperience;
