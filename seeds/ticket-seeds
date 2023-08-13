const { Ticket } = require("../models");

const ticketData = [
  // 1
  {
    status: "broken",
    date_created: "2023-08-01",
    equipment_id: 3,
    staff_id: 12,
  },
  // 2
  {
    status: "broken",
    date_created: "2023-08-04",
    equipment_id: 10,
    staff_id: 4,
  },
  // 3
  {
    status: "lost",
    date_created: "2023-08-12",
    equipment_id: 8,
    staff_id: 5,
  },
  // 4
  {
    status: "missing charger",
    date_created: "2023-07-04",
    equipment_id: 15,
    staff_id: 9,
  },
  // 5
  {
    status: "broken",
    date_created: "2023-06-19",
    equipment_id: 20,
    staff_id: 12,
  },
];

const seedTickets = () => Ticket.bulkCreate(ticketData);

module.exports = seedTickets;
