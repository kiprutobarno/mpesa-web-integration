import { useState } from "react";
import { useMakePaymentMutation } from "../api/apiSlice";
import styles from "../../App.module.css";

const Pay = () => {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();
  const [makePayment] = useMakePaymentMutation();

  const payHandler = async (event) => {
    event.preventDefault();
    try {
      makePayment({ phone, amount });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.wrapper}>
      <h1>Lipa Na MPESA</h1>
      <form onSubmit={(e) => payHandler(e)}>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
        />
        <input
          type="number"
          id="amount"
          name="mobile"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input type="submit" value="Pay" />
      </form>
    </div>
  );
};

export default Pay;
