const analisis = document.getElementById('analisis');

const createAnalisisTemplate = (count, desc) => {
    return `<div class="col-lg-3 col-sm-6">
    <div class="items">
        <span class="fa fa-skyatlas"></span>
        <h3>
            <span class="counter">${count}</span>
        </h3>
        <div class="line mx-auto"></div>
        <h4>${desc}</h4>
    </div>
</div>`
};

export const bindAnalisisContent = (data) => {
    analisis.innerHTML = '';
    data.forEach(element => {
        const box = createAnalisisTemplate(element.count, element.desc);
        analisis.innerHTML += box;
    });
};