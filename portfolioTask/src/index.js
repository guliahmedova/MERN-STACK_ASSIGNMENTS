import { bindAboutContent } from "./creators/aboutCreator.js";
import { bindAnalisisContent } from "./creators/analisisCreator.js";
import { bindBlogContent } from "./creators/blogCreator.js";
import { bindServiceContent } from "./creators/servicesCreator.js";
import { bindTestimonialsContent } from "./creators/testimonialsCreator.js";
import { bindUserContent } from "./creators/userCreator.js";
import { getAboutDetail } from "./requests/aboutService.js";
import { getAnalisisDetail } from "./requests/analisisService.js";
import { getBlogDetail } from "./requests/blogService.js";
import { getServicesDetail } from "./requests/servicesService.js";
import { getTestimonialsDetail } from "./requests/testimonialsService.js";
import { getUserDetail } from "./requests/userService.js";

async function LoadData() {
    const userResult = await getUserDetail();
    bindUserContent(userResult[0]);

    const aboutResult = await getAboutDetail();
    bindAboutContent(aboutResult[0]);

    const serviceResult = await getServicesDetail();
    bindServiceContent(serviceResult);

    const analisisResult = await getAnalisisDetail();
    bindAnalisisContent(analisisResult);

    const testimonialsResult = await getTestimonialsDetail();
    bindTestimonialsContent(testimonialsResult);

    const blogResult = await getBlogDetail();
    bindBlogContent(blogResult);
};

document.addEventListener('DOMContentLoaded', LoadData);