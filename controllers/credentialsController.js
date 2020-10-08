exports.saveCredentials = (req, res, next) => {
  //get form data from login
  const data = req.body;

  //store the data in variable.env
  process.env.VENDOR_ID = data.vendor_id;
  process.env.AUTH_CODE = data.auth_code;
  process.env.SUB_ID = data.sub_id;
  res.redirect("/manage");
};
