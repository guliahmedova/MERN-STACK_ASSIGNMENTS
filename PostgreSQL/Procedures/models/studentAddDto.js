class StudentAddDto {
    constructor(requestData) {
        this.name = requestData.name;
        this.age = requestData.age;
        this.grade = requestData.grade;
        this.enrollmentDate = requestData.enrollmentDate;
    };
};

module.exports = StudentAddDto;