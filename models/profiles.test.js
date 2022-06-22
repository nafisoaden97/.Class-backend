import { test, expect, describe } from "@jest/globals";
import {getProfiles} from "./profiles.js";

describe("GET function tests", () => {
  test("Check the structure of the return", async () => {
    //ARRANGE
    const actual = await getProfiles()
    //ACT
    const expected = expect.objectContaining([
      {
        id: expect.any(Number),
        bootcampNumber: expect.any(Number),
        name: expect.any(String),
        region: expect.any(String),
        jobTitle: expect.any(String),
        pronouns: expect.any(String),
        imageLink: expect.any(String),
        contactInfo: expect.any(String)
      }
    ])
    //ASSERT
    expect(actual).toBe(expected);
  });
});