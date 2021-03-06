import React from 'react';
import StoryDie from './StoryDie.js'


function NineDice(props) {
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
          <StoryDie spun={props.spun} die={props.dice[5]} />
        </div>
        <div>
          <StoryDie spun={props.spun} die={props.dice[6]} />
          <StoryDie spun={props.spun} die={props.dice[7]} />
          <StoryDie spun={props.spun} die={props.dice[8]} />
        </div>
      </div>
    );
  }

export default NineDice;