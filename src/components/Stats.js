import React from 'react';
import Card from './Card';

function Stats({ list }) {
  return (
    <Card>
      <div style={{ color: '#fff' }}>
        <div><b>{list.length}</b> task in total</div>
        <div><b>{list.filter(task => !task.done).length}</b> task in pending</div>
        <div><b>{list.filter(task => task.done).length}</b> task are done</div>
      </div>
    </Card>
  )
}

export default Stats