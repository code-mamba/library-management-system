import axios from 'axios';
import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [categoryName, setCategoryName] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  console.log(categoryList)

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={categoryName}
        onChange={e => setCategoryName(e.target.value)}
      />
      <button onClick={() => {
        setCategoryName('');
        setCategoryList([
          ...categoryList,
          { id: nextId++, categoryName: categoryName }
        
        ]);
        axios.post("http://localhost:8000/Addedcategories",categoryList)
      }}>Add</button>
      <ul>
        {
        categoryList.map(category => (
          <li key={category.id}><p style={{color: "wheat"}} >{category.categoryName}</p></li>
        ))}
      </ul>
    </>
  );
}