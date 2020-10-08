import "./styles.css";

/*[{id: 1, name: "a", age: 20}, {id: 2, name: "b", age: 21}, {id: 3, name: "c", age: 20}]

ageが20の要素を抽出してください*/

//[{id: 1, name: "a", age: 20}, {id: 3, name: "c", age: 20}]を返す関数を作る

const app = document.getElementById("app");
let list = [
  { id: 1, name: "a", age: 20 },
  { id: 2, name: "b", age: 21 },
  { id: 3, name: "c", age: 20 }
];

// function findArray(catchList) {
//   let result = catchList.filter(function (item) {
//     return item.age === 20;
//   });

//   app.textContent = JSON.stringify(result);
// }

// もりけん先生回答⬇️
function findArray(catchList) {
  return catchList.filter((item) => {
    return item.age === 20;
  });
}

app.textContent = JSON.stringify(findArray(list));
