const assert = require("assert");

const add = function(a, b) {
  return a + b;
};

const sub = function(a, b) {
  return a - b;
};

describe("add", () => {
  it("pass test", () => {
    let actualOutput = add(3, 3);
    let expectedOutput = 6;
    assert.deepEqual(actualOutput, expectedOutput);
  });
  it("fail test", () => {
    let actualOutput = add(3, 3);
    let expectedOutput = 5;
    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe("sub", () => {
  it("pass test", () => {
    let actualOutput = sub(3, 1);
    let expectedOutput = 2;
    assert.deepEqual(actualOutput, expectedOutput);
  });
});
