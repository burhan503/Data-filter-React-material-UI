import React, { useState } from 'react';
import './Filter.css';

function MyComponent() {
    const [arr, setArr] = useState([
        { id: 1, name: 'Burhan', desc: 'Hello Buddy I am Frontend Developer', prof:"Developer" },
        { id: 2, name: 'Zeeshan', desc: 'Hello Buddy I am Frontend Developer', prof:"Developer" },
        { id: 3, name: 'Rahil ', desc: 'Hello Buddy I am Frontend Developer', prof:"Developer" },
        { id: 4, name: 'Item 4', desc: 'Hello Buddy I am Frontend Developer', prof:"Developer" },
    ])

    const [filterDesc, setFilterDesc] = useState(arr);

    return (
        <div>
            <input
                type="text"
                onChange={e => {
                    let val = e.target.value
                    if (val == '') {
                        setFilterDesc(arr)
                    }
                    else {
                        let dum = []
                        arr.forEach((item) => {
                            let id = item.id
                            if (`${id}`.includes(val) || item.name.toLowerCase().includes(val.toLowerCase())) {
                                dum.push(item)
                            }
                        })
                        setFilterDesc(dum)
                    }
                }}
                placeholder="Enter ID"
            />
            {filterDesc.map(item => (
                <div key={item.id}>
                     <div className='span1'>{item.id} {item.name} {item.desc} {item.prof} </div>
                </div>
            ))}
        </div>
    );
}

export default MyComponent;
