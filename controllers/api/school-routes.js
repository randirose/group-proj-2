const router = require('express').Router();
const { Student, Staff, School, Equipment, Ticket, StudentStaff, StudentEquipment } = require('../../models');

// The '/api/school/' endpoint

// NOT NEEDED: there doesn't seem to be a need for anyone to see all schools.
// Get all schools, showing the student and equipment ids if checked out and any open issue tickets
// router.get('/', async (req, res) => {
//     try {
//         const schoolData = await School.findAll({
//             include: [{ model: Student }, { model: Ticket },],
//         });
//         res.status(200).json(schoolData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// Get single school by id, showing the student and equipment names and ids if checked out and any open issue tickets 
router.get('/:id', async (req, res) => {
    try {
        const schoolData = await School.findByPk(req.params.id, {
            include: [{ model: Student }, { model: Equipment }, { model: Ticket },],
        });
        if (!schoolData) {
            res.status(404).json({ message: 'No school found with that id.' });
        }
        res.status(200).json(schoolData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Create new school record, ensure req.body aligns with the School model
router.post('/', async (req, res) => {
    try {
        const schoolData = await School.create(req.body);
        if (!schoolData) {
            res.status(404).json({ message: 'Error creating new school record.' });
        }
        res.status(200).json(schoolData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Update a school record by id
router.put('/:id', async (req, res) => {
    try {
        const schoolData = await School.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!schoolData) {
            res.status(404).json({ message: 'No school found with that id.\nEnsure it is correct and try again.' });
        }
        res.status(200).json(schoolData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Delete a school record by id
router.delete('/:id', async (req, res) => {
    try {
        await School.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({ message: `Successfully deleted school with id: ${req.params.id}.` });
    } catch (err) {
        res.status(500).json(err, { message: `Error deleting school with id: ${req.params.id}.\nEnsure this school id exists and try again.` });
    }
});

module.exports = router;