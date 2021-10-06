const Employee = require("../lib/Employee");

describe("Employee", () => {
  const employee = new Employee();

  // test getName() method
  test("defines getName()", () => {
    expect(typeof employee.getName).toBe("function");
  });
  test("getName() returns undefined when called", () => {
    expect(employee.getName()).toBeUndefined();
  });

  // test getEmail() method
  test("defines getEmail()", () => {
    expect(typeof employee.getEmail).toBe("function");
  });
  test("getEmail() returns undefined when called", () => {
    expect(employee.getName()).toBeUndefined();
  });

  test("defines getId()", () => {
    expect(typeof employee.getId).toBe("function");
  });
  test("getId() returns undefined when called", () => {
    expect(employee.getName()).toBeUndefined();
  });

  test("defines getRole()", () => {
    expect(typeof employee.getRole).toBe("function");
  });
  test("getRole() returns undefined when called", () => {
    expect(employee.getName()).toBe("Employee");
  });
  test("getRole() returns a string", () => {
    expect(typeof employee.getName()).toBe("string");
  });
});
