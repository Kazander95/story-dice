import React from 'react';
import StoryDie from './StoryDie.js'

function FiveDice(props) {
    return (
      <div>
        <div>
        <StoryDie spun={props.spun} die={props.dice[0]} />
        <StoryDie spun={props.spun} die={props.dice[1]} />
        <StoryDie spun={props.spun} die={props.dice[2]} />
        </div>
        <div>
        <StoryDie spun={props.spun} die={props.dice[3]} />
        <StoryDie spun={props.spun} die={props.dice[4]} />
        </div>
      </div>
    );
  }

export default FiveDice;