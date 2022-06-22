import { query } from "../index.js";
import profiles from "../../libs/data.js";

export async function populateProfilesTable(){
    for (let i=0; i<profiles.length; i++){
        const res = await query( 
            `INSERT INTO profiles(name, bootcampNumber, region, jobTitle, pronouns, description, imageLink, contactInfo) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)RETURNING*;`,
            [profiles[i].name, profiles[i].bootcampNumber, profiles[i].region, profiles[i].jobTitle, profiles[i].pronouns, profiles[i].description, profiles[i].imageLink, profiles[i].contactInfo]
        );
    console.log(res.rows[0].name, "inserted");
    }
    }
populateProfilesTable();