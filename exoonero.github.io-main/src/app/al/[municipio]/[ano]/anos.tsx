function generateAnos() {
  const startYear = 2000;
  const endYear = 2022;
  const anos = [];

  for (let year = startYear; year <= endYear; year++) {
    anos.push({ ano: year.toString() });
  }

  return anos;
}

export const anoSelect = generateAnos();
