const { Equipment } = require('../models');

const equipmentData = [
    {
        asset_name: 'Apple iPad (10th Generation)',
        serial_num: 'DLXR60W0GHK9',
        price: 399.99,
        link: 'https://www.amazon.com/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJLXMVMV/ref=sr_1_4',
        is_checked_out: true,
    },
    {
        asset_name: 'Apple iPad (9th Generation)',
        serial_num: 'DMPR3NRVFK10',
        price: 399.99,
        link: 'https://www.amazon.com/2021-Apple-10-2-inch-iPad-Wi-Fi/dp/B09G9CJM1Z/ref=sr_1_3',
        is_checked_out: true,
    },
    {
        asset_name: 'Apple iPad (10th Generation)',
        serial_num: 'DMPR5SV9FK14',
        price: 399.99,
        link: 'https://www.amazon.com/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJLXMVMV/ref=sr_1_4',
        is_checked_out: true,
    },
    {
        asset_name: 'HP 14-inch Chromebook HD Touchscreen',
        serial_num: '',
        price: 234.00,
        link: 'https://www.amazon.com/HP-14-inch-Chromebook-Touchscreen-Bluetooth/dp/B07L52KX7B/ref=sr_1_6',
        is_checked_out: true,
    },
    {
        asset_name: 'C Pen Text to Speech Reader 2',
        serial_num: '',
        price: 295.00,
        link: 'https://www.amazon.com/Pen-Text-Speech-Reader-Differences/dp/B0BGPNM5B4/ref=sr_1_3',
        is_checked_out: true,
    },
    {
        asset_name: 'C Pen Text to Speech Reader 2',
        serial_num: '',
        price: 295.00,
        link: 'https://www.amazon.com/Pen-Text-Speech-Reader-Differences/dp/B0BGPNM5B4/ref=sr_1_3',
        is_checked_out: true,
    },
];

const seedEquipment = () => Equipment.bulkCreate(equipmentData);

module.exports = seedEquipment;
