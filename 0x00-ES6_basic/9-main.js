import getFullBudgetObject from './9-getFullBudget';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeDollars(fullBudget.income));
console.log(fullBudget.getIncomeEuros(fullBudget.income));
