const router = require("express").Router();
const pool = require("../models/test.js"); 


//use post request
router.route("/add").post((req, res) => {
    const { vehicle_make,vehicle_model,body_type,regno,milage,engine,fuel,year,district,grade,colour,icolour,noofowners,file } = req.body;
//insert vlues in to the table.
    const query = 'INSERT INTO vehicle_advertisements (vehicle_make,vehicle_model,body_type,regno,milage,engine,fuel,year,district,grade,colour,icolour,noofowners) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    pool.query(query, [vehicle_make,vehicle_model,body_type,regno,milage,engine,fuel,year,district,grade,colour,icolour,noofowners,file], (err, results) => {
      //Display success or error message to the user.
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json("Information Added");
    });
});

module.exports=router;