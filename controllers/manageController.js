const request = require("request");
const bodyParser = require("body-parser");

exports.showSubscriptionPlans = (req, res) => {
  let requestParameters = {
    url: "https://sandbox-vendors.paddle.com/api/2.0/subscription/users",
    method: "post",
    form: {
      subscription_id: "42504",
      vendor_id: "582",
      vendor_auth_code: "afe1854c367a41dc7d33b530b64dcade71ac08015335462487",
    },
  };

  request(requestParameters, function (error, response, data) {
    if (error) {
      callback(err, null);
      return;
    }
    console.log(data);
    let json = JSON.parse(data);
    console.log(json.response[0]);
    res.render("manage", {
      title: "Manage Subscription",
      response: json.response[0],
    });
  });
};
