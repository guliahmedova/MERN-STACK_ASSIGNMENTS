class LogModel{
    constructor(metaData){
        this.infos = {
            date: Date.now(),
            ...metaData
        };
    };
};

module.exports = LogModel;