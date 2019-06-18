Subscribe Service (Mailchimp)
===

- Apis
- Setup
- Config
- Resources
- Node Micro


APIs
---

### POST: /api/demo/subscribe

Payload:
```json
{
  "email" : "example@mail.com",
  "source": "web"
}
```

Response Success:
Http Code 200
```json
{
  "result": "Thanks for signing up! We'll keep you up to date."
}
```

Response Error:
Http Code 400
```json
{
  "result": "There was an error subscribing your email, please try again.",
  "error": true
}
```



Setup
---

If you do not have a [Mailchimp account](https://mailchimp.com)


Look up [mailchimp-api](https://www.npmjs.com/package/mailchimp-api) npm info

Once you login you can get the api key [here](https://us7.admin.mailchimp.com/account/api/)

To get the list id go to [lists](https://us7.admin.mailchimp.com/account/api/)
click on the arrow down \/
then click settings
on the bottom of the page you will see the the id for the list

Config
---

Go to the config tab and set it with this info

```json

{
  "api": {
    "mailchimp": {
      "token": "xxx",
      "lists": {
        "demo": "xxx",
      }
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
