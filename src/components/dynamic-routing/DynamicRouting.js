import { RoutingItem } from './RoutingItem';

export const DynamicRouting =() => {

  return(
    <div className="dynamicRouting">
      <h1>다이나믹 라우팅</h1>
      
      <div className="routingList">
        <RoutingItem />
      </div>
    </div>

  )
}