const Contact = require('../models/contact')

exports.getAllContacts = (req,res,next) =>{
    Contact.find.then(
        (contacts) => {
          res.status(200).json(contacts);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
};
exports.getOneContacts = (req, res, next) => {
    Contact.findOne({
      _id: req.params.id
    }).then(
      (thing) => {
        res.status(200).json(thing);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
    }
exports.deleteContacts = (req, res, next) => {
    Contact.deleteOne({_id: req.params._id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.modifyContact = (req, res, next) => {
const contact = new Contact({
    _id: req.params.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    imageUrl: req.body.photo,
    email: req.body.email,
    profession: req.body.profession,
    birthday: req.body.birthday
});
Contact.updateOne({_id: req.params.id}, contact).then(
    () => {
    res.status(201).json({
        message: 'Thing updated successfully!'
    });
    }
).catch(
    (error) => {
    res.status(400).json({
        error: error
    });
    }
);
};
  


exports.createContact = (req, res, next) => {
    const contact = new Contact({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      profession: req.body.profession,
      birthday: req.body.birthday
    });
    contact.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };




