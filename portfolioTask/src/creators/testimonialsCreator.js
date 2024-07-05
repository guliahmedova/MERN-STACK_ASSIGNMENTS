const testimonialsCont = document.querySelector('.carousel-inner');

const createTestimonTemplate = (desc, title, job, index) => {
    const activeclass = index ? 'active' : '';
    return `
    <div class="carousel-item ${activeclass} text-center">
        <img src="img/testimonials.png" alt="" class="colon">
        <p>${desc}</p>
        <img src="img/team-1.png" alt="" class="center-block team">
        <h3>${title}</h3>
        <h4>${job}</h4>
    </div>`
};

export const bindTestimonialsContent = (data) => {
    testimonialsCont.innerHTML = '';
    data.forEach((element, index) => {
        const isActive = index === 0;
        const box = createTestimonTemplate(element.desc, element.title, element.job, isActive);
        testimonialsCont.innerHTML += box;
    });
};