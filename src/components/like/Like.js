import COLORS from './COLORS.json';
import 'components/scss/like.scss';
import { useEffect, useState } from 'react';
import { LikeButton } from './LikeButton';

export const Like =() => {
  const [items, setItems] = useState(COLORS);
  const [heart, setHeart] = useState(false);

  const handleHeartClick = () => {
    setHeart(!heart);
  }

  return(
    <div className="like">
      <h1>찜하기</h1>

      <div className="likeList">
        {
          items.slice(0, 9).map((item, index) => {
            return(
              <article key={item.id}>
                {item.id}
                <figure>
                  <img src={item.image} alt={item.title}/>
                </figure>
                <h2>
                  <span>{item.title}</span>
                  {/* <LikeButton buttonId={item.id} onClick={handleHeartClick} selected={heart}/> */}
                  <span className={item.isLike ? "material-icons active" : "material-icons"} onClick={handleHeartClick}>favorite</span>
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