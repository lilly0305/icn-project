import { useState } from 'react';
import COLORS from '../like/COLORS.json';
import 'components/scss/dynamic-routing.scss';
import { Link } from 'react-router-dom';

export const RoutingItem =() => {
  const colors = COLORS.slice(0, 9).map((item) => {
    return(
      <article key={item.id}>
        <Link to={`/dynamic-routing/${item.id}`}>
          {item.id}
          <figure>
            <img src={item.image} alt={item.title}/>
          </figure>
          <h2>
            <span>{item.title}</span>
          </h2>
          <p>{item.content}</p>
        </Link>
      </article>
    )
  })

  return (
    <>
      {colors}
    </>
  );
}