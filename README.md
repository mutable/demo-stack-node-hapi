Demo Subscription stack
===

This is a subscription app stack meant to demonstrate microservices without `proxy-service` and the subscription to our newsletter.

## Overview

This stack uses our prepared boilerplate services available in Mutable's public repos.

service-subscribe: [Repo](https://github.com/mutable/boilerplate-service-node-hapi)  
service-sendmail: [Repo](https://github.com/mutable/boilerplate-service-node-hapi)  
service-www service: [Repo](https://github.com/mutable/boilerplate-node-micro-express)  


Backend services are built using `Hapi`, `Joi`, `Swagger` and `SendGrid` for subscription, and confirmation email.

Install all the dependencies by navigating into each service and running the `npm install` command.

Run the services through the Mutable app or via Terminal.

In the browser navigate to the port that is assigned to service-www. ex:`http://localhost:1234`

## Frontend
`service-www` is the frontend service with an API directly connected to `service-sendmail` and `service-subscribe`

## Backend
`service-sendmail` and `service-subscribe` are microservices that handle subscribing and email confirmation requests.

## Notes
`Frontend` and `Backend` APIs are hardcoded and this stack example operates without a `proxy-service` which would normally redirect the API requests from the front to the corresponding endpoint in the stack.


APIs
---

### POST: /api/subscribe

### GET: /api/subscribe/thankyou

External Links
---

- [**Hapi**](https://hapijs.com/)
- [**Joi**](https://hapijs.com/tutorials/validation#joi)
- [**Swagger**](https://github.com/glennjones/hapi-swagger)
- [**SendGrid**](https://sendgrid.com/)
