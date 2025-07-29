import express from 'express';
const router =   express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({
        message: 'Contact Route'
    });
}); // '/' is the root route for contacts, req is request, res is response

export default router; //exporting the router to be used in server.js   
