import COLORS from './COLORS.json';
import 'components/scss/like.scss';
import { useState } from 'react';

export const Like =() => {
  const [items, setItems] = useState(COLORS);
  console.log(items);
  const [heart, setHeart] = useState(false, false, false);

  const handleHeartClick = (e) => {
    setHeart(!heart)
  }

  return(
    <div className="like">
      <h1>찜하기</h1>

      <div className="likeList">
        {
          items.slice(0, 9).map((item) => {
            return(
              <article key={item.idx}>
                {item.id}
                <figure>
                  <img src={item.image} alt={item.title}/>
                </figure>
                <h2>
                  <span>{item.title}</span>
                  <span className={heart ? "material-icons active" : "material-icons"} onClick={() => handleHeartClick(item.id)}>favorite</span>
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