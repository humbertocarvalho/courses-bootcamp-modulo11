function soma(a, b) {
  return a + b;
}

test('calling soma function with 4 and 5, it should return 9', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
