import { useState } from 'react'
import './App.css'
import Tablecomponent from './table'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from './popup';

function App() {

  // const [count , stecount] = useState(0);
  const [value , setvalue] = useState(false);
  const [tempdata , settempdata] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (rowdata) => {
    if(rowdata){
      settempdata(rowdata)
    }else {
      settempdata({
        name : null,
        email : null,
        phoneno : null,
        qualification : null,
        location : null,
      })
    }
    
    setShow(true);
  };

  return (
    <>
      <Container fluid className='p-2'>
        <Popup boxshow = {show} boxclose = {handleClose} fieldata = {tempdata} setfieldata = {settempdata} ref = {value} setref={setvalue}/>
        <Tablecomponent boxopen={handleShow} update={value} setupdate={setvalue}/>
      </Container>
    </>
  )
}

export default App
