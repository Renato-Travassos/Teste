const Func= require('./desafio')
 
  test('soma 10 ser igual 23', () => {
    expect(Func.Somar(10)).toBe(23);
  });
  test('soma  11 ser igual a  33', () => {
    expect(Func.Somar(11)).toBe(33);
  });