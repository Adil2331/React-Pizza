import React from 'react'



export default function Categories({value , onChange }) {
  const CATEGORIES = [ 'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {
          CATEGORIES.map((el, index) => ( <li onClick={()=>onChange(index)}  key={index} className={value === index ? 'active' : '' }>{el}</li>))
        }
      </ul>
    </div>
  );
}
