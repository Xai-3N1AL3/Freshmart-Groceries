const Attendance = require('./model');

const logAttendance = async (req, res) => {
    const { userId, status } = req.body;

    if (!userId || !status) {
        return res.status(400).json({ success: false, message: "User ID and status are required" });
    }

    try {
        const attendance = await Attendance.create({ userId, status });
        res.status(200).json({ success: true, message: "Attendance logged", data: attendance });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getAttendance = async (req, res) => {
    try {
        const records = await Attendance.find().populate('userId', 'username');
        res.status(200).json({ success: true, data: records });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateAttendance = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).json({ success: false, message: "Status is required" });
    }

    try {
        const updatedRecord = await Attendance.findByIdAndUpdate(id, { status }, { new: true });
        if (!updatedRecord) {
            return res.status(404).json({ success: false, message: "Attendance record not found" });
        }
        res.status(200).json({ success: true, message: "Attendance updated", data: updatedRecord });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteAttendance = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRecord = await Attendance.findByIdAndDelete(id);
        if (!deletedRecord) {
            return res.status(404).json({ success: false, message: "Attendance record not found" });
        }
        res.status(200).json({ success: true, message: "Attendance record deleted" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { logAttendance, getAttendance, updateAttendance, deleteAttendance };
