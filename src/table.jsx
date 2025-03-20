import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';


export default function Tablecomponent(bcd) {

    const [tabledata, settabledata] = useState(null);

    useEffect(() => {
        fetch('https://67d7ed199d5e3a10152c9b1b.mockapi.io/student/details', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(tasks => {
            settabledata(tasks);
        }).catch(error => {
            console.log(error);
        })
    }, [bcd.update]);

    const deleteuser = (id) => {

        fetch(`https://67d7ed199d5e3a10152c9b1b.mockapi.io/student/details/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(task => {
            alert("Deleted successfully");
            bcd.setupdate(!bcd.update)
        }).catch(error => {
            console.log(error);
        })
    }

    

    return (
        <>
            <h1 className='h1'> CRUD API </h1>
            <button className='b1' onClick={()=>bcd.boxopen()}> Add Data </button>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th> SO </th>
                        <th> NAME </th>
                        <th> EMAIL </th>
                        <th> PHONE NO </th>
                        <th> QUALIFICATION </th>
                        <th> LOCATION </th>
                        <th> ACTION </th>
                    </tr>
                </thead>
                <tbody>
                    {tabledata && tabledata.map((item, out) => {
                        return (
                            <>
                                <tr>
                                    <td>{out + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNo}</td>
                                    <td>{item.qualification}</td>
                                    <td>{item.location}</td>
                                    <td> <button onClick={() => bcd.boxopen(item)}> Edit </button>
                                        <button onClick={() => deleteuser(item.id)}> Delete </button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}