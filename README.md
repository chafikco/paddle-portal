# paddle-portal
A paddle hosted customer portal


## Requirements v1
* Handle seller credentials to enable the customer portal
* Pass customer subscription ID to handle the buyers subscription
* Pull in all subscriptions for downgrade / upgrade
* View receipts and billing history
* View / change billing details
  * Handle via list users API
* Customer must be aware that billing is being handled by Paddle
* Customise colour scheme
* Update subscriptions, including upgrading and downgrading their subscriptions
  * Validate against api limitations - check api docs
* Cancel subscriptions, immediately or at the end of a billing period
* Pause subscriptions
* Self-serve quantity adjustment
* Update payment methods like adding and removing cards
* Authenticate via form


## Requirements v2
* Localized versions of the portal are automatically displayed to customers based on their browser settings. The supported languages include English, French, German, Italian, Japanese, Simplified Chinese, and Spanish.
* Updating subscriptions with multiple quantities, multiple products, tiered pricing, and metered billing
* Provide embeddable iframe support for use in seller log in area
* Blacklist / whitelist subscriptions plans
* Access via authenticated link in email & webhook
* Separate OAuth system that cross references email on file with email of signup, then auto authenticates and generates unique URL and offers list of subscription ID’s to manage

Resources:

https://stripe.com/docs/billing/subscriptions/integrating-customer-portal
https://billing.stripe.com/session/d0vdciNQ9KglEIbhHkxColda6g5xiXF6
