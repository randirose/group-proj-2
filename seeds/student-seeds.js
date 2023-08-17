const { Student } = require('../models');

const studentData = [
    // 1
    {
        first_name: 'Neo',
        last_name: 'Ryan',
        grade: 0,
        staff_id: 1,
        notes: 'Neo is a kindergartener at Astor K-8 and uses an iPad with a writing app.',
    },
    // 2
    {
        first_name: 'Eoin',
        last_name: 'Schroeder',
        grade: 1,
        staff_id: 2,
        notes: 'Eoin is a first grader at Beach ES and uses an iPad with a communication app.',
    },
    // 3
    {
        first_name: 'Inayah',
        last_name: 'Harding',
        grade: 2,
        staff_id: 3,
        notes: 'Inayah is a second grader at Capitol Hill ES and uses a touchscreen chromebook.',
    },
    // 4
    {
        first_name: 'Rafferty',
        last_name: 'Silva',
        grade: 3,
        staff_id: 4,
        notes: 'Rafferty is a third grader at Duniway ES and uses C-Pen to help with reading.',
    },
    // 5
    {
        first_name: 'Lucian',
        last_name: 'Goodwin',
        grade: 4,
        staff_id: 5,
        notes: 'Lucian is a fourth grader at Faubion PK-8 and has no equipment checked out.',
    },
    // 6
    {
        first_name: 'Nina',
        last_name: 'Nielsen',
        grade: 5,
        staff_id: 6,
        notes: 'Nina is a fifth grader at Glencoe ES and uses a Soundfield system for hearing needs.',
    },
    // 7
    {
        first_name: 'Kaiden',
        last_name: 'Duran',
        grade: 6,
        staff_id: 7,
        notes: 'Kaiden is a sixth grader at Harriet Tubman MS and uses a Surface Pro with EyeGaze.',
    },
    // 8
    {
        first_name: 'Conner',
        last_name: 'Noble',
        grade: 7,
        staff_id: 8,
        notes: 'Conner is a seventh grader at Hosford MS and uses an iPad with a writing app.',
    },
    // 9
    {
        first_name: 'Sian',
        last_name: 'Wolf',
        grade: 8,
        staff_id: 9,
        notes: 'Sian is a eighth grader at Kellogg MS and uses a C-Pen to help with reading.',
    },
    // 10
    {
        first_name: 'Myla',
        last_name: 'Clements',
        grade: 9,
        staff_id: 10,
        notes: 'Myla is a freshman at Cleveland HS and uses a touchscreen chromebook.',
    },
    // 11
    {
        first_name: 'Mario',
        last_name: 'Carlson',
        grade: 10,
        staff_id: 11,
        notes: 'Mario is a sophmore at Ida B. Wells HS and uses an iPad with a writing app.',
    },
    // 12
    {
        first_name: 'Luther',
        last_name: 'Benton',
        grade: 11,
        staff_id: 12,
        notes: 'Luther is a junior at Lincoln HS and has no equipment checked out.',
    },
    // 13
    {
        first_name: 'Mohamed',
        last_name: 'Roach',
        grade: 12,
        staff_id: 13,
        notes: 'Mohamed is a senior at Roosevelt HS and uses an iPad with a communication app.',
    },
];

const seedStudents = () => Student.bulkCreate(studentData);

module.exports = seedStudents;
