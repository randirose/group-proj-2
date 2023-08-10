//import models
const Ticket = require('./Ticket');
const StudentStaff = require('./StudentStaff');
const StudentEquipment = require('./StudentEquipment');
const Student = require('./Student');
const Staff = require('./Staff');
const School = require('./School');
const Equipment = require('./Equipment');


// set up relationships between models

School.hasMany(Staff, {
    foreignKey: 'school_id'
});

Staff.belongsTo(School);

Student.belongsTo(Staff, {
    through: StudentStaff,
    foreignKey: 'student_id'
});

Staff.hasMany(Student, {
    through: StudentStaff,
    foreignKey: 'staff_id'
});

Equipment.hasMany(Ticket, {
    foreignKey: 'equipment_id',
    // when we delete a piece of equipment, deletes any associated tickets
    onDelete: 'CASCADE'
});

Ticket.belongsTo(Equipment, {
    foreignKey: 'ticket_id'
});

Equipment.belongsTo(Student, {
    through: StudentEquipment,
    foreignKey: 'equipment_id'
});

Student.hasMany(Equipment, {
    through: StudentEquipment,
    foreignKey: 'student_id'
});

Staff.hasMany(Ticket, {
    foreignKey: 'staff_id'
});

Ticket.belongsTo(Staff, {
    foreignKey: 'staff_id'
});

module.exports = { Ticket, Student, StudentEquipment, StudentStaff, Staff, Equipment, School}