const router = require('express').Router();
const { Student, Staff, School, Equipment, Ticket, StudentStaff, StudentEquipment } = require('../../models');

// The '/api/student/' endpoint

// Get all students, showing their school, all equipment checked out, any open issue tickets, and the associated staff members
router.get('/', async (req, res) => {
    try {
        const studentData = await Student.findAll({
            include: [{ model: Staff }, { model: School }, { model: Equipment }, { model: Ticket },],
        });
        res.status(200).json(studentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Get a single student by id, showing their school, all equipment checked out, any open issue tickets, and the associated staff members
router.get('/:id', async (req, res) => {
    try {
        const studentData = await Student.findByPk(req.params.id, {
            include: [{ model: Staff }, { model: School }, { model: Equipment }, { model: Ticket },],
        });
        if (!studentData) {
            res.status(404).json({ message: 'No student found with that id.' });
        }
        res.status(200).json(studentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Create new student record, ensure req.body aligns with the Student model
router.post('/', async (req, res) => {
    try {
        const studentData = await Student.create(req.body);
        if (!studentData) {
            res.status(404).json({ message: 'Error creating new student record.' });
        }
        res.status(200).json(studentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Update a student record by id
router.put('/:id', async (req, res) => {
    try {
        const studentData = await Student.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!studentData) {
            res.status(404).json({ message: 'No student found with that id.' });
        }
        res.status(200).json(studentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Delete a student record by id
router.delete('/:id', async (req, res) => {
    try {
        await Student.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({ message: `Successfully deleted student with id: ${req.params.id}.` });
    } catch (err) {
        res.status(500).json(err, { message: `Error deleting student with id: ${req.params.id}.\nEnsure this student id exists and try again.` });
    }
});

module.exports = router;