//css
import "../css/resume.css";

const Resume = () => (
  <div className="container mt-5 animate__animated animate__fadeIn animate__slower ">
    <p className=" ">Hi, I am</p>
    <h1 className="my-3 p-3 animate__delay-3s animate__animated animate__bounce ">
      Akbarjon Abdukarimov
    </h1>
    <p className="">
      I am a Full Stack Web Developer based in Tashkent, Uzbekistan and Business
      Information System student. I enjoy building internet apps whether
      websites or web applications or thing between them. Currently I am a
      full-time student and working as freelancer and gained much usefull
      experience from freelancing and studying projects.
    </p>
    <hr />
    <div className="d-flex flex-column flex-md-row">
      <p className="fs-3">EDUCATION:</p>
      <ul className="list-decoration-none">
        <li>
          <p className="fs-4">
            Westminster International University in Tashkent
          </p>
          Tashkent <br />
          -BC at Business Information System
          <hr />
        </li>
        <li>
          <p className="fs-4">Web Development Bootcamp by Colt Steele</p>
          Udemy <br />
          -Full Stack Web Developer
          <hr />
        </li>
      </ul>
    </div>
  </div>
);

export default Resume;
