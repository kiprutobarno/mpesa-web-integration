# Lipa Na Mpesa Integration
This application demonstrates MPESA STK Push functionality that allows a Business to send an STK Push to a cutomer's Safaricom MPESA line to fullfill a payment request. The customer would then just need to input his/her MPESA PIN to authorize and complete the payment transaction 
#### Technologies
1. React
2. Redux
3. MPESA Daraja API
4. NodeJS

#### Test
1. Clone Repository [here](https://github.com/ywalakamar/mpesa-web-integration.git)
2. Navigate to the `server` directory: `cd server`
3. Install dependencides:`npm install` or `yarn install`
4. Launch Server: `npm start`
5. Navigate to `client` directory: `cd client`
6. Install dependencies:`npm install` or `yarn install`
7. Launch client application: `npm start`
#### Endpoints
```POST: /payment```
```js
{
    "phone":"07XX XXX XXX", 
    "amount":100.00
}
```
#### Screenshots
[![form.png](https://i.postimg.cc/PqYc5vpm/form.png)](https://postimg.cc/VSs476F6)
