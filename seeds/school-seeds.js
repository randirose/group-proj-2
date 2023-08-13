const { School } = require('../models');

const schoolData = [
    // 1
    {
        name: 'Astor K-8',
    },
    // 2
    {
        name: 'Beach ES',
    },
    // 3
    {
        notes: 'Capitol Hill ES',
    },
    // 4
    {
        notes: 'Duniway ES',
    },
    // 5
    {
        notes: 'Faubion PK-8',
    },
    // 6
    {
        notes: 'Glencoe ES',
    },
    // 7
    {
        notes: 'Harriet Tubman MS',
    },
    // 8
    {
        notes: 'Hosford MS',
    },
    // 9
    {
        notes: 'Kellogg MS',
    },
    // 10
    {
        notes: 'Cleveland HS',
    },
    // 11
    {
        notes: 'Ida B. Wells HS',
    },
    // 12
    {
        notes: 'Lincoln HS',
    },
    // 13
    {
        notes: 'Roosevelt HS',
    },
];

const seedSchools = () => School.bulkCreate(schoolData);

module.exports = seedSchools;
