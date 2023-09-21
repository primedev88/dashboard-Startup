import React from 'react';
import './Dockstatus.css';
import docker from '../../docker.json';

const Dockstatus = () => {
  const data=docker.data;
  return (
    <>
    <head className='Dockstatus'>dock_status</head>
    <div className="table-container">
      <table className="my-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
      
    /*{<div className='Dockstatus'>
      
      <head>dock_status</head>
      <table >
        <thead>
          <tr>
            <th>Serial no</th>
            <th>id</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>{docker.data[0].name}</th>
            <th>{docker.data[0].status}</th>
          </tr>
          <tr>
          <th>2</th>
            <th>{docker.data[1].name}</th>
            <th>{docker.data[1].status}</th>
          </tr>
          <tr>
            <th>3</th>
            <th>{docker.data[2].name}</th>
            <th>{docker.data[2].status}</th>
          </tr>
          <tr>
            <th>4</th>
            <th>{docker.data[3].name}</th>
            <th>{docker.data[3].status}</th>
          </tr>
          <tr>
            <th>5</th>
            <th>{docker.data[4].name}</th>
            <th>{docker.data[4].status}</th>
          </tr>
          <tr>
            <th>6</th>
            <th>{docker.data[5].name}</th>
            <th>{docker.data[5].status}</th>
          </tr>
          <tr>
            <th>7</th>
            <th>{docker.data[6].name}</th>
            <th>{docker.data[6].status}</th>
          </tr>
        </tbody>
      </table>
    </div>}*/
  )
}

export default Dockstatus;