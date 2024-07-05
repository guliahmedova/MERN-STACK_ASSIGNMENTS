const blogItems = document.getElementById('blog_container');

const createBlogTemplate = (title, desc, author, date) => {
    return `<div class="co-md-6 col-lg-4">
    <div class="box">
        <div class="image">
            <img src="img/blog/1.png" alt="">
            <a href="#" class="cate">Web</a>
        </div>
        <div class="text">
            <h3><a href="#">${title}</a></h3>
            <h4>${author}, ${date}</h4>
            <p>${desc}</p>
        </div>
    </div>
</div>`
};

export const bindBlogContent = (data) => {
    blogItems.innerHTML = '';
    data.forEach(element => {
        const box = createBlogTemplate(element.title, element.desc, element.author, element.data);
        blogItems.innerHTML += box;
    });
};