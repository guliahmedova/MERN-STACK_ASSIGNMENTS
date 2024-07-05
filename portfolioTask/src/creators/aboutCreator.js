const p = document.getElementById('about_me');

export const bindAboutContent = (data) => {
    p.innerHTML = '';
    p.innerHTML = data.desc;
};