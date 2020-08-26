const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// ===== User ======

router.get('/', async (req, res) => {
    const user = new User({
        gu_id: 'adit212121212',
    bookmarks: {
        job_id: 'id_333134993',
        job_url: 'http://github.com/id1221/sw_engineer'
    }
    });
    try {
   await user.save((err, result) => {
       if (err) throw err;
       console.log(`Saved ${result}`);
   })
   res.status(200).send(`Saved`);
} catch(err) {
    console.error(`Could not save ${err}`);
}
});

router.get('/details', async (req, res) => {

    try {
   const result = await User.find({}, (err, result) => {
       if (err) throw err;
       console.log(`got ${result}`);
   })
   res.send(result);
} catch(err) {
    console.error(`Could not get ${err}`);
}
});



module.exports = router;