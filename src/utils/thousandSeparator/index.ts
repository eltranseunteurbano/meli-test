const thousanSeparator = (value: number, separator = ".") => {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export default thousanSeparator;
