import { pool } from '../db/index.js'

export async function getProfiles() {
    const response = await pool.query('SELECT * FROM profiles;');
    return response.rows;
}

export async function getProfilesByRegion(region) {
    const lowerCase = region.toLowerCase();
    const searchRegion = `%${lowerCase}%`;
    const response = await pool.query("SELECT * FROM profiles WHERE LOWER(Region) LIKE $1", [searchRegion]);
    return response.rows;
}

export async function getProfilesByName(name) {
    const lowerCase = name.toLowerCase();
    const searchName = `%${lowerCase}%`;
    const response = await pool.query(`SELECT * FROM profiles WHERE LOWER(Name) LIKE $1`, [searchName]);
    return response.rows;
}

export async function getProfilesByBootcampNumber(bootcampNumber) {
    const response = await pool.query(`SELECT * FROM profiles WHERE bootcampNumber= $1`, [bootcampNumber]);
    return response.rows;
}