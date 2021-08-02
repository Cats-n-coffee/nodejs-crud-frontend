# NODEJS-CRUD-Frontend

This project is the frontend of the Nodejs-CRUD-app. It is an exercise and used to implement features/practices. The styles are only there to make things easier and faster to read. 

## User Authentication

The `auth-context.js` creates the context and exports it, as well as a `useAuth` hook to use the current user data elsewhere in the app.

The `useAuth` hook can be use to read the user authenticated or set the user after login or signup.

## Connection with backend

Axios is used to connect to backend API. Interceptors are set in `axios.js`, all the available routes are in `app-requests.js`.

## Portal

The portal allows the user to: add new invoices, look up invoices by date.
The `useFindInvoice` hook makes requests to the API when uploading the portal and searching specific invoices. The `Table` component gets updated with the result of this hook.
The `Table`, `InvoiceSearch` components and `useFindInvoice` hook all share props to keep track of user actions.<br>

Backend API is fetched to display invoices everytime the props `invoiceAction` changes, therefore it is used throughout the invoice components to fetch the API after changes.