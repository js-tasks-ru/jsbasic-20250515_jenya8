function getMinMax(str) {
  const min = Math.min(...str.split(' ').filter((item) => !isNaN(item)).map((item) => Number(item)));
  const max = Math.max(...str.split(' ').filter((item) => !isNaN(item)).map((item) => Number(item)));

  return {
    min,
    max
  };

}
