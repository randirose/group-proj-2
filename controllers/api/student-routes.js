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


// get one product
router.get('/:id', async (req, res) => {
    // find a single product by its `id`, including its associated Category and Tag data
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


// create new student record
router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        first_name: "Jane",
        last_name: "Smith",
        grade: 3,
        notes: "Likes to take photos of their work with the iPad."
      }
    */
    Student.create(req.body)
        .then((student) => {
            // if there's product tags, we need to create pairings to bulk create in the ProductTag model
            if (req.body.tagIds.length) {
                const productTagIdArr = req.body.tagIds.map((tag_id) => {
                    return {
                        student_id: student.id,
                        tag_id,
                    };
                });
                return StudentStaff.bulkCreate(productTagIdArr);
            }
            // if no staff, just respond
            res.status(200).json(student);
        })
        .then((productTagIds) => res.status(200).json(productTagIds))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});