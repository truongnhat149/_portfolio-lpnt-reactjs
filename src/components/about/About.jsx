import "./about.css";
import How from "../../img/How.jpg";
import AboutMe from '../../img/about.jpg'
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={AboutMe}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I never want to be limited, always explore and learn new things every day.
        </p>

        <p className="a-desc">
        </p>
        <div className="a-award">
          <img src={How} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Favorite sayings</h4>
            <p className="a-award-desc">
            Every man I meet is my superior in some way. In that, I learn of him
            </p>
            <i>How to win friends and influence people _ Dale Carnegie</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
