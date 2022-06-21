import { test, expect, describe } from "@jest/globals";
import { getProfiles, getProfilesByRegion, getProfilesByName, getProfilesByBootcamp } from "./profiles.js";
import { profile as initialData } from '../libs/data.js';
import { createProfilesTable } from '../db/peopleTable/create.js';
import { populateProfilesTable } from '../db/peopleTable/populate.js';
import { dropProfilesTable } from '../db/peopleTable/drop.js';


describe("GET function tests", () => {
  test("The get all function returns all entries", async () => {
   // dropProfilesTable();
    //createProfilesTable();
    //populateProfilesTable();
    const allProfiles = await getProfiles();
    const expected = initialData
    expect(allProfiles).toStrictEqual(expected);
  });
});