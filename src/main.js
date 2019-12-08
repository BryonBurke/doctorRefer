import { ApiService } from './../src/api-service.js';
import $ from 'jquery';


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

      if (response.data.length === '0') {
        $("ul").append('Sorry, no Doctors match your search');
      }else {
        for (var i = 0; i < (response.data.length); i++) {
          let firstName =            response.data[i].profile.first_name;
          let lastName =             response.data[i].profile.last_name;
          let addressLine1 =         response.data[i].practices[0].visit_address.street;
          let addressLine2 =         response.data[i].practices[0].visit_address.street2;
          let webSite =              response.data[i].practices[0].website;
          let acceptingNewPatients = response.data[i].practices[0].accepts_new_patients;
          $("ul").append(`First Name: ${firstName}`);
          $("ul").append(`Last Name: ${lastName}`);
          $("ul").append(`Address line 1: ${addressLine1}`);
          if (addressLine2 === "undefined") {
            $("ul").append("Address line2: none listed");
          }
          else {
            $("ul").append(`Address line 2: ${addressLine2}`);
          }
          if (website === "undefined") {
            $("ul").append("Website: no website listed");
          }
          else {
            $("ul").append(`Website: ${website}`);
          }
          if (acceptingNewPatients === "true") {
            $("ul").append('Accepting patients?: Yes' + "<br>" + "<br>" + "<br>");
          }
          else if (acceptingNewPatients === "false") {
            $("ul").append('Accepting patients?: No' + "<br>" + "<br>" + "<br>");
          }
          else {
            $("ul").append('Accepting patients?:  Unknown' + "<br>" + "<br>" + "<br>");
          }
        }
      }
    }

    $('#doctorName').click(function() {
      const  doctor = $('#userDoctorName').val();
      $('#userDoctorName').val("");
      (async () => {
        let apiService = new ApiService();
        const response = await apiService.getDoctorName(userDoctorName);
        getDoctorName(response);
      })();

      function getDoctorName(response) {
        let firstName = response.data[0].profile.first_name;
        let lastName =  response.data[0].profile.last_name;
        if (firstName === "undefined") {
          $("ul").append('Sorry, that Doctor not found' + "<br>" + "<br>" + "<br>")
        }else {
          $("ul").append("Doctor Found");
          $("ul").append(`First Name: ${firstName}`);
          $("ul").append(`Last Name: ${lastName}<br><br>`);
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
