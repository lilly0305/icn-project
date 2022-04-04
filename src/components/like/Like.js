import COLORS from './COLORS.json';
import 'components/scss/like.scss';
import { useState } from 'react';
import { LikeButton } from './LikeButton';

export const Like =() => {
  const [items, setItems] = useState(COLORS);

  const handleHeart = (id) => {
    const newItems = items.map((item) => item.id === id ? {...item, isLike: !item.isLike} : item);
    setItems(newItems);
  }

  return(
    <div className="like">
      <h1>찜하기</h1>
      
      <div className="likeList">
        {
          items.slice(0, 9).map((item) => {
            return(
              <article key={item.id}>
                {item.id}
                <figure>
                  <img src={item.image} alt={item.title}/>
                </figure>
                <h2>
                  <span>{item.title}</span>
                  <LikeButton id={item.id} isLike={item.isLike} onClick={handleHeart} />
                </h2>
                <p>{item.content}</p>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}