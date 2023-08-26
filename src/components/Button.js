
import React,{useState} from 'react';
// import {Delete} from '@mui/material/Icon';
import { Button,Typography } from '@mui/material';

const Event_Button = () => {
const [color,setColor] = useState("primary");
const [disableBtn,setdisableBtn] = useState(false);
  function customMe()
  {
    setdisableBtn(true)
    console.log("Your Button is Disable Kindly Refresh Page")
    alert("Your Button working Properly")
  }
    return (
    <div>
 <Typography variant='h3'>React Material Button</Typography>
    <Button color={color}
    variant='contained'
    onClick={()=>{customMe()}}
   disabled={disableBtn}
 
    >Click Me</Button>
    </div>
  )
}

export default Event_Button