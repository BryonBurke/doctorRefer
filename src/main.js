import { ApiService } from './../src/api-service.js';

$(document).ready(function() {
  $('#userAilment').click(function() {
    const  ailment = $('#ailment').val();
    $('#ailment').val("");
    (async () => {
      let apiService = new ApiService();
      const response = await apiService.getDoctor(ailment);
      getElements(response);
    })();
    function getElements(response) {
      for (var i = 0; i < 10; i++) {
        document.write(`First Name ${response.data[i].profile.first_name}`+ "<br>");
        document.write(`Last Name ${response.data[i].profile.last_name}`+ "<br>");
        document.write(`Address line 1 ${response.data[i].practices[0].visit_address.street}` + "<br>");
        document.write(`Address line 2 ${response.data[i].practices[0].visit_address.street2}`+ "<br>");
        document.write(`Website ${response.data[i].practices[0].website}`+ "<br>");
        document.write(`Accepting patients? ${response.data[i].practices[0].accepts_new_patients}`+ "<br>" + "<br>" + "<br>");
      }
    }
  });
});














































// $(document).ready(function() {
//   $('#userAilment').click(function() {
//     const ailment = $('#ailment').val();
//     $('#ailment').val("");
//
//     fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${ailment}&location=45.523064%2C%20-122.676483%2C100&user_location=45.523064%2C%20-122.676483&skip=0&limit=10&user_key=${process.env.API_KEY}`)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(jsonifiedResponse) {
//         getElements(jsonifiedResponse);
//       });
//
//
//       for (var i = 0; i < 5; i++) {
//
//         var getElements = function(response) {
//           $('#firstName').text(`First Name ${response.data[i].profile.first_name}`);
//           $('#lastName').text(`Last Name ${response.data[i].profile.last_name}`);
//           $('#street').text(`Address line 1 ${response.data[i].practices[0].visit_address.street}`);
//           $('#street2').text(`Address line 2 ${response.data[i].practices[0].visit_address.street2}`);
//           $('#webLink').text(`Website ${response.data[i].practices[0].website}`);
//           $('#acceptingPatients').text(`Accepting patients? ${response.data[i].practices[0].accepts_new_patients}`);
//         }
//
//       }
//
//
//     });
//   });
