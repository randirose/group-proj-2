const router = require('express').Router();
const studentRoutes = require('./student-routes');
const staffRoutes = require('./staff-routes');
const equipmentRoutes = require('./equipment-routes');
const ticketRoutes = require('./ticket-routes');

router.use('/student', studentRoutes);
router.use('/staff', staffRoutes);
router.use('/equipment', equipmentRoutes);
router.use('/ticket', ticketRoutes);

module.exports = router;