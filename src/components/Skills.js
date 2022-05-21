import "../css/Skills.css";
const Skills = () => (
  <div className="container animate__animated animate__fadeIn animate__slower mt-4 d-flex flex-column justify-content-start projects ">
    <p className="fs-2">Skills</p>
    <div className="d-flex flex-wrap justify-content-evenly align-items-center">
      <div className=" animate__bounce mx-sm-3 my-1 animate__animated animate__delay-3s">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
          alt=""
        />
      </div>
      <div className=" animate__bounce mx-sm-3 my-1">
        <img
          src="https://cdn-icons-png.flaticon.com/128/919/919825.png"
          alt=""
        />
      </div>
      <div className="animate__animated animate__delay-1s animate__bounce mx-sm-3 my-1">
        <img
          className=""
          src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
          alt=""
        />
      </div>
      <div className=" mx-sm-3 my-1">
        <img
          className=""
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld"
          alt=""
        />
      </div>
      <div className="animate__animated animate__delay-5s animate__bounce mx-sm-3 my-1">
        <img
          className=""
          src="https://expressjs.com/images/express-facebook-share.png"
          alt=""
        />
      </div>
    </div>
    <div className="d-flex flex-wrap justify-content-evenly align-items-center">
      <div className="animate__animated animate__delay-2s animate__bounce mx-sm-3 my-1">
        <img
          className=""
          src="https://cdn-icons-png.flaticon.com/128/6132/6132221.png"
          alt=""
        />
      </div>
      <div className=" mx-sm-3 my-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png"
          alt=""
        />
      </div>
      <div className="animate__animated animate__delay-4s animate__bounce mx-sm-3 my-1">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2306/2306022.png"
          alt=""
        />
      </div>
    </div>
  </div>
);
export default Skills;
