import React from 'react';
import './Feed.css';
const Feed = (props) => {
  return (
    <span className='container'>
      <span > {props.cats}</span>


    </span>
  )
}
export default Feed;