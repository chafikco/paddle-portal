const request = require('request')
const bodyParser = require('body-parser')

exports.manageSubscription = (req, res) => {
    res.render("manage", { title: "Manage Subscription" });
  };

exports.showSubscriptionPlans = (req, res) => {
    let requestParameters = {
        subscription_id: '12345',
        vendor_id: '12345',
        vendor_auth_code: '12345',
    }

    request.post("https://sandbox-vendors.paddle.com/api/2.0/subscription/users", {form: requestParameters}, (err, res, req) => {
        if (err) {
            callback(err, null)
            return
        }

        callback(null, JSON.parse(body).response)
    })
}

