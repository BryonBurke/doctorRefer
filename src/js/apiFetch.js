export class ApiFetch {
  constructor() {

  }



  getDoctor() {
    const ailment = "cancer";
    this.calls++;
    return fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=cancer&location=45.523064%2C%20-122.676483%2C100&user_location=45.523064%2C%20-122.676483&skip=0&limit=10&user_key=${process.env.API_KEY}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json.data[0].practices[0].name;
    });
  }
}

//
// getGif(searchTerm) {
//   return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${process.env.API_KEY}&s=${searchTerm}`)
//     .then((response)=> {
// 65e78e35f3547881dfd6ad5415c92537
