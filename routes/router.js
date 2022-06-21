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

export default router;