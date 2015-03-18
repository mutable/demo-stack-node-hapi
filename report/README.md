Report Service (Keen.io)
===

- Apis
- Setup
- Config
- Resources
- Node Micro


APIs
---

### POST: /api/v1/add/subscriber/demo

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
  "result":"success"
}
```

Setup
---

If you do don't have a [Keen.io account](https://keen.io)


Look up [keen.io](https://www.npmjs.com/package/keen.io) npm info

projectId = is listed once you open your project
keys = click on show api keys on project page

Config
---

Go to the config tab and set it with this info 

```json

{
  "api": {
    "keenio": {
      "config": {
        "projectId": "xxxx",
        "writeKey" : "xxxx",
        "readKey": "xxx"
      }
    }
  }
}



```

Resources
---
- [Keen.io account](https://keen.io)
- [keen.io](https://www.npmjs.com/package/keen.io)
- [Node Micro](https://github.com/lsqio/node-micro)
- [Service Discovery and Config](https://github.com/lsqio/lsq)
- [LSQ.io Docs](https://github.com/lsqio/docs)


Node Mirco
---


