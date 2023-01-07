getResponseFromAPI.prototype.getData = function() {
  return new Promise((resolve, reject) => {
    // Make a request to the API
    const apiUrl = 'https://api.example.com';
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
