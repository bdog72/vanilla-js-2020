//
//

const annoyer = {
  phrases: [
    'literally',
    'cray cray',
    'I cant even',
    'Totes!',
    'Yolo',
    'Cant stop, wont stop'
  ],
  pickPhrase() {
    const { phrases } = this;
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
  }
};

// function sayHi() {
//   console.log('HI');
//   console.log(this);
// }
// sayHi();
//
// const person = {
//   firstName: 'Bozo',
//   lastName: 'Beak',
//   nickName: 'DoDo',
//   fullName() {
//     const { firstName, lastName, nickName } = this;
//     return `${firstName} ${lastName} AKA ${nickName}`;
//   },
//   printBio() {
//     const fullName = this.fullName();
//     console.log(`${fullName} is a person`);
//   }
// };

// const printBio = person.printBio();

// const math = {
//   add: function(x, y) {
//     return x + y;
//   },
//   multiply: function(x, y) {
//     return x * y;
//   }
// };

// const auth = {
//   userName: 'Dork',
//   login() {
//     console.log(`123 ${this.userName}`);
//   },
//   bozo: () => {
//     console.log('456');
//   }
// };
