import axios from 'axios';

const endpoint = 'https://api.openweathermap.org/data/2.5/weather?zip=38804&appid=13253bfe55f4e3ae6e77a558891d513d';

const getWeatherByZipCode = async () => {
  const zipCall = await axios.get(endpoint);
  return zipCall.data;
};

// NEEDS USER ID AND THE WHOLE GETTING THE RIGHT LOCATION BY ID BY WHAT THEY SEARCH TO ADD
// ALSO ENDPOINT IS WRONG - NEEDS TO BE FIREBASE
// GOING TO BE USING THIS TO HAVE THEIR LOCATION BE SAVED/POSTED TO FIREBASE BY UID
const addLocationToUser = async () => {
  const userAddedLocation = await axios.post(endpoint);
  return userAddedLocation.data;
};

export { getWeatherByZipCode, addLocationToUser };
