import reactLogoPath from './assets/ReactLogo.svg';
function App() {
  return (
    <div>
      <h1 className="headline">React is Awesome!</h1>
      {/* 정적(public) 에셋 -> 서비스중 변하지 않는 이미지 -> 빌드시 브라우저에 캐싱됨 */}
      <img src="/ReactLogo.svg" alt="react logo"/>
      {/* 동적 에셋(src/assets) -> 서비스중 업데이트가 잦은 이미지*/}
      <a href="#" target="_black" rel="noreferrer noopener">
      <img src={reactLogoPath} alt="리액트 로고" />
      </a>
    </div>
  );
}

export default App;
