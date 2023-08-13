const router = require('express').Router();
const { Student, Staff, School, Equipment, Ticket, } = require('../../models');

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
        const staffData = await Staff.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            school: req.body.school,
            is_admin: req.body.isAdmin,
        });
        req.session.save(() => {
            req.session.staff_id = staffData.id;
            req.session.loggedIn = true;
        if (!staffData) {
            res.status(404).json({ message: 'Error creating new staff record.' });
        }});
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

// sets up req.session.loggedIn for user upon login
router.post('/login', async (req, res) => {
    try {
      const staffData = await Staff.findOne({ where: { email: req.body.email } });
  
      if (!staffData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      const validPassword = await staffData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.staff_id = staffData.id;
        req.session.loggedIn = true;
        
        res.json({ staffData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // route for if user clicks logout
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  

module.exports = router;