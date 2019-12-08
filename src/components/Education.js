import React from 'react';
import './Partition.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkExperience from './WorkExperience';


function Skills(props) {
    return (
        <span>


            <h2 className='title'>EDUCATION<br></br>
            </h2>
            <span className='parts'>
                <WorkExperience date={'2017 - 2018'}
                    company={'Rahnama College(College for talented  students for learning)'}
                    job={'UI/UX Course'}
                    education={true} />
                <WorkExperience date={'2013- 2017'}
                    company={'University of Zanjan, Zanjan(Software Engineering)'}
                    job={'Top Student'}
                    education={true} />

            </span>
           

        </span>
    );
}

export default Skills;
