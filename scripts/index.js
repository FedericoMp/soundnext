// Date year - footer section
let date = new Date();
let dateTextEl = document.getElementById('dateText');
dateTextEl.innerText += ` ${date.getFullYear()}`;