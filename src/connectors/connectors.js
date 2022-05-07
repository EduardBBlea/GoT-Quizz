const URL = "http://localhost:3000/questions/";

export const loadQuestion = (id) => {
  let url = URL;
  if (id) {
    url = url + id;
  }
  return fetch(url).then((response) => {
    // throw Error('123123')

    return response.json();
  });
};
