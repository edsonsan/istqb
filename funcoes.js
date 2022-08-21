fetch("questoes.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.data(jsondata));
