
$(document).ready(function() {
  $('#userAilment').click(function() {
    const ailment = $('#ailment').val();
    $('#ailment').val("");

    fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${ailment}&location=45.523064%2C%20-122.676483%2C100&user_location=45.523064%2C%20-122.676483&skip=0&limit=10&user_key=${process.env.API_KEY}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      });

      const getElements = function(response) {
        $('#firstName').text(`First Name ${response.data[0].profile.first_name}`);
        $('#lastName').text(`Last Name ${response.data[0].profile.last_name}`);
        $('#street').text(`Address line 1 ${response.data[0].practices[0].visit_address.street}`);
        $('#street2').text(`Address line 2 ${response.data[0].practices[0].visit_address.street2}`);
        $('#webLink').text(`Website ${response.data[0].practices[0].website}`);
        $('#acceptingPatients').text(`Accepting patients? ${response.data[0].practices[0].accepts_new_patients}`);
      }

    });
  });
