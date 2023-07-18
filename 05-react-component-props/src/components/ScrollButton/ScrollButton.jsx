/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./ScrollButton.css";

//어떤 prop(외부에서 전달받는 데이터)를 가져와 데이터 바인딩 할 것인가?
// 0. mode or type:'up' or 'down'
// 1. props.label
// 2. props.className
// eslint-disable-next-line no-unused-vars
function ScrollButton({ mode = "down", label, className }) {
  const isDownMode = mode.includes("down");
  const buttonClassName = className ?? (isDownMode ? "scrollDown" : "scrollUp");
  const buttonLabel = label ?? (isDownMode ? "스크롤 다운" : "스크롤 업");
  return (
    <button
      type="button"
      className={buttonClassName}
      aria-label={buttonLabel}
      title={buttonLabel}
    >
      <svg
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path
          d="m112 268 144 144 144-144M256 392V100"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit={10}
          strokeWidth="48px"
        />
      </svg>
    </button>
  );
}

// export function ScrollButtonGroup({ children }) {
//   const handleScrollMove = ({ currentTarget, target }) => {
//     const { top } = currentTarget.getBoundingClientRect();
//     const appElement = document.querySelector(".App");

//     if (target.matches(".scrollDown")) {
//       appElement.scroll({
//         top,
//         behavior: "smooth",
//       });
//     }
//     if (target.matches(".scrollUp")) {
//       appElement.scroll({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//   };
//   return (
//     <div role="group" className="buttonGroup" onClick={handleScrollMove}>
//       {children}
//     </div>
//   );
// }

//컴파운드 컴포넌트 패턴
//화살표 함수가 아닌 함수 선언을 사용한 이유는 개발자도구에 표시할 함수 명이 없어서 따로 설정해줘야 하는 귀찮음이 있어서
ScrollButton.Group = function ScrollButtonGroup({ children }) {
  const handleScrollMove = ({ currentTarget, target }) => {
    const { top } = currentTarget.getBoundingClientRect();
    const appElement = document.querySelector(".App");

    if (target.matches(".scrollDown")) {
      appElement.scroll({
        top,
        behavior: "smooth",
      });
    }
    if (target.matches(".scrollUp")) {
      appElement.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div role="group" className="buttonGroup" onClick={handleScrollMove}>
      {children}
    </div>
  );
};

export default ScrollButton;
