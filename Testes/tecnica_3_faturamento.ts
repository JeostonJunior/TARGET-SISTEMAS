// Example of JSON with daily revenue data (in an array of objects format)
const revenueJson = `[
  {"day": 1, "revenue": 500},
  {"day": 2, "revenue": 1500},
  {"day": 3, "revenue": 0},
  {"day": 4, "revenue": 3000},
  {"day": 5, "revenue": null},
  {"day": 6, "revenue": 2000},
  {"day": 7, "revenue": 800},
  {"day": 8, "revenue": 1200},
  {"day": 9, "revenue": 2500},
  {"day": 10, "revenue": 4500},
  {"day": 11, "revenue": 1000},
  {"day": 12, "revenue": 700}
]`;

interface DailyRevenue {
  day: number;
  revenue: number | null;
}

function calculateRevenue(revenueJson: string): string {
  const revenues: DailyRevenue[] = JSON.parse(revenueJson);

  // Filter days with non-null and non-zero revenue
  const validRevenues = revenues.filter(revenue => revenue.revenue !== null && revenue.revenue > 0);

  // Check if there are valid revenues
  if (validRevenues.length === 0) {
    return 'There is no valid revenue to calculate.';
  }

  // Calculate the minimum and maximum revenue (filtering null values)
  let minRevenue = Math.min(...validRevenues.map(r => r.revenue as number));
  let maxRevenue = Math.max(...validRevenues.map(r => r.revenue as number));

  // Calculate the monthly average (ignoring days with no revenue)
  let totalRevenue = validRevenues.reduce((acc, r) => acc + (r.revenue as number), 0);
  let monthlyAverage = totalRevenue / validRevenues.length;

  // Count the days with revenue higher than the average
  let daysAboveAverage = validRevenues.filter(r => (r.revenue as number) > monthlyAverage).length;


  return `Minimum revenue: ${minRevenue}\nMaximum revenue: ${maxRevenue}\nNumber of days with revenue above the average: ${daysAboveAverage}`;
}

// Example usage
console.log(calculateRevenue(revenueJson));
