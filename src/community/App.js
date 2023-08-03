import logo from './logo.svg';
import './App.css';
import example from "./team.jpg";
import example2 from "./net.jpg"
import example3 from "./conference.jpg";

function App() {
  return (
    <div>
       {/* Banner */}
      {/* <img src="conference.jpg" className="banner" alt="banner" /> */}
      <div className="banner">
        <div></div>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        {/* Left Section */}
        <div className="left">
          <div className="leftContainer">
            <div className="title">
              <span>What is IEEE?</span>
            </div>
            <div className="image">
              <img src={example} alt="img" />
            </div>
            <div className="about">
              <p>
                IEEE, an organization dedicated to advancing innovation and technological excellence
                for the benefit of humanity, is the world's largest technical professional society.
                It is designed to serve professionals involved in all aspects of the electrical,
                electronic, and computing fields and related areas of science and technology that
                underlie modern civilization.
              </p>
              <p>
                IEEE's roots go back to 1884 when electricity began to become a major influence in
                society. There was one major established electrical industry, the telegraph, which
                since the 1840s had come to connect the world with a data communications system
                faster than the speed of transportation. The telephone and electric power and light
                industries had just gotten underway.
              </p>
            </div>
            <div className="image">
              <img src={example2} alt="img" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right">
          {/* First Right Container */}
          <div className="rightContainer">
            <div className="title">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div className="lower">
              <div className="picture">
                <div>
                  <img className="image2" src={example3} alt="img" />
                </div>
                <div>
                  <button className="button">Apply Now</button>
                </div>
                <div>
                  <button className="button">Apply Now</button>
                </div>
              </div>
              <div className="pictureAbout">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>
            </div>
          </div>

          {/* Second Right Container */}
          <div className="rightContainer">
            <div className="title">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div className="lower">
              <div className="picture">
                <div>
                  <img  className="image2" src={example3} alt="img" />
                </div>
                <div>
                  <button className="button">Apply Now</button>
                </div>
                <div>
                  <button className="button">Apply Now</button>
                </div>
              </div>
              <div className="pictureAbout">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
