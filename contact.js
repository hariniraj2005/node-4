const express=require('express');
const path=require('path')
const rootDir=require('../util/path')
const router=express.Router();

router.get('/contactus', (req, res) => {
    res.sendFile(path.join(rootDir,'views','contacy-us.html'))
  });

  router.post('/contactus', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.redirect('/success');
    });
    app.get('/success', (req, res) => {
        res.send('Form successfully filled');
      });
      
 

    module.exports=router;