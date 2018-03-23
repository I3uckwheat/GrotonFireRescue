const passport = require('passport');
const mongoose = require('mongoose');

const Admin = mongoose.model('Admin');

exports.login = passport.authenticate('local', {
  failureRedirect: '/admin',
  failureFlash: 'Invalid email address or password',
  successRedirect: '/admin/panel',
  successFlash: 'You are now logged in',
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'You are now logged out');
  res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('You must be logged in to do that');
  res.redirect('/admin');
};

exports.isSuperAdmin = (req, res, next) => {
  Admin.findOne({ email: req.user.email })
    .then((admin) => {
      if (admin.isSuperAdmin) return next();
      req.flash('You must be a super Admin to do that');
      return res.redirect('/admin/panel');
    })
    .catch(next);
};
