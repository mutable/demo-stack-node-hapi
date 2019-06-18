www Service (Launch Page)
===

- Apis
- Setup
- Config
- Resources
- Node Micro


APIs
---
### GET: /

Give back the home page

### POST: /api/subscribe

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
Missing Email or Source
Http Code 409
```json
{
 "result": "Please make sure your email has been entered correctly.",
 "error":true
}
```

Setup
---
no need

Config
---
no need

Resources
---
- [Node Micro](https://github.com/mutable/node-micro)
- [Service Discovery and Config](https://github.com/mutable/app-launch-page)
- [mutable.io Docs](https://github.com/mutable/Docs)
