//import models
const Ticket = require('./Ticket');
const StudentStaff = require('./StudentStaff');
const StudentEquipment = require('./StudentEquipment');
const Student = require('./Student');
const Staff = require('./Staff');
const School = require('./School');
const Equipment = require('./Equipment');


// set up relationships between models

Staff.belongsTo(School, {
    through: 'StaffSchool',
    foreignKey: 'school_id'
});

Student.belongsToMany(Staff, {
    through: StudentStaff,
    foreignKey: 'student_id'
});

Staff.belongsToMany(Student, {
    through: StudentStaff,
    foreignKey: 'staff_id'
});

Equipment.belongsToMany(Ticket, {
    through: 'equipmentTicket',
    foreignKey: 'equipment_id',
    // when we delete a piece of equipment, deletes any associated tickets
    onDelete: 'CASCADE'
});

Equipment.belongsToMany(Student, {
    through: 'studentEquipment',
    foreignKey: 'equipment_id'
});

Student.belongsToMany(Equipment, {
    through: 'studentEquipment',
    foreignKey: 'student_id'
});

Staff.belongsToMany(Ticket, {
    through: 'staffTicket',
    foreignKey: 'staff_id'
});

Ticket.belongsTo(Staff, {
    through: 'staffTicket',
    foreignKey: 'staff_id'
});

module.exports = { Ticket, Student, StudentEquipment, StudentStaff, Staff, Equipment, School };