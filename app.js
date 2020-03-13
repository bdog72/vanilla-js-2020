//
//
console.log(123);

function getData() {
  const data = axios.get('https://swapi.co/api/planet/').then(data => {
    console.log(data);
  });
  console.log(data);
}
