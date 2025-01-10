// Define the revenues for each state using a Record type to ensure the keys are strings and the values are numbers
const revenueByState: Record<string, number> = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

function calculateRevenuePercentage(revenueByState: Record<string, number>): string {
  const totalRevenue = Object.values(revenueByState).reduce((acc, value) => acc + value, 0);
  
  const percentages: string[] = Object.entries(revenueByState).map(([state, revenue]) => {
    const percentage = (revenue / totalRevenue) * 100;
    return `${state}: ${percentage.toFixed(2)}%`;
  });

  return percentages.join('\n');
}

console.log(calculateRevenuePercentage(revenueByState));
