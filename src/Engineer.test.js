const { default: test } = require("node:test");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const Engineer = require("../Employee-template-engine/lib/Engineer");

test("can set Github account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect (e.github).toBe (testValue);
});
test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
} );

test("can get GitHub username via getGitHub()",() => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});