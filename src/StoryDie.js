import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function StoryDie(props) {
    return (
      <button className={props.spun}>
        <FontAwesomeIcon icon={props.die} size="6x"/>
      </button>
    );
}

export default StoryDie;