import React from "react";
import TypeIt from "typeit-react";
import moment from "moment";

const TypingText = function () {
  const todayFormat = moment().format("YYYY-MM-DD");

  return (
    <TypeIt
      options={{
        speed: 1,
        cursor: false,
      }}
    >
      <div className="intro-text-box">
        <div>[{todayFormat}]</div>
        <div>
          &gt; Title: DECOMPRESSED PRISM
          <br />
          &gt; Author: SALVATORE VITALE
          <br />
          &gt; Orbit_E, MBAL – Musée des Beaux Arts Le Locle
          <br />
          &gt; Curators: Nathalie Herschdorfer and Severine Cattin
          <br />
          &gt; Digital Creative and Art direction: Panama Papers Office
          <br />
          &gt; Programming & Development: Laura Piccolo
          <br />
          &gt; Online: 2022 05 20 - 2022 09 25
        </div>
      </div>
      <div className="intro-text-box">
        <div>[{todayFormat}]</div>
        <div>
          &gt; Description:
          <p />
          Decompressed Prism is a new step in Salvatore Vitale&apos;s artistic
          reflection on technology. The artist continues the experimental
          approach of this installation, initially conceived in a physical space
          at Fondazione Modena Arti Visive in Modena, by investing the Orbit_e,
          the digital exhibition space that the MBAL launched in 2022. Here he
          created an original and interactive work that echoes the initial
          installation.
          <p />
          In the digital space, Decompressed Prism takes the form of a
          non-linear narrative situated at the crossroads of philosophy and
          technology, in which the artist endeavours to fragment and then
          reassemble the initial storyline into several chapters. Conceived as
          an experience for the visitor, the work evolves in a playful space and
          touches on subjects of reflection important to the artist, such as
          control and power dynamics, empathy, social realism, space and body.
          Divided into four parts, each offering in a distinct digital space, a
          specific theme and an interactive experience of its own, Salvatore
          Vitale&apos;s work combines fictional and documentary elements, video
          archives, text, sound designs and real data.
        </div>
      </div>
    </TypeIt>
  );
};

export default TypingText;
