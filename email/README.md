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
  "result":"sent thank you email to example@mail.com"
}
```

Response Error:
Http Code 422
```json
{
  "err":{error object}
  "result":"Problem with sending email"
}
```

Setup
---

If you do don't have a [sendgrid account](https://sendgrid.com)


Look up [Sendgrid-nodejs](https://github.com/sendgrid/sendgrid-nodejs#usage) npm info

apiUser = Login user to sendgrid
apiKey = Login password to sendgrid


Config
---

Go to the config tab and set it with this info 

```json

{
  "api": {
    "sendgrid": {
       "apiUser": "xxx", //Login user to sendgrid
       "apiKey": "xxx" //Login password to sendgrid
     }
  }
}


```

Resources
---
- [Sendgrid Account](https://sendgrid.com)
- [Sendgrid-nodejs](https://github.com/sendgrid/sendgrid-nodejs#usage)
- [Node Micro](https://github.com/lsqio/node-micro)
- [Service Discovery and Config](https://github.com/lsqio/lsq)
- [LSQ.io Docs](https://github.com/lsqio/docs)


Node Mirco
---


