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
        <Link to="/hook-form">hook-form을 이용한 로그인 유효성 검사</Link>

        <Link to="/random">랜덤</Link>
        <Link to="/list-input">리스트와 키</Link>
        <Link to="/css-colors">컬러 팔레트</Link>

        <Link to="/react-modal">react modal을 이용한 모달 관리</Link>
      </div>
    </div>
  )
}