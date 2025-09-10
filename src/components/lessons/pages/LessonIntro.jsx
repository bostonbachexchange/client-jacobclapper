import React, { useState } from "react";
import { Link } from "react-router-dom";

function LessonIntro() {
  const buttonStyle = {
    padding: "0px",
    margin: "0px",
    border: "1px solid transparent",
    backgroundColor: "#FFF",
  };

  // replaces direct document.getElementById manipulation
  const [done, setDone] = useState({});

  const buttonPress = (key) => {
    setDone((d) => ({ ...d, [key]: true }));
  };

  const itemClass = (key) => `listItemStyle${done[key] ? " text-success" : ""}`;

  return (
    <div className="containerStyle fade-in">
      <h1 className="headingStyle">
        How to Prepare for Your First Piano Lesson: Tips for Success
      </h1>
      <hr style={{ color: "black", fontSize: "5px" }} />

      <p className="paragraphStyle">
        So, you've decided to embark on a musical journey and have signed up for
        your first piano lesson. Congratulations! ...
      </p>

      <div className="text-center">
        <img
          className="lessonsPianoImage"
          src={require("../../../assets/images/hands-on-piano.png")}
          alt="hands on a piano"
          style={{ height: "380px" }}
        />
      </div>

      <h2 className="subheadingStyle">1. Acquire the Necessary Materials</h2>
      <p className="paragraphStyle">
        Find out from your instructor what materials you'll need for your
        lessons. Typically, you'll require the following:
      </p>

      <ul>
        <li className={itemClass("piano")}>
          <strong>Piano or Keyboard:</strong> Ensure you have access to a piano
          or keyboard for practice at home.&nbsp;
          {!done.piano && (
            <button
              style={buttonStyle}
              onClick={() => buttonPress("piano")}
              aria-label="mark piano as done"
            >
              ✅
            </button>
          )}
        </li>

        <li className={itemClass("sheetMusic")}>
          <strong>Sheet Music:</strong> Purchase or acquire the sheet music or{" "}
          <Link to="../books">method books</Link> recommended by your
          instructor.&nbsp;
          {!done.sheetMusic && (
            <button
              style={buttonStyle}
              onClick={() => buttonPress("sheetMusic")}
              aria-label="mark sheet music as done"
            >
              ✅
            </button>
          )}
        </li>

        <li className={itemClass("metronome")}>
          <strong>Metronome:</strong> A metronome helps you maintain proper
          timing and rhythm while practicing.&nbsp;
          {!done.metronome && (
            <button
              style={buttonStyle}
              onClick={() => buttonPress("metronome")}
              aria-label="mark metronome as done"
            >
              ✅
            </button>
          )}
        </li>

        <li className={itemClass("notebook")}>
          <strong>Notebook:</strong> Keep a notebook for taking notes, jotting
          down practice assignments, and tracking your progress.&nbsp;
          {!done.notebook && (
            <button
              style={buttonStyle}
              onClick={() => buttonPress("notebook")}
              aria-label="mark notebook as done"
            >
              ✅
            </button>
          )}
        </li>
      </ul>

      <h2 className="subheadingStyle">2. Prepare Your Practice Space</h2>
      <p className="paragraphStyle">
        Set up a designated practice area at home where you can focus on your
        piano playing. Ensure good lighting and a comfortable chair. Make sure
        your piano or keyboard is properly positioned at the right height.
      </p>

      <h2 className="subheadingStyle">3. Set Realistic 🥅 Goals </h2>
      <p className="paragraphStyle">
        Discuss your goals and expectations with your instructor during your
        first lesson. Whether you want to play classical compositions, pop
        songs, or simply improve your musical skills, setting clear and
        achievable goals will help you stay motivated.
      </p>

      <h2 className="subheadingStyle">4. Listen 🎧 to Piano Music</h2>
      <p className="paragraphStyle">
        Start listening to{" "}
        <a href="https://www.youtube.com/watch?v=_NuQZRwqIek" target="_blank">
          piano music
        </a>{" "}
        across different genres. This will not only inspire you but also help
        you develop an ear for the nuances of piano playing.
      </p>

      <h2 className="subheadingStyle">5. Prepare Questions ❓</h2>
      <p className="paragraphStyle">
        Don't hesitate to ask questions during your first lesson. Be curious and
        eager to learn. Your instructor is there to guide you, so seek
        clarification on anything you find challenging or confusing.
      </p>

      <h2 className="subheadingStyle">6. Arrive ⏱️ Early and Be Punctual ⏳</h2>
      <p className="paragraphStyle">
        On the day of your first lesson, arrive a little early to ensure you
        have time to settle in and get comfortable. Punctuality shows respect
        for your instructor's time and demonstrates your commitment to learning.
      </p>

      <h2 className="subheadingStyle">7. Stay Open-Minded and Patient ⛵️</h2>
      <p className="paragraphStyle">
        Learning to play the piano is a journey that requires time and effort.
        Be patient with yourself, and embrace the learning process with an open
        mind. Mistakes are a natural part of learning, so don't be discouraged
        by them. Instead, use them as opportunities to improve.
      </p>

      <h2 className="subheadingStyle ">Conclusion</h2>
      <p className="paragraphStyle ">
        Preparing for your first piano lesson is an exciting step toward
        achieving your musical aspirations. By gathering the necessary
        materials, and adopting a positive and patient mindset, you'll be well
        on your way to making beautiful music on the piano. Remember, the
        journey of learning is as valuable as the destination, so savor each
        moment and enjoy the process of becoming a pianist.
      </p>
    </div>
  );
}

export default LessonIntro;
