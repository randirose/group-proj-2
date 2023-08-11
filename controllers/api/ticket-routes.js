const router = require('express').Router();
const { Student, Staff, School, Equipment, Ticket, StudentStaff, StudentEquipment } = require('../../models');

// The '/api/ticket/' endpoint

// Get all tickets, showing the student and equipment ids if checked out
router.get('/', async (req, res) => {
    try {
        const ticketData = await Ticket.findAll({
            include: [{ model: Student }, { model: Ticket },],
        });
        res.status(200).json(ticketData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Get single ticket by id, showing the student and equipment names and ids if checked out
router.get('/:id', async (req, res) => {
    try {
        const ticketData = await Ticket.findByPk(req.params.id, {
            include: [{ model: Student }, { model: Equipment },],
        });
        if (!ticketData) {
            res.status(404).json({ message: 'No ticket found with that id.\nEnsure it is correct and try again.' });
        }
        res.status(200).json(ticketData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Create new ticket record, ensure req.body aligns with the Ticket model
router.post('/', async (req, res) => {
    try {
        const ticketData = await Ticket.create(req.body);
        if (!ticketData) {
            res.status(404).json({ message: 'Error creating new ticket.' });
        }
        res.status(200).json(ticketData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Update a school record by id
router.put('/:id', async (req, res) => {
    try {
        const ticketData = await Ticket.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!ticketData) {
            res.status(404).json({ message: 'No ticket found with that id.\nEnsure it is correct and try again.' });
        }
        res.status(200).json(ticketData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Delete a school record by id
router.delete('/:id', async (req, res) => {
    try {
        await Ticket.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({ message: `Successfully deleted school with id: ${req.params.id}.` });
    } catch (err) {
        res.status(500).json(err, { message: `Error deleting ticket with id: ${req.params.id}.\nEnsure this ticket id exists and try again.` });
    }
});

module.exports = router;