import githubImg from "../imgs/github.png";
import "../css/Contacts.css";
const Contacts = () => (
  <div className="container animate__animated animate__fadeIn animate__slower  projects">
    <p className="fs-2">Contacts</p>
    <div className="d-flex justify-content-start contacts flex-column">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1782/1782751.png"
          alt="email icon"
        />
        <p className="text-white m-2 ">akbarjonabdukarimov6865@gmail.com</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <a href="https://github.com/AkbarjonAbdukarimov">
          <img src={githubImg} alt="github icon" />
        </a>

        <p className="text-white m-3 ">AkbarjonAbdukarimov</p>
      </div>
    </div>
  </div>
);
export default Contacts;
