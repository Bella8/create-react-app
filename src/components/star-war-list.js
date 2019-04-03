import React from 'react'
import "./styles/star-war-list.css";

const StarWarList = ({ person }) => (
  person ? (
      <table className='star-war-list'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{person.name}</td>
          <td>{person.height}</td>
        </tr>
      </tbody>
    </table>
  ) : null
)

export default StarWarList