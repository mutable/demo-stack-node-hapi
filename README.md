Demo Supscribtion stack
===

This is a boilerplate subscription stack meant to demonstrate microservices without `proxy-service` and the subscription to our newsletter.

## Usage
Install all the dependencies by navigating into each service and running the `npm install` command.

Run the services through the Mutable app or via Terminal.

In the browser naviaget to the port that listens to service-www. `localhost:${port}`

## Frontend
`service-www` is the frontend service with an api directly connected to `service-sendmail` and `service-subscribe`

## Backend
`service-sendmail` and `service-subscribe` are microservices that handle subscribing and email confirmation requests.

## Notes
`Fontend` and `Backend` APIs are hardcoded and this stack example operates without a `proxy-service` which would normally redirect the API requests from the front to the corresponding endpoint in the stack.


APIs
---

### POST: /api/v1/demo/subscribe

### GET: /api/v1/subscribe/thankyou

