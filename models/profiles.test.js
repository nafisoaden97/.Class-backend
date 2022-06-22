import { test, expect, describe } from "@jest/globals";
import {getProfiles} from "./profiles.js";

describe("GET function tests", () => {
  test("Check the structure of the payload, when sent a GET request for All profiles", async () => {
    //ARRANGE
    const actual = await getProfiles()
    //ACT
    const expected = []; 
    for(let i=0; i<actual.length; i++){
      expected.push({
        id: expect.any(Number),
        bootcampnumber: expect.any(Number),
        name: expect.any(String),
        region: expect.any(String),
        jobtitle: expect.any(String),
        pronouns: expect.any(String),
        description: expect.any(String),
        imagelink: expect.any(String),
        contactinfo: expect.any(String)
      })}

    //ASSERT
    expect(actual).toEqual(expected);
  });





});