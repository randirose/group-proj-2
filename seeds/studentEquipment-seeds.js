const { StudentEquipment } = require('../models');

const studentEquipmentData = [
    {
        equipment_id: 1,
        student_id: 1,
    },
    {
        equipment_id: 25,
        student_id: 1,
    },
    {
        equipment_id: 2,
        student_id: 2,
    },
    {
        equipment_id: 21,
        student_id: 2,
    },
    {
        equipment_id: 7,
        student_id: 3,
    },
    {
        equipment_id: 10,
        student_id: 4,
    },
    {
        equipment_id: 13,
        student_id: 6,
    },
    {
        equipment_id: 16,
        student_id: 7,
    },
    {
        equipment_id: 4,
        student_id: 8,
    },
    {
        equipment_id: 24,
        student_id: 8,
    },
    {
        equipment_id: 12,
        student_id: 9,
    },
    {
        equipment_id: 9,
        student_id: 10,
    },
    {
        equipment_id: 26,
        student_id: 11,
    },
    {
        equipment_id: 6,
        student_id: 13,
    },
    {
        equipment_id: 23,
        student_id: 13,
    },
];

const seedStudentEquipment = () => StudentEquipment.bulkCreate(studentEquipmentData);

module.exports = seedStudentEquipment;
