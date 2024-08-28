// Q23. 다음 객체에서 브랜드(brand)와 가격(price) 속성을 추출하여 변수에 저장하세요.
let phone = {
brang: "Apple",
price: 990000,
model: "iPhone 13",
};

let {brang, price} = phone;
console.log("브랜드: " + brang);
console.log("가격: " + price);


// Q24. 다음 객체에서 제목(title)과 출시연도(year) 속성을 추출하여
// 각각 'movieTitle'과 'releaseYear'라는 이름의 변수에 저장하세요.
let celebrity = {
  title: "인셉션",
  director: "크리스토퍼 논란",
  year: 2010,
};
let {title: movieTitle, year: releaseYear } = celebrity;
console.log("제목: " + movieTitle);
console.log("출시연도: " + releaseYear);


// Q25. 함수에서 객체를 매개변수로 받아, 'brand'와 'model' 속성을 출력하세요.
let car = {
  brand: "Tesla",
  model: "Model S",
  color: "Red",
};

  // 1.
  function func(br, mo) {
    console.log("자동차 브랜드: " + br + "," + "모델명: " + mo);
  }
  
  func(car.brand, car.model);
  
    // 2.
  function func2({brand, model}) { 
    console.log("자동차 브랜드: " + brand + "," + "모델명: " + model);
  }
  
  func2(car);