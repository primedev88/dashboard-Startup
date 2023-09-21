import React from 'react'
import './Basestatus.css'
import station from '../../station.json'

const base_status = () => {
  const data=station.data;
  return (
    <>
      <head>base_status</head>
      <div className="table-container">
      <table className="my-table">
        <thead>
          <tr>
            <th>name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
  )
}

export default base_status;