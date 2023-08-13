const { Staff } = require('../models');

const staffData = [
    {
        first_name: 'Anita',
        last_name: 'Reid',
        role: 'Teacher',
        school_id: 1,
        email: 'anita_reid@schools.net',
        password: '',
    },
    {
        first_name: 'Katerina',
        last_name: 'Bowman',
        role: 'Occupational Therapist',
        school_id: 2,
        email: 'katerina_bowman@schools.net',
        password: '',
    },
    {
        first_name: 'Herman',
        last_name: 'Hodges',
        role: 'Speech Language Pathologist',
        school_id: 3,
        email: 'herman_hodges@schools.net',
        password: '',
    },
    {
        first_name: 'Ashton',
        last_name: 'Chan',
        role: 'Speech Language Pathologist',
        school_id: 4,
        email: 'ashton_chan@schools.net',
        password: '',
    },
    {
        first_name: 'Louise',
        last_name: 'Ramirez',
        role: 'Teacher',
        school_id: 5,
        email: 'louise_ramirez@schools.net',
        password: '',
    },
    {
        first_name: 'Cruz',
        last_name: 'Burke',
        role: 'Teacher',
        school_id: 6,
        email: 'cruz_burke@schools.net',
        password: '',
    },
    {
        first_name: 'Benjamin',
        last_name: 'Lozano',
        role: 'Occupational Therapist',
        school_id: 7,
        email: 'benjamin_lozano@schools.net',
        password: '',
    },
    {
        first_name: 'Jaden',
        last_name: 'Wiley',
        role: 'Occupational Therapist',
        school_id: 8,
        email: 'jaden_wiley@schools.net',
        password: '',
    },
    {
        first_name: 'Janice',
        last_name: 'Cross',
        role: 'Speech Language Pathologist',
        school_id: 9,
        email: 'janice_cross@schools.net',
        password: '',
    },
    {
        first_name: 'Orla',
        last_name: 'Carson',
        role: 'Speech Language Pathologist',
        school_id: 11,
        email: 'orla_carson@schools.net',
        password: '',
    },
    {
        first_name: 'Sylvie',
        last_name: 'Levine',
        role: 'Occupational Therapist',
        school_id: 12,
        email: 'sylvie_levine@schools.net',
        password: '',
    },
    {
        first_name: 'Jerry',
        last_name: 'Mcconnell',
        role: 'Teacher',
        school_id: 13,
        email: 'jerry_mcconnell@schools.net',
        password: '',
    },

];

const seedStaff = () => Staff.bulkCreate(staffData);

module.exports = seedStaff;
