class Student {
    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.age = row.age;
        this.grade = row.grade;
        this.enrollmentDate = new Date(row.enrollment_date);
    }

    static mapAll(dbRows) {
        const students = [];
        for (const row of dbRows) {
            const student = new Student(row);
            students.push(student);
        }
        return students;
    }
}

module.exports = Student;