const router = require('express').Router();
const { Student, Equipment, Ticket } = require('../../models');
const withAuth = require('../../utils/auth');

// The '/api/equipment/' endpoint

// Get all equipment, showing the student id if checked out and any open issue tickets
router.get('/', withAuth, async (req, res) => {
    try {
        const equipmentData = await Equipment.findAll({
            include: [{ model: Student }, { model: Ticket },],
        });
        res.status(200).json(equipmentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Get single piece of equipment by id, showing the student id if checked out and any open issue tickets 
router.get('/:id', withAuth, async (req, res) => {
    try {
        const equipmentData = await Equipment.findByPk(req.params.id, {
            include: [{ model: Student }, { model: Ticket },],
        });
        if (!equipmentData) {
            res.status(404).json({ message: 'No equipment found with that id.' });
        }
        res.status(200).json(equipmentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Create new equipment record, ensure req.body aligns with the Equipment model
router.post('/', withAuth, async (req, res) => {
    try {
        const equipmentData = await Equipment.create(req.body);
        console.log('equipmentData:', equipmentData);

        if (!equipmentData) {
            res.status(404).json({ message: 'Error creating new equipment record.' });
        }
        res.status(200).json(equipmentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Update equipment records by id,
router.put('/:id', withAuth, async (req, res) => {
    try {
        const equipmentData = await Equipment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!equipmentData) {
            res.status(404).json({ message: 'No equipment found with that id.\nEnsure it is correct and try again.' });
        }
        console.log('equipmentData:', equipmentData);
        res.status(200).json(equipmentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a equipment record by id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        await Equipment.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({ message: `Successfully deleted equipment with id: ${req.params.id}.` });
    } catch (err) {
        res.status(500).json(err, { message: `Error deleting equipment with id: ${req.params.id}.\nEnsure this equipment id exists and try again.` });
    }
});

module.exports = router;