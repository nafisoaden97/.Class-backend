import { test, expect, describe } from "@jest/globals";
import {getProfiles, getProfilesByBootcampNumber, getProfilesByName, getProfilesByRegion} from "./profiles.js";

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

  test("When Greater London (in lowercase) is the region, test that all entries in payload have region of Greater London",
  async () => {
    //ARRANGE
    const actual = await getProfilesByRegion("greater london")
    //ACT
    const expected = []; 
    for(let i=0; i<actual.length; i++){
      expected.push({
        id: expect.any(Number),
        bootcampnumber: expect.any(Number),
        name: expect.any(String),
        region: "Greater London",
        jobtitle: expect.any(String),
        pronouns: expect.any(String),
        description: expect.any(String),
        imagelink: expect.any(String),
        contactinfo: expect.any(String)
      })}
    //ASSERT
    expect(actual).toEqual(expected);
  })

  test("When nafiso is the name, test that Nafiso Aden profile is given",
  async () => {
    //ARRANGE
    const actual = await getProfilesByName("nafiso")
    //ACT
    const expected = []; 
    for(let i=0; i<actual.length; i++){
      expected.push({
        id: expect.any(Number),
        bootcampnumber: expect.any(Number),
        name: "Nafiso Aden",
        region: expect.any(String),
        jobtitle: expect.any(String),
        pronouns: expect.any(String),
        description: expect.any(String),
        imagelink: expect.any(String),
        contactinfo: expect.any(String)
      })}
    //ASSERT
    expect(actual).toEqual(expected);
  })

  test("When dgddgdgdgdgdgdgdgdgdg is the name given, the test should return an empty array",
  async () => {
    //ARRANGE
    const actual = await getProfilesByName("dgddgdgdgdgdgdgdgdgdg")
    //ACT
    const expected = []; 
    //ASSERT
    expect(actual).toEqual(expected);
  })

  test("When bootcamp number is 12, test that all profiles returned have bootcamp number of 12",
  async () => {
    //ARRANGE
    const actual = await getProfilesByBootcampNumber(12)
    //ACT
    const expected = []; 
    for(let i=0; i<actual.length; i++){
      expected.push({
        id: expect.any(Number),
        bootcampnumber: 12,
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
  })
});