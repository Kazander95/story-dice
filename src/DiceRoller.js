import React from 'react';
import _ from 'lodash';
import Dice from './Dice.js';
import rorys from './IconSets.js';
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

function DiceRoller(props){
    const questionMarks = Array(9).fill(faQuestion);
  const [spun, setSpun] = React.useState("die");
  const [dice, setDice] = React.useState(questionMarks);
  const [rolling, setRolling] = React.useState(false);
  const [nine, setNine] = React.useState(false);
  const [switchText, setSwitchText] = React.useState("9 Dice");

  return (
    <div>
      <h1 className="title">Story Dice!</h1>
      <button
        className="rollbutton"
        onClick={() => {
          if (!rolling) {
            setSpun("die spinning");
            setDice(questionMarks);
            setRolling(true);
            setTimeout(() => {
              setSpun("die");
              setDice(_.sampleSize(rorys, 9));
              setRolling(false);
            }, 1025);
          }
        }}
      >
        Roll!
      </button>
      <button
        className="rollbutton"
        onClick={() => {
          if(nine){
            setSwitchText("9 Dice");
          } else {
            setSwitchText("5 Dice");
          }
          setNine(!nine);
        }}
      >
        {switchText}
      </button>
      <Dice nine={nine} spun={spun} dice={dice} />
    </div>
  );
}

export default DiceRoller