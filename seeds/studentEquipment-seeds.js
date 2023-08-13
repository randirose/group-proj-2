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
        equipment_id: 25,
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



];

const seedStudentEquipment = () => StudentEquipment.bulkCreate(studentEquipmentData);

module.exports = seedStudentEquipment;
