Email Service (Sendgrid)
===

- Apis
- Setup
- Config
- Resources
- Node Micro


APIs
---

### POST: /subscribe/thankyou

Payload:

```json
{
  "email" : "example@mail.com"
}
```

Response Success:
Http Code 200

```json
{
  "result": "Sent thank you email to example@mail.com"
}
```

Response Error:
Http Code 422

```json
{
  "result": "Problem with sending email",
  "err": "error object"
}
```

Setup
---

If you do don't have a [Sendgrid account](https://sendgrid.com)


Look up [Sendgrid-nodejs](https://github.com/sendgrid/sendgrid-nodejs#usage) npm info

apiKey = Sendgrid account API key


Config
---

Go to the config tab and set it with this info

```json
{
  "api": {
    "sendgrid": {
       "apiKey": "xxx" // Sendgrid API key
     }
  }
}
```

Resources
---
- [Sendgrid Account](https://sendgrid.com)
- [Sendgrid-nodejs](https://github.com/sendgrid/sendgrid-nodejs#usage)
- [Node Micro](https://github.com/mutable/node-micro)
- [Service Discovery and Config](https://github.com/mutable/app-launch-page)
- [Mutable.io Docs](https://github.com/mutable/Docs)
