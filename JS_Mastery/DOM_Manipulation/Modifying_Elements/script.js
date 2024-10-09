// getElementById
// select and modify element using textContent/innerHTML

const heading = document.getElementById('main-heading');
heading.textContent = 'Modified header';

// change css styles
heading.style.color = 'red'

// adding classes
heading.classList.add('highlight');

const highlightClass = document.querySelector('.highlight');
highlightClass.style.color = 'green';

