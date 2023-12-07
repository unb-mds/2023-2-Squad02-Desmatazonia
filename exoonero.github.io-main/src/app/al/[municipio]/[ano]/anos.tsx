function generateAnos() {
  const currentYear = new Date().getFullYear();
  const anos = [];
  for (let year = 2000; year <= currentYear; year++) {
    anos.push({ ano: year.toString() });
  }
  return anos;
}

export const anoSelect = generateAnos();