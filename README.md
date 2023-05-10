# Lipa Na MPESA integration
This application demonstrates MPESA STK Push functionality that allows a Business to send an STK Push to a cutomer's Safaricom MPESA line. The Customer would then just need to input his MPESA PIN to authroize the trabsaction 
#### Technologies
1. React
2. Redux
3. MPESA Daraja API
4. NodeJS

#### Test
1. Clone Repository [here](https://github.com/ywalakamar/mpesa-web-integration.git)
2. Navigate to the `server` directory
3. Install dependencides:`npm install` or `yarn install`
4. Launch Server: `npm start`
5. Repeat the same for `client` repository
#### Endpoints
```POST: /payment```
```json
{
    "phone":"07XX XXX XXX", 
    "amount":100.00
}
```
#### Screenshots
[![form.png](https://i.postimg.cc/PqYc5vpm/form.png)](https://postimg.cc/VSs476F6)
