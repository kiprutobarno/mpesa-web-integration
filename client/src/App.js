import { useState } from "react";
import axios from "axios";
import styles from "./App.module.css";
const App = () => {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();

  const payHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:8000/payment", {
        phone,
        amount,
      });
      console.log(data);
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

export default App;
