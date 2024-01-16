console.log("Hello world!");

const person = {
  name: "Loren",
  age: 29,
  favouriteColour: "orange",
  sayHello: function (name) {
    console.log("Hello " + name);
  },
};

person.sayHello("Tim");

const car = {
  make: "Volkswagen",
  model: "Golf",
  colour: "black",
  advert: function () {
    console.log(
      "FOR SALE: " +
        car.make +
        " " +
        car.model +
        ". The colour is " +
        car.colour +
        ". Message if interested."
    );
  },
};

car.advert();

const book = {
  title: "The Testaments",
  author: "Margaret Atwood",
  noOfPages: 500,
  advert: function () {
    console.log(
      book.title +
        " by " +
        book.author +
        " is the amazing follow up to the bestselling The Handmaid's Tale. The book is " +
        book.noOfPages +
        " pages long."
    );
  },
};

book.advert();
