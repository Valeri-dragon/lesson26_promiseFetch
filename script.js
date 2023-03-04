"use strict";

const getData = (url) => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log("Данные не получены " + error));
};

const senData = (url, out) => {
  out
    .then((data) => {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Данные не получены " + error));
};

const user = getData("./db.json");

senData("https://jsonplaceholder.typicode.com/posts", user);
