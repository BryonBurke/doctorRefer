export class ApiService {
async getDoctor(ailment) {
  try {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${ailment}&location=45.523064%2C%20-122.676483%2C100&user_location=45.523064%2C%20-122.676483&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
