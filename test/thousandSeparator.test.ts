import { expect, test } from "vitest";
import thousanSeparator from "../src/utils/thousandSeparator";

test("Thousand Separator", () => {
  expect(thousanSeparator(1000)).toEqual("1.000");
  expect(thousanSeparator(100)).toEqual("100");
  expect(thousanSeparator(2000, ",")).toEqual("2,000");
  expect(thousanSeparator(200, ",")).toEqual("200");
});
