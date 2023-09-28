import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeDollars: (income) => `$${income}`,
    getIncomeEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
