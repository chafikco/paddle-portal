const request = require("request");
const bodyParser = require("body-parser");

//Show the plan cosen during login
exports.showPlan = (req, res) => {
  // TODO: If the authentication details in variables.env are null, then redirect to /login.

  let requestParameters = {
    url: "https://sandbox-vendors.paddle.com/api/2.0/subscription/users",
    method: "post",
    form: {
      subscription_id: process.env.SUB_ID,
      vendor_id: process.env.VENDOR_ID,
      vendor_auth_code: `${process.env.AUTH_CODE}`,
    },
  };

  request(requestParameters, function (error, response, data) {
    if (error) {
      callback(err, null);
      return;
    }
    let json = JSON.parse(data);
    res.render("manage", {
      title: "Manage Subscription",
      response: json.response[0],
    });
  });
};

//go to change area where update API can be called
exports.changePlan = (req, res) => {
  // TODO: If the authentication details in variables.env are null, then redirect to /login.

  let requestParameters = {
    url: "https://sandbox-vendors.paddle.com/api/2.0/subscription/plans",
    method: "post",
    form: {
      vendor_id: process.env.VENDOR_ID,
      vendor_auth_code: `${process.env.AUTH_CODE}`,
    },
  };
  request(requestParameters, function (error, response, data) {
    if (error) {
      callback(err, null);
      return;
    }
    let json = JSON.parse(data);
    res.render("change", {
      title: "Change Plan",
      responses: json.response,
      subscription_id: process.env.SUB_ID,
    });
  });
};

exports.updateQuantity = (req, res) => {
  // TODO: If the authentication details in variables.env are null, then redirect to /login.
  let quantity = req.params.quantity;

  let requestParameters = {
    url: "https://sandbox-vendors.paddle.com/api/2.0/subscription/users/update",
    method: "post",
    form: {
      vendor_id: process.env.VENDOR_ID,
      vendor_auth_code: `${process.env.AUTH_CODE}`,
      subscription_id: `${process.env.SUB_ID}`,
      quantity: quantity,
    },
  };
  request(requestParameters, function (error, response, data) {
    if (error) {
      callback(err, null);
      return;
    }
    let json = JSON.parse(data);
    res.render("success_quantity", {
      title: "Success",
      responses: json,
      quantity: quantity,
      subscription_id: process.env.SUB_ID,
    });
  });
};

exports.updatePlan = (req, res) => {
  // TODO: If the authentication details in variables.env are null, then redirect to /login.
  let plan = req.params.plan;

  let requestParameters = {
    url: "https://sandbox-vendors.paddle.com/api/2.0/subscription/users/update",
    method: "post",
    form: {
      vendor_id: process.env.VENDOR_ID,
      vendor_auth_code: `${process.env.AUTH_CODE}`,
      subscription_id: `${process.env.SUB_ID}`,
      plan_id: plan,
      quantity: 1,
    },
  };
  request(requestParameters, function (error, response, data) {
    if (error) {
      callback(err, null);
      return;
    }
    let json = JSON.parse(data);
    console.log(json);
    res.render("success_plan", {
      title: "Success",
      responses: json,
      plan: plan,
      subscription_id: process.env.SUB_ID,
    });
  });
};

exports.viewReceipts = (req, res) => {
  // TODO: If the authentication details in variables.env are null, then redirect to /login.
  console.log("view receipts function called");
  let requestParameters = {
    url: "https://sandbox-vendors.paddle.com/api/2.0/subscription/payments",
    method: "post",
    form: {
      vendor_id: process.env.VENDOR_ID,
      vendor_auth_code: `${process.env.AUTH_CODE}`,
      subscription_id: process.env.SUB_ID,
    },
  };
  request(requestParameters, function (error, response, data) {
    if (error) {
      callback(err, null);
      return;
    }
    let json = JSON.parse(data);
    res.render("receipts", {
      title: "Billing History",
      payments: json.response,
      subscription_id: process.env.SUB_ID,
    });
  });
};
