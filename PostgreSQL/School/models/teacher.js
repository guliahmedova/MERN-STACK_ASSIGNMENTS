class Teacher {
    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.age = row.age;
        this.subject = row.subject;
        this.hireDate = new Date(row.hire_date);
    };

    static mapAll(dbRows) {
        const rows = [];
        for (const row of dbRows) {
            const teacher = new Teacher(row);
            rows.push(teacher);
        }
        return rows;
    };
};

module.exports = Teacher;