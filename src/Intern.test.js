const { default: test } = require("node:test");
const Intern = require("../Employee-template-engine/lib/Intern");

test("can set school via constructor", () => {
    const testValue = "Sydney University";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect (e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e =  new Intern("Foo", 1, "test@test.com", "Sydney University");
    expect(e.getRole()).toBe(testValue);

});

test("can get school via getSchool()", () => {
    const testValue = "Sydney University";
    const e = new Intern ("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});