const b = document.querySelector('.cd-words-wrapper .is-visible');
const professionTags = document.querySelectorAll('.cd-words-wrapper b');
const paragraph = document.querySelector('.paragraph');

export const bindUserContent = (data) => {
    b.textContent = data.fullName;
    paragraph.textContent = data.desc;
    professionTags[1].textContent = data.professions[0];
    professionTags[2].textContent = data.professions[1];
    b.classList.add('is-visible');
};