import * as fs from 'fs';

interface DailyRevenue {
  dia: number;
  valor: number;
}

function calculateRevenue(revenues: DailyRevenue[]): string {
  // Filter days with non-zero revenue
  const validRevenues = revenues.filter(revenue => revenue.valor > 0);

  // Check if there are valid revenues
  if (validRevenues.length === 0) {
    return 'There is no valid revenue to calculate.';
  }

  // Calculate the minimum and maximum revenue
  let minRevenue = Math.min(...validRevenues.map(r => r.valor));
  let maxRevenue = Math.max(...validRevenues.map(r => r.valor));

  // Calculate the monthly average (ignoring days with no revenue)
  let totalRevenue = validRevenues.reduce((acc, r) => acc + r.valor, 0);
  let monthlyAverage = totalRevenue / validRevenues.length;

  // Count the days with revenue higher than the average
  let daysAboveAverage = validRevenues.filter(r => r.valor > monthlyAverage).length;

  return `Minimum revenue: ${minRevenue}\nMaximum revenue: ${maxRevenue}\nNumber of days with revenue above the average: ${daysAboveAverage}`;
}

// Lê o arquivo dados.json
fs.readFile('dados.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  // Converte o conteúdo do arquivo para um array de DailyRevenue
  const revenues: DailyRevenue[] = JSON.parse(data);

  // Usa a função calculateRevenue com os dados lidos
  const result = calculateRevenue(revenues);
  console.log(result);
});