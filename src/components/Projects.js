import "../css/Projects.css";
import roomImg from "../imgs/room.png";
import yelpcampImg from "../imgs/yelpcamp.png";
const Projects = () => (
  <div className="container projects animate__animated animate__fadeIn animate__slower ">
    <p className="fs-2">Projects</p>
    <div className="d-flex justify-content-center flex-md-nowrap flex-wrap ">
      <div className="card animate__animated  animate__fadeInLeft animate__delay-1s ">
        <img src={yelpcampImg} className="card-img-top" alt="YelpCamp" />
        <div className="card-body">
          <h5 className="card-title text-white">YelpCamp</h5>
          <p className="card-text">
            Full Stack Web App built on top MEN technoligies
          </p>
        </div>

        <div className="card-body">
          <a
            href="https://github.com/AkbarjonAbdukarimov/YelpCamp"
            className="card-link"
          >
            Source Code
          </a>
          <a
            href="https://murmuring-hamlet-17779.herokuapp.com/"
            className="card-link"
          >
            Demo
          </a>
        </div>
      </div>
      <div className="card animate__animated  animate__fadeInRight animate__delay-1s">
        <img src={roomImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Room</h5>
          <p className="card-text">Landing page on plane HTML & CSS</p>
        </div>
        <div className="card-body">
          <a href="https://github.com/00009271/Room" className="card-link">
            Source Code
          </a>
          <a
            href=" https://naughty-lichterman-802df8.netlify.app/"
            className="card-link"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
