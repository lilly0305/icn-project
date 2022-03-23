import { useState, useEffect } from 'react';
import 'components/scss/load-more.scss';

export const LoadMore =() => {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(6);


  useEffect(()=>{
    fetch('https://623a9a96b5292b8bfcb73f61.mockapi.io/animals?page=1&limit='+limit)
    .then((res) => res.json())
    .then((data)=> setItems(data));
    
  },[limit])

  const loadMore =() => {
    setLimit(limit+6);
  }
  
  return(
    <div className="loadMore">
      <h1>더보기</h1>
      
      <div className="contentsList">
        <div className='list'>
          {
            items.map((item) => {
              return(
                <article key={item.id}>
                  <figure>
                    <img src={item.image} alt={item.name}/>
                  </figure>
                  <h2>{item.name}</h2>
                  <p>{item.content}</p>
                </article>
              )
            })
          }
        </div>

        <div className='flexAlignCenter'>
          <button className='loadMoreButton' onClick={loadMore}>Load More</button>
        </div>
        
      </div>
    </div>
  )
}