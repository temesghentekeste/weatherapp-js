import roundToTwo from './round_to_two';

const getTemperature = (temp, min, max, scale) => {
  temp = parseFloat(temp);
  min = parseFloat(min);
  max = parseFloat(max);

  let result = {};
  if (scale === 'F') {
    temp = (temp * 9) / 5 + 32;
    min = (min * 9) / 5 + 32;
    max = (max * 9) / 5 + 32;
  } else {
    temp = ((temp - 32) * 5) / 9;
    min = ((min - 32) * 5) / 9;
    max = ((max - 32) * 5) / 9;
  }

  temp = roundToTwo(temp);
  min = roundToTwo(min);
  max = roundToTwo(max);
  
  result = {
    temp,
    min,
    max,
  };

  return result;
};

export default getTemperature;
