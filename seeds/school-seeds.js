const { School } = require('../models');

const schoolData = [
    {
        name: 'Astor K-8',
    },
    {
        name: 'Beach ES',
    },
    {
        notes: 'Capitol Hill ES',
    },
    {
        notes: 'Duniway ES',
    },
    {
        notes: 'Faubion PK-8',
    },
    {
        notes: 'Glencoe ES',
    },
    {
        notes: 'Harriet Tubman MS',
    },
    {
        notes: 'Hosford MS',
    },
    {
        notes: 'Kellogg MS',
    },
    {
        notes: 'Cleveland HS',
    },
    {
        notes: 'Ida B. Wells HS',
    },
    {
        notes: 'Lincoln HS',
    },
    {
        notes: 'Roosevelt HS',
    },
];

const seedSchools = () => School.bulkCreate(schoolData);

module.exports = seedSchools;
