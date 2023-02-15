import React from "react";

function Resume() {
  return (
    <section class="mb-5">
      <h1 className="resume">resume: Jeremy Koshy</h1>
      <hr></hr>
      <div class="row justify-content-center" id="resume">
        <div class="mt-5 pl-5 pr-5">
          Full stack developer
          <p class="mt-5">
            <a href="">
              <img src="" alt="Jeremys LinkedIn" />
            </a>
          </p>
          <p>
            Download my full resume{" "}
            <a
              href="https://github.com/jbkoshy/react-portfolio/raw/master/src/assets/Resume-Jeremy-Koshy.pdf"
              class="link"
            >
              resume
            </a>
            <br></br>
          </p>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div id="front-back">
          <h2>Front-end experience</h2>
          <p>HTML, CSS, JAVASCRIPT, jQuery, React.js, IndexedDB</p>
        </div>
        <div id="front-back" class="mt-5">
          <h2>Back-end experience</h2>
          <p>Node.js, Express.js, SQL, Sequelize, NoSQL, APIs</p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
