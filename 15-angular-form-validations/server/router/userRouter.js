const express = require('express');
const router = express.Router();

/*
  URL : http://127.0.0.1:5000/user/enroll
  Usage : Enrollment
  Method : POST
  Fields : username , email , password , course
 */
router.post('/enroll' , (request , response) => {
  let enrollment = request.body;
  console.log(enrollment);
  response.status(200).json({
    msg : 'Enrollment is Success'
  });
});

/*
  URL : http://127.0.0.1:5000/user/register
  Usage : Registration
  Method : POST
  Fields : username , email , password , course
 */
router.post('/register' , (request , response) => {
  let registrationData = request.body;
  console.log(registrationData);
  response.status(200).json({
    msg : 'Registration is Success'
  });
});

module.exports = router;
