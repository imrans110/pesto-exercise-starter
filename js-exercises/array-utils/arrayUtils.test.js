import { map, reduce, filter, forEach } from "./arrayUtils";

describe("Testing 4 custom functions i.e Map, Reduce, Filter, ForEach", () => {
  test("Testing for correct returning values from map", () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = el => el * 2;
    expect(map(arr, fn)).toEqual([2, 4, 6, 8, 10]);
  });
  test("Testing for correct returning values from reduce", () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = (accumulator, currentValue) => accumulator + currentValue;
    expect(reduce(arr, fn)).toBe(15);
  });
  test("Testing for correct returning values from filter", () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = el => el % 2 === 0;

    expect(filter(arr, fn)).toEqual([2, 4]);
  });
  test("Testing for correct returning values from forEach", () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = el => el * 2;

    expect(forEach(arr, fn)).toEqual([2, 4, 6, 8, 10]);
  });
});
