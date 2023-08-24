import moment from 'moment';

const form = document.querySelector('.form');
const button = document.querySelector('.count');
const workStartDate = new Date();
const workEndDate = new Date();

form.addEventListener('input', e => {
  e.preventDefault();
  if (e.target.id === 'work-start') {
    const workStart = `${e.target.value}:00`.split(':');
    workStartDate.setHours(workStart[0]);
    workStartDate.setMinutes(workStart[1]);
    workStartDate.setSeconds(workStart[2]);
  } else if (e.target.id === 'work-end') {
    const workEnd = `${e.target.value}:00`.split(':');
    workEndDate.setHours(workEnd[0]);
    workEndDate.setMinutes(workEnd[1]);
    workEndDate.setSeconds(workEnd[2]);
  }
});

button.addEventListener('click', e => {
  e.preventDefault();

  let minCount = (workEndDate - workStartDate) / 60000;
  if (minCount < 0) {
    minCount += 1440;
  }
  if (minCount >= 60) {
    minCount = minCount % 60;
  }
  let hoursCount = Math.floor((workEndDate - workStartDate) / 3600000);
  if (hoursCount < 0) {
    hoursCount += 24;
  }
  alert(
    `Ilość przepracowanych godzin: ${hoursCount}, ilość przepracowanych minut ${minCount}`
  );
});
