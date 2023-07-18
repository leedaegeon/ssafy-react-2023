/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { DescriptionList, ScrollButton } from "../components/";
// import ScrollButton from "../components/ScrollButton/ScrollButton";

import "./App.css";

const statusMessage = [
  "⌛️ 대기",
  "⏳ 로딩 중...",
  "✅ 로딩 성공!",
  "❌ 로딩 실패.",
];

function App() {
  return (
    <div className="App">
      <h1>React 컴포넌트 &amp; Props</h1>
      <hr />

      <DescriptionList />
      {/* <ScrollButtonGroup>
        <ScrollButton />
        <ScrollButton mode="up" />
      </ScrollButtonGroup> */}

      <ScrollButton.Group>
        <ScrollButton />
        <ScrollButton mode="up" />
      </ScrollButton.Group>
    </div>
  );
}

export default App;
