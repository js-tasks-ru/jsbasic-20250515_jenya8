function checkSpam(str) {
  const possibleValues = ['1xBet', 'XXX'];
  const isSpam = possibleValues.some((item) => str.toLowerCase().includes(item.toLowerCase()));

  return isSpam;
}
