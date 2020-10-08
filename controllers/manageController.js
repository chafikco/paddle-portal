const request = require('request')
const bodyParser = require('body-parser')

exports.showSubscriptionPlans = (req, res) => {
    console.log('called')
    let requestParameters = {
        subscription_id: '42504',
        vendor_id: '582',
        vendor_auth_code: 'afe1854c367a41dc7d33b530b64dcade71ac08015335462487',
    }

    request.post("https://sandbox-vendors.paddle.com/api/2.0/subscription/users", {form: requestParameters}, (err, res, req) => {
        if (err) {
            callback(err, null)
            return
        }
       
        response = JSON.parse(res.body).response
        console.log(response)
    })
    res.render("manage", { title: "Manage Subscription", response: response });
}

