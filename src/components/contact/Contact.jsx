import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's go</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +84 862 955 026
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              nhatruong.lephung@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              84 Khuc Thua Du, Hue, Viet Nam
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>ACTION!!!</b> A journey of a thousand miles begins with an action
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="LE PHUNG NHAT TRUONG"  />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder=""  />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email"  />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message"  />
            <button>Submit</button>
            {done && "..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
