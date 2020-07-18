import React from 'react';
import FiveDice from './FiveDice.js'
import NineDice from './NineDice.js'

function Dice(props) {
    if (props.nine) {
      return <NineDice spun={props.spun} dice={props.dice} />;
    } else {
      return <FiveDice spun={props.spun} dice={props.dice} />;
    }
  }

export default Dice;