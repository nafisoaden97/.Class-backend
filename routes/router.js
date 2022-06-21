import express from "express";
import { pool } from '../db/index.js'

const router = express.Router();

async function getProfiles() {
    const response = await pool.query('SELECT * FROM profiles;');
    return response.rows;
}


router.get("/", async function (req, res) {
    let response = await getProfiles();
    res.json({success: true, payload: response});
});

/* async function getProfilesByName(name) {
    const response = await pool.query(`SELECT * FROM profiles WHERE LOWER(name)= LOWER(${name});`);
    return response.rows;
}

router.get("/", function (req, res) {
    let searchTerm = req.body.name.toLowerCase();
    console.log(req.body);
    payload = getProfilesByName(searchTerm)
    res.json({ success: true, payload: payload });
});

export default router; */

router.get("/", function (req, res) {
    let searchTerm = req.query.name.toLowerCase();
    console.log(req.query.region);
    payload = getProfilesByRegion(searchTerm)
    res.json({ success: true, payload: payload });
});
async function getProfilesByRegion(region) {
    const response = await pool.query(`SELECT * FROM profiles WHERE LOWER(region)= LOWER(${region});`);
    return response.rows;
}


export default router;