// disable form button submit
const formSubmit = document.querySelector('.my-book-form');

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();

    let handler = setInterval(()=> {
        let disabledWord = document.createElement('span')

        disabledWord.className = 'badge bg-secondary position-absolute top-0 fw-normal my-badge';

        let text = document.createTextNode('I disabled submitting')

        disabledWord.appendChild(text);

        formSubmit.appendChild(disabledWord)

        setTimeout(() => {
            clearInterval(handler);
            disabledWord.style.display = 'none';
        }, 1000);
    })

})
// disable form button submit

// select all links and disable the appearence of id in the url
let links = document.querySelectorAll('.link-js')

links.forEach (link => {
    link.addEventListener('click' , (e) => {
        e.preventDefault();

        document.querySelector(e.currentTarget.dataset.section).scrollIntoView({
            behavior: 'smooth',
        })
    })
})
