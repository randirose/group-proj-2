const router = require('express').Router();
const { Student, Staff, School, Equipment, Ticket, StudentStaff, StudentEquipment } = require('../../models');

// The '/api/staff/' endpoint

// NOT NEEDED: there doesn't seem to be a need for anyone to see all staff.
// Get all staff, showing their students at each school, all equipment checked out to their students, and any open issue tickets
// router.get('/', async (req, res) => {
//     try {
//         const staffData = await Staff.findAll({
//             include: [{ model: Student }, { model: School }, { model: Equipment }, { model: Ticket },],
//         });
//         res.status(200).json(staffData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// Get single staff member by id, showing their schools, students, all equipment checked out, and any open issue tickets
router.get('/:id', async (req, res) => {
    try {
        const staffData = await Staff.findByPk(req.params.id, {
            include: [{ model: Student }, { model: School }, { model: Equipment }, { model: Ticket },],
        });
        if (!staffData) {
            res.status(404).json({ message: 'No staff member found with that id.' });
        }
        res.status(200).json(staffData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Create new staff record, ensure req.body aligns with the Staff model
router.post('/', async (req, res) => {
    try {
        const staffData = await Staff.create(req.body);
        if (!staffData) {
            res.status(404).json({ message: 'Error creating new student record.' });
        }
        res.status(200).json(staffData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Update a staff record by id
router.put('/:id', async (req, res) => {
    try {
        const staffData = await Staff.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!staffData) {
            res.status(404).json({ message: 'No student found with that id.' });
        }
        res.status(200).json(staffData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Delete a staff record by id
router.delete('/:id', async (req, res) => {
    try {
        await Staff.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({ message: `Successfully deleted staff member with id: ${req.params.id}.` });
    } catch (err) {
        res.status(500).json(err, { message: `Error deleting staff member with id: ${req.params.id}.\nEnsure this staff id exists and try again.` });
    }
});

module.exports = router;