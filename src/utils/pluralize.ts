const Pluralize = (amount: number, letter = 's'): string => {
  return amount <= 1 ? '' : letter;
};

export default Pluralize;
