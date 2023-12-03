"use client";
import React, { useState, useEffect } from "react";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];

const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "Next.js",
  "Gatsby",
  "UI/UX",
  "SVG",
  "animation",
  "webdev",
];

const SKILLS_CONFIG = {
  DURATION: 15000,
  ROWS: 1,
  TAGS_PER_ROW: 10,
};

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const shuffle = (arr) => {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    <span>#</span> {text}
  </div>
);

const SkillRow = ({ duration, reverse }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const tagsSubset = shuffle(TAGS).slice(0, SKILLS_CONFIG.TAGS_PER_ROW);
    setTags(tagsSubset);
  }, []);

  return (
    <InfiniteLoopSlider duration={duration} reverse={reverse}>
      {tags.map((tag) => (
        <Tag text={tag} key={tag} />
      ))}
    </InfiniteLoopSlider>
  );
};

const AllSkills = () => (
  <div className="app">
    <div className="tag-list">
      {[...new Array(SKILLS_CONFIG.ROWS)].map((_, i) => (
        <SkillRow
          key={i}
          duration={random(
            SKILLS_CONFIG.DURATION - 5000,
            SKILLS_CONFIG.DURATION + 5000
          )}
          reverse={i % 2 === 1}
        />
      ))}
      <div className="fade" />
    </div>
  </div>
);

export default AllSkills;
