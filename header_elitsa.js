fetch('/header_elitsa.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    const script = document.createElement('script');
      script.src = '../../Viktoria_Seymenova/tt-viki.js';
      document.body.appendChild(script);
  });