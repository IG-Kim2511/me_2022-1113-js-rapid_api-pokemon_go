
  
function getApi(params) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": config.RAPID_KEY,
      'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com'
    },
  };

  fetch('https://pokemon-go1.p.rapidapi.com/type_effectiveness.json', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
getApi();


