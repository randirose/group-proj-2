const { Equipment } = require('../models');

const equipmentData = [
    // 1
    {
        asset_name: 'Apple iPad (10th Generation)',
        serial_num: 'DLXR60W0GHK9',
        price: 399.99,
        link: 'https://www.amazon.com/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJLXMVMV/ref=sr_1_4',
        is_checked_out: true,
    },
    // 2
    {
        asset_name: 'Apple iPad (9th Generation)',
        serial_num: 'DMPR3NRVFK10',
        price: 399.99,
        link: 'https://www.amazon.com/2021-Apple-10-2-inch-iPad-Wi-Fi/dp/B09G9CJM1Z/ref=sr_1_3',
        is_checked_out: true,
    },
    // 3
    {
        asset_name: 'Apple iPad (9th Generation)',
        serial_num: 'DMPUEN48FK11',
        price: 399.99,
        link: 'https://www.amazon.com/2021-Apple-10-2-inch-iPad-Wi-Fi/dp/B09G9CJM1Z/ref=sr_1_3',
        is_checked_out: false,
    },
    // 4
    {
        asset_name: 'Apple iPad (10th Generation)',
        serial_num: 'DMH4KC9FK14',
        price: 399.99,
        link: 'https://www.amazon.com/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJLXMVMV/ref=sr_1_4',
        is_checked_out: true,
    },
    // 5
    {
        asset_name: 'Apple iPad (10th Generation)',
        serial_num: 'DJ30CH58K14',
        price: 399.99,
        link: 'https://www.amazon.com/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJLXMVMV/ref=sr_1_4',
        is_checked_out: true,
    },
    // 6
    {
        asset_name: 'Apple iPad (10th Generation)',
        serial_num: 'DMPR5SV9FK14',
        price: 399.99,
        link: 'https://www.amazon.com/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJLXMVMV/ref=sr_1_4',
        is_checked_out: true,
    },
    // 7
    {
        asset_name: 'HP 14-inch Chromebook HD Touchscreen',
        serial_num: 'C0764MNCG832JF',
        price: 234.00,
        link: 'https://www.amazon.com/HP-14-inch-Chromebook-Touchscreen-Bluetooth/dp/B07L52KX7B/ref=sr_1_6',
        is_checked_out: true,
    },
    // 8
    {
        asset_name: 'HP 14-inch Chromebook HD Touchscreen',
        serial_num: 'C0Y4K29CJ382JF',
        price: 234.00,
        link: 'https://www.amazon.com/HP-14-inch-Chromebook-Touchscreen-Bluetooth/dp/B07L52KX7B/ref=sr_1_6',
        is_checked_out: false,
    },
    // 9
    {
        asset_name: 'HP 14-inch Chromebook HD Touchscreen',
        serial_num: 'C0Y4KCJ3K592JX',
        price: 234.00,
        link: 'https://www.amazon.com/HP-14-inch-Chromebook-Touchscreen-Bluetooth/dp/B07L52KX7B/ref=sr_1_6',
        is_checked_out: false,
    },
    // 10
    {
        asset_name: 'C Pen Text to Speech Reader 2',
        serial_num: 'C87N392',
        price: 295.00,
        link: 'https://www.amazon.com/Pen-Text-Speech-Reader-Differences/dp/B0BGPNM5B4/ref=sr_1_3',
        is_checked_out: true,
    },
    // 11
    {
        asset_name: 'C Pen Text to Speech Reader 2',
        serial_num: 'X87N397',
        price: 295.00,
        link: 'https://www.amazon.com/Pen-Text-Speech-Reader-Differences/dp/B0BGPNM5B4/ref=sr_1_3',
        is_checked_out: false,
    },
    // 12
    {
        asset_name: 'C Pen Text to Speech Reader 2',
        serial_num: 'X87N482',
        price: 295.00,
        link: 'https://www.amazon.com/Pen-Text-Speech-Reader-Differences/dp/B0BGPNM5B4/ref=sr_1_3',
        is_checked_out: false,
    },
    // 13
    {
        asset_name: 'Cetacea Sound Astronaut CL Soundfield',
        serial_num: 'DTE3926FK39XK',
        price: 779.00,
        link: 'https://www.amazon.com/Astronaut-CL-Soundfield-Wireless-Amplification/dp/B07PP4C2RD/ref=sr_1_3',
        is_checked_out: true,
    },
    // 14
    {
        asset_name: 'Cetacea Sound Astronaut CL Soundfield',
        serial_num: 'DTE3926FK48HD',
        price: 779.00,
        link: 'https://www.amazon.com/Astronaut-CL-Soundfield-Wireless-Amplification/dp/B07PP4C2RD/ref=sr_1_3',
        is_checked_out: false,
    },
    // 15
    {
        asset_name: 'Microsoft Surface Pro 9',
        serial_num: 'J98DCH38DHJ89',
        price: 830.89,
        link: 'https://www.amazon.com/Microsoft-Lightweight-Processor-Multi-Tasking-Platinum/dp/B0B9Q2ZB5T?ref_=ast_sto_dp&th=1',
        is_checked_out: false,
    },
    // 16
    {
        asset_name: 'Microsoft Surface Pro 9 with Eyegaze',
        serial_num: 'J9234IUUJ89',
        price: 830.89,
        link: 'https://www.amazon.com/Microsoft-Lightweight-Processor-Multi-Tasking-Platinum/dp/B0B9Q2ZB5T?ref_=ast_sto_dp&th=1',
        is_checked_out: true,
    },
    // 17
    {
        asset_name: 'Apple iPad (9th Generation)',
        serial_num: 'DMPE976WDK10',
        price: 399.99,
        link: 'https://www.amazon.com/2021-Apple-10-2-inch-iPad-Wi-Fi/dp/B09G9CJM1Z/ref=sr_1_3',
        is_checked_out: false,
    },
    // 18
    {
        asset_name: 'Microsoft Surface Pro 9',
        serial_num: 'J98ICN234J89',
        price: 830.89,
        link: 'https://www.amazon.com/Microsoft-Lightweight-Processor-Multi-Tasking-Platinum/dp/B0B9Q2ZB5T?ref_=ast_sto_dp&th=1',
        is_checked_out: false,
    },
    // 19
    {
        asset_name: 'Apple iPad (10th Generation)',
        serial_num: 'DJ3EPO028K10',
        price: 399.99,
        link: 'https://www.amazon.com/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJLXMVMV/ref=sr_1_4',
        is_checked_out: false,
    },
    // 20
    {
        asset_name: 'Apple iPad (10th Generation)',
        serial_num: 'DJ84EV5R8K33',
        price: 399.99,
        link: 'https://www.amazon.com/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJLXMVMV/ref=sr_1_4',
        is_checked_out: false,
    },
    // 21
    {
        asset_name: 'CommBoards - AAC Speech Assistant',
        serial_num: '',
        price: 14.99,
        link: 'https://www.amazon.com/Shmoontz-Apps-CommBoards-Speech-Assistant/dp/B07H89GXRW/ref=sr_1_18',
        is_checked_out: true,
    },
    // 22
    {
        asset_name: 'AAC Autism myVoice Communicator',
        serial_num: '',
        price: 2.99,
        link: 'https://www.amazon.com/RoessingDev-AAC-Autism-myVoice-Communicator/dp/B00BJXO8SC/ref=sr_1_6',
        is_checked_out: false,
    },
    // 23
    {
        asset_name: 'CoreVoice AAC by Central Speech Solutions, LLC',
        serial_num: '',
        price: 49.99,
        link: 'https://www.amazon.com/CoreVOICE-Central-Speech-Solutions-LLC/dp/B0791N7KC2/ref=sr_1_9',
        is_checked_out: false,
    },
    // 24
    {
        asset_name: 'Writing Wizard Premium',
        serial_num: '',
        price: 3.99,
        link: 'https://www.amazon.com/Writing-Wizard-Premium-Learn-Letters/dp/B00QH32FUM/ref=sr_1_21',
        is_checked_out: true,
    },
    // 25
    {
        asset_name: 'Sight Words Games & Flash Cards vol 1',
        serial_num: '',
        price: 2.99,
        link: 'https://www.amazon.com/Sight-Words-Games-Flash-Cards/dp/B00BSPH1CQ/ref=sr_1_17',
        is_checked_out: true,
    },
    // 26
    {
        asset_name: 'Fourth Grade Learning Games (School Edition)Fourth Grade Learning Games',
        serial_num: '',
        price: 49.99,
        link: 'https://www.amazon.com/RosiMosi-LLC-Fourth-Grade-Learning/dp/B00D8DKKTC/ref=sr_1_13',
        is_checked_out: true,
    },
];

const seedEquipment = () => Equipment.bulkCreate(equipmentData);

module.exports = seedEquipment;
