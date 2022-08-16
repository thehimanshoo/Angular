const express = require('express');
const router = express.Router();
const {body , validationResult} = require('express-validator');
const Event = require('../models/Event');
const authenticate = require('../middleware/authenticate');

/*
    USAGE : Get FREE Events
    URL : http://127.0.0.1:5000/events/free
    method : GET
		fields : no-fields
 */
router.get('/free', async (request, response) => {
  try {
    let events = await Event.find({type : 'FREE'});
    response.status(200).json(events);
  }
  catch (error) {
    console.error(error);
    response.status(500).json({
      errors : [
        {
          msg : error.message
        }
      ]
    });
  }
});

/*
    USAGE : Get PRO Events
    URL : http://127.0.0.1:5000/events/pro
    method : GET
		fields : no-fields
		Access : Private
 */
router.get('/pro', authenticate, async (request, response) => {
  try {
    let events = await Event.find({type : 'PRO'});
    response.status(200).json(events);
  }
  catch (error) {
    console.error(error);
    response.status(500).json({
      errors : [
        {
          msg : error.message
        }
      ]
    });
  }
});

/*
    USAGE : Upload Events
    URL : http://127.0.0.1:5000/events/upload
    method : POST
		fields : name , image , date , price , type , info
 */
router.post('/upload', [
  body('name').notEmpty().withMessage('Event Name is required'),
  body('image').notEmpty().withMessage('Image URL is required'),
  body('date').notEmpty().withMessage('Event Date is required'),
  body('type').notEmpty().withMessage('Event Type is required'),
  body('info').notEmpty().withMessage('Event Info is required'),
] , async (request, response) => {
  try {
      let errors = validationResult(request);
      if(!errors.isEmpty()){
        return response.status(401).json({
          errors : errors.array()
        });
      }
      let {name , image , date , type , info} = request.body;
      let price = (type === 'PRO') ? request.body.price : 0;
      console.log(`Form Data Received .......${JSON.stringify({name , image , date , price , type , info})}`);
      let event = new Event({name , image , date , price , type , info});
      event = await event.save(); // save to database
      response.status(200).json({
        result : 'Upload Success',
        event : event
      });
  }
  catch (error) {
    console.error(error);
    response.status(500).json({
      errors : [
        {
          msg : error.message
        }
      ]
    });
  }
});

module.exports = router;
