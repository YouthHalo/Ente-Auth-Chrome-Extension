document.addEventListener('DOMContentLoaded', function() {
  fetch('https://auth.ente.io/')
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;
    })
    .catch(error => {
      document.getElementById('content').innerHTML = 'Failed to load content.';
      console.error('Error fetching the website:', error);
    });
});