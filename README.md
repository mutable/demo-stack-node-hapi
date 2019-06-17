# app-launch-page

This is a boilerplate subscription repo meant to demonstrate microservices.

## Frontend
`service-www` is the frontend service with an api directly connected to `service-sendmail` and `service-subscribe`

## Backend
`service-sendmail` and service-subscribe are microservices that handle subscribing and email confirmation requests.

## Notes
`Fontend` and `Backend` APIs are hardcoded and this stack example operates without a `proxy-service` which would normally redirect the API requests from the front to the corresponding endpoint in the stack.
