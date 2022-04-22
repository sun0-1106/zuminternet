export function observable(obj) {
  //객체 만들기
  return obj;
}

export function observe() {
  //observable 객체 사용
  let object = observable();
  console.log(object);
  let result = 0;
  for (let el in object) {
    result = result + el;
  }
  return `a + b = ${result}`;
}
