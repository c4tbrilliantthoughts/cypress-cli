// //GET  METHODE

// // const { it } = require("mocha");
// // describe("HTTP GET request", () => {
// //   it("GET", () => {
// //     cy.request({
// //       method: "GET",
// //       url: "https://vzapi.free.beeceptor.com/mqtt/cas/sensors",
// //     }).then((response) => {
// //       expect(response.body);
// //     });
// //   });
// // });

// describe("My First Test", () => {
//   it("Does not do much!", () => {
//     expect("Hello").to.equal("Hello");
//   });
// });

// describe("", () => {
//   it("", () => {
//     cy.request({
//       method: "GET",
//       url: "https://vzapi.free.beeceptor.com/mqtt/cas/sensors",
//     }).then((response) => {
//       expect(response.body);
//     });
//   });
// });

// // describe("HTTP GET request", () => {
// //   it("GET", () => {
// //     cy.request({
// //       method: "GET",
// //       url: "http://httpbin.org/get",
// //     }).then((response) => {
// //       expect(response.body).have.property("url");
// //     });
// //   });
// // });

// // describe("HTTP Examples", () => {
// //   it("GET", () => {
// //     cy.request({
// //       method: "GET",
// //       url: "http://httpbin.org/get",
// //     }).then((response) => {
// //       expect(response.body).have.property("url");
// //     });
// //   });
// // });

// //POST METHODE
// describe("HTTP Examples", () => {
//   it("POST", () => {
//     cy.request({
//       method: "POST",
//       url: "http://httpbin.org/post",
//       body: {
//         name: "John",
//         age: 30,
//       },
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((response) => {
//       expect(response.body).have.property("json");
//       expect(response.body.json).to.deep.equal({
//         name: "John",
//         age: 30,
//       });
//     });
//   });
// });

// // //PUT METHODE
// // describe("HTTP Examples", () => {
// //   it("PUT", () => {
// //     cy.request({
// //       method: "PUT",
// //       url: "http://httpbin.org/get",
// //     }).then((response) => {
// //       expect(response.body).expect(response.body).have.property("url");
// //     });
// //   });
// // });

const axios = require("axios");
const cheerio = require("cheerio");

const getPostTitles = async () => {
  try {
    const { data } = await axios.get("https://old.reddit.com/r/programming/");
    const $ = cheerio.load(data);
    const postTitles = [];

    $("div > p.title > a").each((_idx, el) => {
      const postTitle = $(el).text();
      postTitles.push(postTitle);
    });
    return postTitles;
  } catch (error) {
    throw error;
  }
};
getPostTitles().then((postTitles) => console.log(postTitles));
