import { pool } from '../db/index.js'

export async function getProfiles() {
    const response = await pool.query('SELECT * FROM profiles;');
    return response.rows;
}

export async function getProfilesByRegion(region) {
    const searchRegion = `%${region}%`;
    const response = await pool.query(`SELECT * FROM profiles WHERE Region LIKE $1`, [searchRegion]);
    return response.rows;
}

export async function getProfilesByName(name) {
    const searchName = `%${name}%`;
    const response = await pool.query(`SELECT * FROM profiles WHERE Name LIKE $1`, [searchName]);
    return response.rows;
}
export async function getProfilesByBootcamp(bootcampNumber) {
    const response = await pool.query(`SELECT * FROM profiles WHERE bootcampNumber= $1`, [bootcampNumber]);
    return response.rows;
}