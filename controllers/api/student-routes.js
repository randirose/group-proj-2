const router = require('express').Router();
const { Student, Staff, School, Equipment, Ticket, StudentStaff, StudentEquipment } = require('../../models');
const withAuth = require('../../utils/auth');

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


// Get a single student by id
router.get('/student/:id', withAuth, async (req, res) => {
    try {
        const studentData = await Student.findByPk(req.params.id, {
            include: [{ model: Equipment },],
        });

        if (studentData) {
            const student = studentData.get({ plain: true });
            const staffData = await Staff.findAll();
            const staffs = staffData.map((staff) => staff.get({ plain: true }));
            const equipmentData = await Equipment.findAll({
                where: {
                    is_checked_out: false,
                }
            });
            const equipments = equipmentData.map((equip) => equip.get({ plain: true }));
            console.log(student);
            res.render('student', { student, staffs, equipments, loggedIn: req.session.loggedIn });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


// Create new student record, ensure req.body aligns with the Student model
router.post('/', withAuth, async (req, res) => {
    try {
        const studentData = await Student.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            grade: req.body.grade,
            staff_id: req.body.staffId,
            notes: req.body.notes,
        });
        if (!studentData) {
            res.status(404).json({ message: 'Error creating new student record.' });
        }

        const studentStaffData = {
            student_id: studentData.id,
            staff_id: studentData.staff_id,
        };
        StudentStaff.create(studentStaffData);

        res.status(200).json(studentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Update a student record by id
router.put('/:id', withAuth, async (req, res) => {
    try {
        const studentData = await Student.update({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            grade: req.body.grade,
            staff_id: req.body.staffId,
            notes: req.body.notes,
        }, {
            where: {
                id: req.params.id,
            },
        });

        if (!studentData) {
            res.status(404).json({ message: 'No student found with that id.' });
        }

        const studentStaffData = {
            student_id: studentData.id,
            staff_id: studentData.staff_id,
        };
        await StudentStaff.create(studentStaffData);

        res.status(200).json(studentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Check out new equipment to student
router.put('/checkout/:id', withAuth, async (req, res) => {
    try {
        const studentEquipmentData = {
            student_id: req.body.student_id,
            equipment_id: req.body.equipment_id,
        };
        await StudentEquipment.create(studentEquipmentData);
        res.json({ message: `Successfully checked out equipment.` });
    } catch (err) {
        res.status(500).json(err);
    }
});


// Check in equipment from student
router.delete('/checkin/:id', withAuth, async (req, res) => {
    try {
        await StudentEquipment.destroy({
            where: {
                student_id: req.body.student_id,
                equipment_id: req.body.equipment_id,
            },
        });
        res.json({ message: `Successfully checked in equipment.` });
    } catch (err) {
        res.status(500).json(err, { message: `Error checking in equipment.` });
    }
});

// Delete a student record by id
router.delete('/:id', withAuth, async (req, res) => {
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