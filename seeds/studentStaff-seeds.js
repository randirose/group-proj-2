const { StudentStaff } = require('../models');

const studentStaffData = [
    {
        staff_id: 1,
        student_id: 1,
    },
    {
        staff_id: 2,
        student_id: 2,
    },
    {
        staff_id: 3,
        student_id: 3,
    },
    {
        staff_id: 4,
        student_id: 4,
    },
    {
        staff_id: 5,
        student_id: 5,
    },
    {
        staff_id: 6,
        student_id: 6,
    },
    {
        staff_id: 7,
        student_id: 7,
    },
    {
        staff_id: 8,
        student_id: 8,
    },
    {
        staff_id: 9,
        student_id: 9,
    },
    {
        staff_id: 10,
        student_id: 10,
    },
    {
        staff_id: 11,
        student_id: 11,
    },
    {
        staff_id: 12,
        student_id: 12,
    },
    {
        staff_id: 13,
        student_id: 13,
    },

];

const seedStudentStaff = () => StudentStaff.bulkCreate(studentStaffData);

module.exports = seedStudentStaff;
