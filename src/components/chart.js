import React from 'react';
import {Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width=|180} data={props.data}> //props passed in from parent component weather_list
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}
