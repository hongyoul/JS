// Q12. 상품의 재고를 관리하는 프로그램을 만들어 주세요.
// 1) 상품 목록 배열을 생성하세요.
// 2) 새로운 제품인 “바나나킥”을 목록에 추가하세요. (수량:50, 가격:1000)
// 3) 재고가 있는 제품의 이름을 변경하세요.
// 4) 재고가 10개가 넘는 제품은 가격의 10%를 할인 해주세요.
// 5) 모든 제품의 총 재고 가치를 계산하세요.

/*배열문제*/

// 제품 목록 배열 생성
const inventory = [
  { product: "감자칩", quantity: 10, price: 1500 },
  { product: "아이스크림", quantity: 0, price: 3000 },
  { product: "쿠키", quantity: 20, price: 2000 },
  { product: "탄산음료", quantity: 5, price: 1000 },
];

console.log("원본 제품 목록:", inventory);

// 새로운 제품 "바나나킥" 추가 (수량: 50, 가격: 1000)
inventory.push({ product: "바나나킥", quantity: 50, price: 1000 });
console.log("새로운 제품 추가:", inventory);


// 배열의 요소 값을 변경할 때는 map() 또는 forEach() 사용
// map()은 새로운 배열을 반환하고,
// forEach()는 기존 배열을 수정하므로 간단한 변경 forEach()를 사용할 것
// 재고가 있는 제품의 이름을 변경
inventory.forEach((item) => {
  if (item.quantity > 0) {
    item.product = `(재고있음) ${item.product}`; // 또는 '(재고있음)' + itme.product
  }
});

console.log("재고가 있는 제품의 이름 변경:", inventory);

// 재고가 10개가 넘는 제품은 가격을 10% 할인
inventory.forEach((item) => {
  if (item.quantity > 10) {
    item.price = item.price * 0.9; // 가격의 10% 할인
  }
});
console.log("재고가 10개가 넘는 제품의 가격 할인:", inventory);

// 모든 제품의 총 재고 가치 계산
const totalValue = inventory.reduce((total, item) => {
  // 누적값 + (가격* 수량)
  return total + item.quantity * item.price;
}, 0);

console.log("전체 재고의 총 가치:", totalValue);