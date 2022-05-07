import React from "react";

const Answers = ({ variants, correctAnswer }) => {
  const listItems = Object.keys(variants).map((variant) => (
    <li key={variant}>
      {variant}.{variants[variant]}
    </li>
  ));
  return <ul>{listItems}</ul>;
};

export default Answers;
