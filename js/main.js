function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    return('Задайте корректные данные');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber();
