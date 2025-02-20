const express = require('express');
const router = express.Router();
const { logAttendance, getAttendance, updateAttendance, deleteAttendance } = require('./controller');

router.post('/log', logAttendance);
router.get('/records', getAttendance);
router.put('/update/:id', updateAttendance);
router.delete('/delete/:id', deleteAttendance);

module.exports = router;
