import React from "react";

function About() {
  return (
    <section className="title">
      <h1 class="name">About: Jeremy Koshy</h1>
      <hr></hr>

      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img class="mb-5" src="" alt="Jeremy Koshy" />
          <p>I'm Jeremy Koshy and I am a future web-developer.</p>
          <p>
            I like to play basketball and listen to music, especialy rap, r&b,
            and afro-beat.
          </p>
          <p>I went to UH and got my degree in BS: Kinesiology.</p>
          <p>
            After giving it some thought, I decided to follow in my sister's
            footsteps and join UT's full-stack bootcamp.
          </p>
          <p>
            Although it's nearly the end of this bootcamp, I have enjoyed just
            the opportunity to learn something I had no knowledge of prior to
            the bootcamp.
          </p>
          <p>
            View fill{" "}
            <a href="#/resume" class="link">
              resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
