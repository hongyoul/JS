// Q18. 아래와 같이 변수 세 개를 선언하세요.
// key1 = "make"; key2 = "model"; key3 = "year";
// 그리고 이 세 개의 변수를 키로 사용하여 자동차 객체 car를 생성하세요.
// 객체: { make: '현대', model: '쏘나타', year: 2021 }

var key1 = "make";
var key2 = "model"; 
var key3 = "year";

var car = {
  [key1]: "현대",
  [key2]: "소나타",
  [key3]: 2021,
};
console.log(car);

// Q19. 아래와 같이 사람 객체 person을 생성하고, 변수 property를 선언하세요.
// 그리고 person 객체에 property 변수를 사용하여 동적으로 속성을 추가하세요.
// property = "address";
// 초기 객체: { name: '철수', age: 21 }
// 업데이트된 객체: { name: '철수', age: 21, address: '인천 남동구 만수동' }

var property = "address";

var person =  { name: '철수', age: 21 };

person[property] = "인천 남동구 만수동";

console.log(person);



// Q20. 아래와 같이 변수 두 개를 선언하세요.
// 빈 객체 product를 생성하고, 변수를 사용하여 동적으로 속성을 추가하세요.
// key1 = "productName"; key2 = "productPrice";
// 초기 객체: { }
// 업데이트된 객체: { productName: "필통", productPrice: 5000}

var key1 = "productName";
var key2 = "productPrice";

var product = {};

product[key1] =  "필통";
product[key2] = 5000;

console.log(product);
