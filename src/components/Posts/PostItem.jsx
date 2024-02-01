import React from 'react'

export default function PostItem({item}) {
    const handleDelete = (e) => console.log(e);
  return (
    <li >
        {item.userName} 
        {item.title} 
        <button onClick={handleDelete}>Delete</button>
    </li>)
}
