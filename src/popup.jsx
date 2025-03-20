import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Pop(data) {
    console.log(data.fieldata,"####");
    
    const updatadata = () => {
        
fetch(`https://67d7ed199d5e3a10152c9b1b.mockapi.io/student/details/${data.fieldata.id}`, {
    method: 'PUT',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(data.fieldata)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    alert("success.....!");
    data.setref(!data.ref)
  }).catch(error => {
    // handle error
  })

}

const createuser = () => {

    fetch(`https://67d7ed199d5e3a10152c9b1b.mockapi.io/student/details`, {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(data.fieldata)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
    }).then(task => {
        data.setref(!data.ref)
      alert("User added successfully")
    }).catch(error => {
      console.log(error);
      
    })

    data.boxclose();
}

    return (
        <>
            <Modal show={data.boxshow} onHide={data.boxclose}>
                <Modal.Header closeButton>
                    {data.fieldata.id ? <Modal.Title> Edit Table✍ </Modal.Title> : <Modal.Title> Create table📑 </Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Name </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Name"
                                autoFocus
                                defaultValue={data.fieldata.name}
                                onChange={(e)=>data.setfieldata({...data.fieldata,name:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Email </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                defaultValue={data.fieldata.email}
                                onChange={(e)=>data.setfieldata({...data.fieldata,email:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Phone </Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your number"
                                autoFocus
                                defaultValue={data.fieldata.phoneno}
                                onChange={(e)=>data.setfieldata({...data.fieldata,phoneNo:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Qualification </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Qualification"
                                autoFocus
                                defaultValue={data.fieldata.qualification}
                                onChange={(e)=>data.setfieldata({...data.fieldata,qualification:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Location </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Location"
                                autoFocus
                                defaultValue={data.fieldata.location}
                                onChange={(e)=>data.setfieldata({...data.fieldata,location:e.target.value})}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={data.boxclose}>
                        Close
                    </Button>
                    {data.fieldata.id ? <Button variant="primary" onClick={updatadata}> Save Changes </Button> :
                    <Button variant="success" onClick={createuser}> Create </Button> }
                </Modal.Footer>
            </Modal>
        </>
    )
}