// Q1. 회원, 제품, 주문 정보를 담을 수 있는 객체를 만들어주세요.

//회원
const member = {
  id: "아이디",
  pw: "패스워드",
  level: "등급",
  memberName: "이름",
  phone: "전화번호"
};

// 제품
const product1 = {
  productName: "제품명",
  price: 1200000,
  detExpl: "상세설명",
  category: "카테고리"
};

// 주문
const order = {
  productName: "제품명",
  quantity: "수량",
  totalPrice: 54680000,
  orderName: "주문자",
  orderDate: "주문일자",
  address: "배송지"
};


// Q2-1. 사람 객체의 정보를 수정하여, 아래와 같이 출력하세요.

const person = {
  age : 30,
  name : "둘리",
  address : "서울"
  }

//도트연산자를 사용하여 값 변경
person.age = 10;
person.name = "또치";
person.address = "인천";

//대괄호를 사용하여 값 변경
  person["age"] = 10;
  person["name"] = "또치";
  person["address"] = "인천";


// Q2-2. 사람 객체의 정보를 수정하여, 아래와 같이 출력하세요.

const product = {
  name: "노트북",
  price: 1500000,
  brand: "삼성",
  }
//도트연산자를 사용하여 값 변경
product.name = "노트북";
product.price = 2000000;
product.brand = "LG";

//대괄호를 사용하여 값 변경
  product["name"] = "노트북";
  product["price"] = 2000000;
  product["brand"] = "LG";


// Q3. 다음 문자열 배열을 사용하여 첫번째 요소와 마지막요소를 합쳐서 출력하세요
const foodList = ['Pizza', 'Hamburger', 'Chicken', 'Steak'];
console.log(foodList[0],foodList[3]);

// 정답
const foodList = ['Pizza', 'Hamburger', 'Chicken', 'Steak'];

const food1 = foodList[0]; //첫번째 요소 'Pizza'
const food2 = foodList[foodList.length -1] //마지막요소 'Steak'

const result = food1 + ' ' + food2;

// =======번외======
console.log(food1,' ',food2);