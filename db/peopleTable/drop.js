import { query } from '../index.js'

export async function dropProfilesTable() {
    await query("DROP TABLE IF EXISTS profiles;");
    console.log('Table deleted');
}

dropProfilesTable();