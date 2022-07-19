import React from "react";
import TypeIt from "typeit-react";
import moment from "moment";

const TypingText = function () {
  const todayFormat = moment().format("YYYY-MM-DD");

  return (
    <TypeIt
      options={{
        speed: 5,
        cursor: false,
      }}
    >
      <div className="intro-text-box">
        <div>[{todayFormat}]</div>
        <div>
          &gt; Korea has a beautiful nature and a wealth of priceless cultural
          heritage as befits its five thousand year history and traditional
          culture.
          <p />
          &gt; Korea’s cultural heritage includes tangible and intangible
          cultural heritage, monuments and folklore cultural materials of
          historic, artistic, academic and scenic value as national, ethnic or
          world heritage formulated artificially or naturally.
          <p />
          &gt; Throughout the years, Korea has cultivated its own unique
          cultural heritage in which the emotions and culture of its people are
          ingrained.
          <p />
          &gt; Its cultural heritage also has an array of attributes ranging
          from artistic sensibility to scientific sense.
          <p />
          &gt; The Cultural Heritage Administration (CHA) is continuing to
          provide people with more opportunities to appreciate the value of its
          cultural heritage and to make every effort to preserve its precious
          cultural heritage which is not only the quintessence of human culture
          and nature but also the source of life.
        </div>
      </div>
    </TypeIt>
  );
};

export default TypingText;
