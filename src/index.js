console.log('start');

fetch('https://hn.algolia.com/api/v1/search?query=cats')
  .then((resp) => resp.json())
  .then((data) => console.log('data:', data));

console.log('end');
