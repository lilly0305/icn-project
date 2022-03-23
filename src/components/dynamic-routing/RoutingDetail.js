import React from "react";
import {Link, useParams} from "react-router-dom";
import COLORS from '../like/COLORS.json';

function RoutingDetail() {
    const {itemId} = useParams();
    const thisItem = COLORS.find((item) => item.id === Number(itemId));

    return (
      <div className="routingDetail">
        <Link to="/dynamic-routing" className="button link">리스트로 이동</Link>
        <span>{thisItem.id}</span>
        <h2>NAME: {thisItem.title}</h2>
        <p>CONTENT: {thisItem.content}</p>
      </div>
    )
}

export default RoutingDetail;