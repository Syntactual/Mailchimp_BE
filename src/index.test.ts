import {describe, expect, test} from '@jest/globals';
import dotenv from "dotenv";
dotenv.config();
describe('port number', () => {
  test('port number is 3000', () => {
    expect(process.env.PORT).toBe("3000");
  });
});