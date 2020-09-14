# Angular-Auth0-API

A very simple (bit messy) angular application that calls an API with JWT Token (modded from Auth0 tuts)

------------------------------------------------

## Sample 01 - Login

This sample app demonstrates how to log in, log out, and view profile information of the logged-in user. It uses [auth0-spa-js](https://github.com/auth0/auth0-spa-js).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2 (bit out of date now, but it's the same as angular 10+ for this purpose).

## Configuration

The sample needs to be configured with your Auth0 domain and client ID in order to work. Open the file `auth_config.json` and replace the values with those from your Auth0 tenant:

```json
{
  "domain": "<YOUR AUTH0 DOMAIN - <your tenancy>.<eu?>.auth0.com>",
  "clientId": "<YOUR AUTH0 CLIENT ID - a random jumble of alphanumerics>",
  "audience": "<your auth0 api name - https://mycompany.com:4200/api>"
}
```

## Configuration 2

Update `src\app\api-caller.service.ts` with the protected URL you want to access.

## Running

Use `ng serve` to run.
