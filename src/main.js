// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { ApiFetch } from './js/apiFetch.js';


// USER INTERFACE
$(document).ready(function(){
  $('#getDoctor').click(() => {
    apiFetch.getDoctor().then((docter) => {
      $('.doctorOutput').text(docter);

    });
  });

  const apiFetch = new ApiFetch();


});
