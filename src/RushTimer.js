import * as React from "react";
import moment from "moment";

function RushTimer(){
	const [counter, setCounter] = React.useState(60*25);
	const [timeUp , setTimeUp] = React.useState(false);

	React.useEffect(() => {
	  counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
	  if(counter===0 && !timeUp) {
	  	setCounter(60*5);
	  	setTimeUp(true);
	  };
	}, [counter]);

	return (
	  <div className="Clock">
	  	<h4>{counter !== 0 && !timeUp ? 'Focus' : 'Relax'}</h4>
	    <h1>{moment.utc(counter*1000).format('mm:ss')}</h1>
	  </div>
	);
}

export default RushTimer;