const seedStudents = require('./student-seeds');
const seedStaff = require('./staff-seeds');
const seedEquipment = require('./equipment-seeds');
const seedSchools = require('./school-seeds');
const seedStudentStaff = require('./studentStaff-seeds');
const seedStudentEquipment = require('./studentEquipment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedSchools();
    console.log('\n----- SCHOOLS SEEDED -----\n');

    await seedStudents();
    console.log('\n----- STUDENTS SEEDED -----\n');

    await seedStaff();
    console.log('\n----- STAFF SEEDED -----\n');

    await seedEquipment();
    console.log('\n----- EQUIPMENT SEEDED -----\n');

    await seedStudentStaff();
    console.log('\n----- STUDENT/STAFF SEEDED -----\n');

    await seedStudentEquipment();
    console.log('\n----- STUDENT/EQUIPMENT SEEDED -----\n');


    process.exit(0);
};

seedAll();
