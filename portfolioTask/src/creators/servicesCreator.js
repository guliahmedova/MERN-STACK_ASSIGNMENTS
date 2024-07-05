const skillItems = document.getElementById('skills');

const createSkillTemplate = (skillName, desc) => {
    return ` <div class="col-md-6 col-lg-4">
    <div class="box">
        <span class="fa fa-cog"></span>
        <h3>${skillName}</h3>
        <p>${desc} </p>
    </div>
</div>`
};

export const bindServiceContent = (data) => {
    skillItems.innerHTML = '';
    data.forEach(element => {
        const box = createSkillTemplate(element.title, element.desc);
        skillItems.innerHTML += box;
    });
};