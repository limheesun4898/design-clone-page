import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TypeIt from "typeit-react";
import MainBg from "../assets/images/main_bg.png";
import "./introduction.css";

function Introduction() {
  const [instanceTest, setInstanceTest] = useState(null);

  useEffect(() => {
    if (instanceTest) {
      console.log(instanceTest.is("completed"));
    }
  }, [instanceTest]);

  return (
    <div className="intro-wrapper">
      <img className="main-bg" src={MainBg} alt="main_bg" />
      <div className="intro-text-wrapper">
        <TypeIt
          options={{
            strings: [
              "> Title: DECOMPRESSED PRISM",
              "> Author: SALVATORE VITALE",
              // "> Orbit_E, MBAL – Musée des Beaux Arts Le Locle",
              // "> Curators: Nathalie Herschdorfer and Severine Cattin",
              // "> Digital Creative and Art direction: Panama Papers Office",
              // "> Programming & Development: Laura Piccolo",
              // "> Online: 2022 05 20 - 2022 09 25",
            ],
            speed: 5,
            cursor: false,
          }}
          getAfterInit={(instance) => {
            setInstanceTest(instance);
            return instance;
          }}
        />
        {/* <div className="intro-text-box">
            <div>[2022-07-09]</div>
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
          </div> */}
        {/* <div className="intro-text-box">
            <div>[2022-07-09]</div>
            <div>
              &gt; Description:
              <p />
              Decompressed Prism is a new step in Salvatore Vitale&apos;s
              artistic reflection on technology. The artist continues the
              experimental approach of this installation, initially conceived in
              a physical space at Fondazione Modena Arti Visive in Modena, by
              investing the Orbit_e, the digital exhibition space that the MBAL
              launched in 2022. Here he created an original and interactive work
              that echoes the initial installation.
              <p />
              In the digital space, Decompressed Prism takes the form of a
              non-linear narrative situated at the crossroads of philosophy and
              technology, in which the artist endeavours to fragment and then
              reassemble the initial storyline into several chapters. Conceived
              as an experience for the visitor, the work evolves in a playful
              space and touches on subjects of reflection important to the
              artist, such as control and power dynamics, empathy, social
              realism, space and body. Divided into four parts, each offering in
              a distinct digital space, a specific theme and an interactive
              experience of its own, Salvatore Vitale&apos;s work combines
              fictional and documentary elements, video archives, text, sound
              designs and real data.
              <p />
              Decompressed Prism reveals the paradoxes behind the systemic logic
              of ubiquitous surveillance through automated security tools.
              Exploring different uses of control technologies in Poland,
              Slovakia, Switzerland and Italy, the artist questions how these
              technologies shape our relationship to the world and to ourselves
              as human beings. Indeed, Salvatore Vitale explores the notion of
              the body evolving between digitalisation and reality, and the
              transformation of the latter into a product controlled by
              technology. Drawing on contemporary philosophical and sociological
              texts, the artist imagines a different reality in which the
              visitor is invited to question the possibility of
              counter-narratives. The work also demonstrates the disturbing
              normalisation of security and rhizomatic surveillance, which
              should rather give rise to a sense of concern about its impact on
              human behaviour.
              <p />
              Born in Palermo, Italy, Salvatore Vitale (1986) lives and works in
              Zurich. For several years, he has been interested in the
              development and complexity of modern societies. As a visual
              artist, editor and teacher, his work includes multiple forms of
              expression: from photography to video, to writing and exhibition
              design. He is an award-winning artist, lecturer in the Transmedia
              Storytelling programme at the Lucerne University of Applied
              Sciences and Arts, and co-founder of the international magazine
              YET. His work is regularly exhibited in Switzerland and abroad,
              including Holland, Germany, China, Slovenia and Japan.
            </div>
          </div> */}
        {/* </TypeIt> */}
        {/* <div className="intro-text-box">
          <div>[2022-07-09]</div> */}
        {/* <TypeIt
            options={{
              strings: [
                "> Title: DECOMPRESSED PRISM",
                "> Author: SALVATORE VITALE",
                "> Orbit_E, MBAL – Musée des Beaux Arts Le Locle",
                "> Curators: Nathalie Herschdorfer and Severine Cattin",
                "> Digital Creative and Art direction: Panama Papers Office",
                "> Programming & Development: Laura Piccolo",
                "> Online: 2022 05 20 - 2022 09 25",
              ],
              speed: 5,
              cursor: false,
            }}
          /> */}
        {/* <TypeIt
            options={{
              strings: [
                "> Title: DECOMPRESSED PRISM",
                "> Author: SALVATORE VITALE",
                "> Orbit_E, MBAL – Musée des Beaux Arts Le Locle",
                "> Curators: Nathalie Herschdorfer and Severine Cattin",
                "> Digital Creative and Art direction: Panama Papers Office",
                "> Programming & Development: Laura Piccolo",
                "> Online: 2022 05 20 - 2022 09 25",
              ],
              speed: 5,
              cursor: false,
            }}
            getBeforeInit={(instance) => {
              instance
                .type(
                  "하늘 위에 떠있는<br>별을 클릭해보세요.<br>하나하나의 소중한 사연이<br>담겨 있습니다.",
                  { speed: 5 }
                )
                .go();

              return instance;
            }}
            getAfterInit={(instance) => {
              instance.is();

              return instance;
            }}
          /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Introduction;
