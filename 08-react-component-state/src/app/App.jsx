/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./App.module.css";
import { ScrollButton, DescriptionList } from "@/components";

const handleScrollMove = ({ currentTarget, target }) => {
  const { top } = currentTarget.getBoundingClientRect();
  const appElement = document.getElementById("root")?.firstElementChild;

  if (target.matches('[title="스크롤 다운"]')) {
    appElement.scroll({
      top,
      behavior: "smooth",
    });
  }
  if (target.matches('[title="스크롤 업"]')) {
    appElement.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
};

function App() {
  const [imageType, setImageType] = React.useState("react");
  const [isShowReactImage, setIsShowReactImage] = React.useState(true);
  const [descKey, setDescKey] = React.useState(9);

  const [statusMessage, setStatusMessage] = React.useState([
    "⌛️ 대기",
    "⏳ 로딩 중...",
    "✅ 로딩 성공!",
    "❌ 로딩 실패.",
  ]);
  const renderList = ({ isReverse = false } = {}) => {
    // const data = !isReverse ? statusMessage : statusMessage.reverse();
    const data = !isReverse ? statusMessage : [...statusMessage].reverse();
    // return data.map((message, idx) => {
    //   <li key={idx}>{message}</li>;
    // });
    return data.map((message, idx) => (
      <li key={idx}>
        {message}
        <button
          onClick={() => {
            handleDeleteStatusMessage(
              !isReverse ? idx : (data.length = idx + 1),
            );
          }}
        >
          delete
        </button>
      </li>
    ));
  };
  const handleAddStatusMessage = (newStatusMessage) => {
    setStatusMessage([newStatusMessage, ...statusMessage]);
  };
  const handleDeleteStatusMessage = (deleteIndex) => {
    setStatusMessage(statusMessage.filter((_, i) => i !== deleteIndex));
  };
  const [reactLibrary, setReactLibrary] = React.useState({
    name: "React",
    author: "조던 웨케(Jordan Walke)",
    writtenIn: "JavaScript 라이브러리",
    license: "MIT",
  });
  const handleUpdateReactLibrary = (newReactLibrary) => {
    setReactLibrary(newReactLibrary);
  };
  return (
    <div className={styles.container}>
      <h1>React 컴포넌트 상태 관리</h1>
      <div style={{ display: "flex", columnGap: 8 }}>
        <button
          type="button"
          onClick={() => {
            const newDescKey = descKey + 3;
            setDescKey(newDescKey);
            console.log({ newDescKey });
          }}
        >
          reload DescriptionList component
        </button>
        <button
          type="button"
          onClick={() => {
            setIsShowReactImage(!isShowReactImage);
          }}
        >
          {isShowReactImage ? "리액트 이미지 감춤" : "리액트 이미지 표시"}
        </button>
        <button
          type="button"
          onClickCapture={() => {
            //Dom 요소 접근 및 조작
            //사이드 이펙트 처리
            //선언된 상태 없데이트 -> UI rerendering
            setImageType(imageType === "react" ? "vite" : "react");
          }}
        >
          change imageType
        </button>
      </div>

      <hr />
      {/* 하위 컴포넌트에 props로 값 전달 */}
      <DescriptionList
        key={descKey}
        {...{
          statusMessage,
          imageType,
          isShowReactImage,
          renderList,
          reactLibrary,
          onAddStatusMessage: handleAddStatusMessage,
          onUpdateStatusMessage: handleScrollMove,
          onUpdateReactLibrary: handleUpdateReactLibrary,
        }}
      />

      <ScrollButton.Group onScroll={handleScrollMove}>
        <ScrollButton />
        <ScrollButton mode="up" />
      </ScrollButton.Group>
    </div>
  );
}

export default App;
