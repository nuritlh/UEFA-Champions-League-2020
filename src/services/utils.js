export const compareByName = (a, b) => {
  const bandA = a.name.toUpperCase();
  const bandB = b.name.toUpperCase();
  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
};
