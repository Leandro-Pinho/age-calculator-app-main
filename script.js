function monthLength(month, year) {
  return new Date(year, month, 0).getDate();
}

console.log(monthLength(2, 2025));
