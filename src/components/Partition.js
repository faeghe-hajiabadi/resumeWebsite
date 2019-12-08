import React from 'react';
import './Partition.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkExperience from './WorkExperience';

function Partition(props) {
  return (
        <div className='container'>
            <h2 className='title'>WORK<br></br> 
            EXPERIENCES</h2>
            {props.work &&
            <span className='parts'>
                <WorkExperience date={'2019-present'} company={'Freelancer'} job={'Develop Mobile App With React Native'} />
                <WorkExperience date={'2018-2019'} company={'SalamCinam'} job={'Front End Developer | UI/UX Designer'} />
                <WorkExperience date={'2017'} company={'CCI (Control Center Of Iran)'} job={'UI/UX Designer'} />
            </span>
                
            }
        </div>
  );
}

export default Partition;
