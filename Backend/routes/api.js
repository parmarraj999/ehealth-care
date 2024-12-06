const express = require('express');
const router = express.Router();
const AppointmentSchema = require("../models/appointment")

// for booking apoointment
router.post('/bookDoctor/:id',async(req,res)=>{
    const { id } = req.params;
    const { patientName, patientNumber, patientAge, appointmentDate, appointmentTime, status} = req.body();
    try {
        const newAppointment = new AppointmentSchema({
            patientName,
            patientNumber,
            patientAge,
            appointmentDate,
            appointmentTime,
            status,
        })
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
})