// Q21. 다음과 같이 책 객체를 생성하고, 객체를 복사하세요.
// 그리고 복사된 객체에서 출판년도를 2023으로 변경하세요.
let book = {
  title: "위대한 게츠비",
  author: "스콧피츠럴드",
  publishedYear: 1925,
};

let copyBook = {...book};

copyBook.publishedYear = 2023;

console.log("원본객체의 출판년도: " + book.publishedYear);
console.log("복사객체의 출판년도: " + copyBook.publishedYear);

// Q22. 다음과 같이 책 객체를 생성하고, 객체를 완벽하게 복사하세요.
// 복사된 객체에서 저자의 성을 "김"으로 변경하세요.

let javaBook = {
  title: "자바프로그래밍 입문",
  author: {
    firstName: "은종",
    lastName: "박",
  }
};

let bookCopy = JSON.stringify(javaBook);

let javaBookcopy = JSON.parse(bookCopy);

javaBookcopy.author.lastName = "김";

console.log("원본객체의 성: " + javaBook.author.lastName);
console.log("복사객체의 성: " + javaBookcopy.author.lastName);