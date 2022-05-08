
it('should calculate the monthly rate correctly', function () {
  const values = { amount: 20000, years: 5, rate: 3.5 };
  expect(calculateMonthlyPayment(values)).toEqual('363.83');
});


it("should return a result with 2 decimal places", function () {
  const values = { amount: 20000, years: 5, rate: 3.5 };
  expect(calculateMonthlyPayment(values)).toEqual('363.83');

});

it('should handle really high interest rates', function () {
  const values = { amount: 20000, years: 5, rate: 99 };
  expect(calculateMonthlyPayment(values)).toEqual('1664.31');

});