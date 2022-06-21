import {query} from "../index.js";

const sqlstring = `CREATE TABLE IF NOT EXISTS profiles (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, bootcampNumber INT, name TEXT, region TEXT, jobTitle TEXT, pronouns TEXT, imageLink TEXT, contactInfo TEXT);`;

async function createProfilesTable(){
   const res = await query (sqlstring);
   console.log(res.command, "table created");
}
createProfilesTable();
