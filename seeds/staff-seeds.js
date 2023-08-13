const { Staff } = require('../models');

const staffData = [
    // 1
    {
        first_name: 'Anita',
        last_name: 'Reid',
        role: 'Teacher',
        is_admin: false,
        school_id: 1,
        email: 'anita_reid@schools.net',
        password: '',
    },
    // 2
    {
        first_name: 'Katerina',
        last_name: 'Bowman',
        role: 'Occupational Therapist',
        is_admin: false,
        school_id: 2,
        email: 'katerina_bowman@schools.net',
        password: '',
    },
    // 3
    {
        first_name: 'Herman',
        last_name: 'Hodges',
        role: 'Speech Language Pathologist',
        is_admin: false,
        school_id: 3,
        email: 'herman_hodges@schools.net',
        password: '',
    },
    // 4
    {
        first_name: 'Ashton',
        last_name: 'Chan',
        role: 'Speech Language Pathologist',
        is_admin: false,
        school_id: 4,
        email: 'ashton_chan@schools.net',
        password: '',
    },
    // 5
    {
        first_name: 'Louise',
        last_name: 'Ramirez',
        role: 'Teacher',
        is_admin: false,
        school_id: 5,
        email: 'louise_ramirez@schools.net',
        password: '',
    },
    // 6
    {
        first_name: 'Cruz',
        last_name: 'Burke',
        role: 'Teacher',
        is_admin: false,
        school_id: 6,
        email: 'cruz_burke@schools.net',
        password: '',
    },
    // 7
    {
        first_name: 'Benjamin',
        last_name: 'Lozano',
        role: 'Occupational Therapist',
        is_admin: false,
        school_id: 7,
        email: 'benjamin_lozano@schools.net',
        password: '',
    },
    // 8
    {
        first_name: 'Jaden',
        last_name: 'Wiley',
        role: 'Occupational Therapist',
        is_admin: false,
        school_id: 8,
        email: 'jaden_wiley@schools.net',
        password: '',
    },
    // 9
    {
        first_name: 'Janice',
        last_name: 'Cross',
        role: 'Speech Language Pathologist',
        is_admin: false,
        school_id: 9,
        email: 'janice_cross@schools.net',
        password: '',
    },
    // 10
    {
        first_name: 'Ned',
        last_name: 'Hogan',
        role: 'Teacher',
        is_admin: false,
        school_id: 10,
        email: 'ned_hogan@schools.net',
        password: '',
    },
    // 11
    {
        first_name: 'Orla',
        last_name: 'Carson',
        role: 'Speech Language Pathologist',
        is_admin: false,
        school_id: 11,
        email: 'orla_carson@schools.net',
        password: '',
    },
    // 12
    {
        first_name: 'Sylvie',
        last_name: 'Levine',
        role: 'Occupational Therapist',
        is_admin: false,
        school_id: 12,
        email: 'sylvie_levine@schools.net',
        password: '',
    },
    // 13
    {
        first_name: 'Jerry',
        last_name: 'Mcconnell',
        role: 'Teacher',
        is_admin: false,
        school_id: 13,
        email: 'jerry_mcconnell@schools.net',
        password: '',
    },
    // 14
    {
        first_name: 'Admin',
        last_name: 'McAdminFace',
        role: 'Admin',
        is_admin: true,
        email: 'admin@schools.net',
        password: '',
    },
];

const seedStaff = () => Staff.bulkCreate(staffData);

module.exports = seedStaff;
