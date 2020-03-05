import { flipArgs } from "./flipArgs";

describe("Flip Arguments", () => {
  test("should flip arguments to get correct values", () => {
    expect(flipArgs("a", "b", "c", "d")).toEqual(["d", "c", "b", "a"]);
    expect(flipArgs(1, 2, 3, 4)).toEqual([4, 3, 2, 1]);
    expect(flipArgs({ x: 5 }, "a", 2)).toEqual([2, "a", { x: 5 }]);
  });
});
