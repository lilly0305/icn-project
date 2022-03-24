import { Link } from "react-router-dom"

export const Main = () => {
  return(
    <div className="mainWrap">
      <h1>링크 이동</h1>
      <div className="links">
        <Link to="/google-editor">구글 닥스 에디터</Link>
        <Link to="/load-more">더보기</Link>
        <Link to="/like">찜하기</Link>
        <Link to="/dynamic-routing">다이나믹 라우팅</Link>
        <Link to="/axios-login">로그인 유효성 검사</Link>
      </div>
    </div>
  )
}