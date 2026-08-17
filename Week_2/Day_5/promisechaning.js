function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data1');
      resolve('success');
    }, 2000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data2');
      resolve('success');
    }, 4000);
  });
}

// promise Chaining
console.log('fetching data1....');
let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);
  console.log('fetching data2....');
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log(res);
  });
});

// asyncFunc1().then((res) => {
//     console.log(res);
//     console.log("fetching data2....");
//              asyncFunc2().then((res) => {
//                   console.log(res);
//              });
// });

// asyncFunc1().then((res) => {
//     return asyncFunc2();
// }).then((res) => {
//      return asyncFunc3();
// }).then((res) => {
//      console.log(res);

fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
