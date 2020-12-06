import Axios from "axios";
import React, { useEffect } from "react";

function LandingPage(props) {
  //로그아웃 함수
  //노드서버에서 설정한 /api/users/logout 접근하여 로그아웃합니다.
  const onClickHandler = () => {
    Axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작페이지</h2>
      <br />
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default LandingPage;
