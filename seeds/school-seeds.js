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
        name: 'Capitol Hill ES',
    },
    // 4
    {
        name: 'Duniway ES',
    },
    // 5
    {
        name: 'Faubion PK-8',
    },
    // 6
    {
        name: 'Glencoe ES',
    },
    // 7
    {
        name: 'Harriet Tubman MS',
    },
    // 8
    {
        name: 'Hosford MS',
    },
    // 9
    {
        name: 'Kellogg MS',
    },
    // 10
    {
        name: 'Cleveland HS',
    },
    // 11
    {
        name: 'Ida B. Wells HS',
    },
    // 12
    {
        name: 'Lincoln HS',
    },
    // 13
    {
        name: 'Roosevelt HS',
    },
];

const seedSchools = () => School.bulkCreate(schoolData);

module.exports = seedSchools;
