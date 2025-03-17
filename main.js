

let list = document.querySelectorAll('ul li');


function activeLink () {
    list.forEach((item) => 
    item.classList.remove("active"));
    this.classList.add('active');
}

list.forEach((item) => 
    item.addEventListener('click',activeLink));


// Code in Github : https://github.com/mohmd005/Category--listt.git