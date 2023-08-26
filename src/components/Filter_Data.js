import React, { useState } from 'react';
import './Filter.css';
function Filter_Data() {
  const [filterId, setFilterId] = useState('');
  const data = [
    { id: 1, name: 'Burhan' , desc:'Hello Developer My name is Burhan Learning Part'},
    { id: 2, name: 'Asnain' , desc: 'Hello Developer My name is Asnain senior React Native Developer' },
    { id: 3, name: 'Rahil Ahmed', desc:'Hello Developer My name is Rahil Banna Senior Java Developer' },
    { id: 4, name: 'Hasim Khan', desc:'Learning' },
  ];

  const filteredData = data.filter(item => item.id === parseInt(filterId));

  return (
    <div>
      <input
        type="text"
        value={filterId}
        onChange={e => setFilterId(e.target.value)}
        placeholder="Enter ID"
      />
      {filteredData.map(item => (
        <div key={item.id}>
            <div className='span1'>{item.id} {item.name} {item.desc} </div>
        </div>
      ))}
    </div>
  );
}

export default Filter_Data;
