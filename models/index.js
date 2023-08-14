//import models
const Ticket = require('./Ticket');
const StudentStaff = require('./StudentStaff');
const StudentEquipment = require('./StudentEquipment');
const Student = require('./Student');
const Staff = require('./Staff');
const School = require('./School');
const Equipment = require('./Equipment');


// set up relationships between models

// School.belongsToMany(Staff, {
//     through: 'StaffSchool',
//     foreignKey: 'school_id'
// });

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
    through: 'EquipmentTicket',
    foreignKey: 'equipment_id',
    // when we delete a piece of equipment, deletes any associated tickets
    onDelete: 'CASCADE'
});

// Ticket.belongsTo(Equipment, {
//     through: 'EquipmentTicket',
//     foreignKey: 'ticket_id'
// });

Equipment.belongsToMany(Student, {
    through: StudentEquipment,
    foreignKey: 'equipment_id'
});

Student.belongsToMany(Equipment, {
    through: StudentEquipment,
    foreignKey: 'student_id'
});

Staff.belongsToMany(Ticket, {
    through: 'StaffTicket',
    foreignKey: 'staff_id'
});

Ticket.belongsTo(Staff, {
    through: 'StaffTicket',
    foreignKey: 'staff_id'
});

module.exports = { Ticket, Student, StudentEquipment, StudentStaff, Staff, Equipment, School}