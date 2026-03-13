function getTimeAndDate() {
  let date = new Date;
  
  day = formatTimeAndDate(date.getDate());
  month = formatTimeAndDate(date.getMonth() + 1);
  document.querySelector('#date').textContent = `${day}/${month}/${date.getFullYear()}`;
}

function formatTimeAndDate(num) {
  return num > 10 ? num : `0${num}`;
}

getTimeAndDate();