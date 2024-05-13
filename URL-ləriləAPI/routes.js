const aboutActions = require("./controllers/aboutController");
const questionsActions = require("./controllers/questionController");

const routes = {
    "/questions": {
        "GET": questionsActions.getAllQuestions
    },
    "/about": {
        "GET": aboutActions.getAllAbout
    }
};

module.exports = routes;