var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < data.length; i++){
        var userLoginEl = document.createElement('h3');
        var userURLEl = document.createElement('a');
        userLoginEl.textContent = data[i].login;
        userURLEl.textContent = data[i].html_url;
        userURLEl.setAttribute("href", data[i].html_url);
        console.log(userLoginEl, userURLEl);
        userContainer.append(userLoginEl);
        userContainer.append(userURLEl);
                
      }
    });
}
fetchButton.addEventListener('click', getApi);
