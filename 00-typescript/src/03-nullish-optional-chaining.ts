// --------------------------------------------------------------------------
// operators (nullish, optional chaining)

{
  function run() {
    // nullish();
    optionalChaining();
  }

  function nullish() {
    //value가 null또는 undefined인 경우 100을 반환
    //value에 값이 할당된 경우 value를 출력하고 싶음

    // let value = 0;
    let value; // undefined

    //아래 수식을 사용하면 value가 null 또는 undefined가 아니어도 100이 반환됨
    //result type이 number
    let result: number | undefined = value || 100;
    console.log("|| : ", result);

    //아래 함수를 사용하면 value가 null 또는 undefined이면 true, 아니면 false를 반환
    function isNullOrUndefined(value: unknown) {
      return value === null || value === undefined ? true : false;
    }

    result = !isNullOrUndefined(value) ? value : 100;
    console.log("isNullOrUndefined : ", result);

    // 코드를 작성합니다.
    // null 병합 연산자 활용
    // value가 null 또는 undefined이면 100을 반환, else value를 반환
    result = value ?? 100;
    console.log("nullish : ", result);
  }

  // 사용자 정의 타입
  // type과 interface의 차이
  // type은 모든 자료형에 이름을 붙일 수 있지만
  // interface는 객체 자료형에만 이름을 붙일 수 있다.
  type Topic = {
    _title: string;
    getTitle(): string;
    setTitle(value: string): void;
    getName?: () => string; // function | undefined
  };

  function optionalChaining() {
    const topic: Topic = {
      _title: "매년 업데이트 되는 ECMAScript",
      getTitle() {
        return this._title;
      },
      setTitle(value) {
        this._title = value;
      },
    };

    if (topic && typeof topic === "object" && !Array.isArray(topic)) {
      let title, name;
      if (typeof topic.getTitle === "function") {
        title = topic.getTitle();
      }
      // if (typeof topic.getName === 'function') {
      // name = topic.getName();
      // }
      console.log("typeof : ", title);
      console.log("typeof : ", name);

      // 코드를 작성합니다.
      name = topic.getName?.();
    }

    let title, name;
  }

  run();
}
