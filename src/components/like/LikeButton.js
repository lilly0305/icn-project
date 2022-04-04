export const LikeButton =({id, onClick, isLike}) => {
  
  return(
    <span className={isLike ? "material-icons active" : "material-icons"} onClick={() => onClick(id)}>favorite</span>
  )
}