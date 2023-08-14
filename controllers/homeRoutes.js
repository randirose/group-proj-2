const router = require('express').Router();
const { Staff, Student, Equipment, Ticket, School, } = require('../models/');
const withAuth = require('../utils/auth');

// homepage route
router.get('/', async (req,res)=>{
    try {
        res.render('homepage', {
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// gets all info for specific staff member that's signed in on their dashboard
router.get('/dashboard', withAuth, async (req, res)=>{
    try {
        const staffData = await Staff.findByPk(req.session.staff_id, {
            attributes: {
                exclude: ['password']
            },
            include: [
                // { model: Student, include: [{model: Equipment}] }, 
                { model: Student},
                { model: School }, 
                // { model: Equipment }, 
                { model: Ticket },],
        });
        const staff = staffData.get({ plain:true });
        res.render('dashboard', {
            ...staff,
            // ...students,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res)=>{
    try {
        const staffData = await Staff.findByPk(req.session.staff_id, {
            attributes: {
                exclude: ['password']
            },
            include: [
                { model: School },]
        });
        const staff = staffData.get({ plain:true });
        const schoolData = await School.findAll();
        const schools = schoolData.map((school) => school.get({ plain: true }));
        res.render('profile', {
            ...staff,
            ...schools,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get single student
router.get('/students/:id', withAuth, async (req, res) => {
    try {
      const studentData = await Student.findByPk(req.params.id, {
        include: [ { model: Equipment },],
      });
  
      if (studentData) {
        const student = studentData.get({ plain: true });
  
        res.render('students', { student, loggedIn: req.session.loggedIn });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/add-student', withAuth, async (req, res)=> {
    try {
        const staffData = await Staff.findAll();
        const staffs = staffData.map((staff)=>staff.get({ plain:true }));
        res.render('add-student', { staffs, loggedIn: req.session.loggedIn } )
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/edit-student/:id', withAuth, async (req, res)=> {
    try {
        const studentData = await Student.findByPk(req.params.id);
        const student = studentData.get({ plain: true });
        const staffData = await Staff.findAll();
        const staffs = staffData.map((staff)=>staff.get({ plain:true }));
        res.render('edit-student', { student, staffs, loggedIn: req.session.loggedIn } )
    } catch (err) {
        res.status(500).json(err);
    }
});

// redirects to dash once logged in
router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/dashboard');
		return;
	}

	res.render('login');
});

router.get('/signup', async (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
    const schoolData = await School.findAll();
    const schools = schoolData.map((school) => school.get({ plain: true }));

  
    res.render('signup',
        { schools }
    );
  });

module.exports = router;
