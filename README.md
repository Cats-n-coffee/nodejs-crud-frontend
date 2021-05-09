# NODEJS-CRUD-Frontend

This project is the frontend of the Nodejs-CRUD-app.

## User Authentication

The auth-context.js creates the context and exports it, as well as a useAuth hook to use the auth value else where in the app.

The useAuth hook can be use to read the user authenticated or set the user.

## Connection with backend

Axios is used to connect to backend api. Interceptors are set in axios.js, all the available routes are in app-requests.js .

## Portal

The portal allows the user to: add new invoices, look up invoices by date.
The useFindInvoice hook makes requests to the api when uploading the portal and searching specific invoices. The Table component get updated with the result of this hook.
The Table, InvoiceSearch components and useFindInvoice hook share props to keep track of user actions.