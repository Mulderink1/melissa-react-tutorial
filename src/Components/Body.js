import React, { useState } from 'react';

export const exportExample = () => "exporting one liners";

export default props => {
  const [melissasMood, setMelissasMood] = useState("ok");

  setTimeout(() => {
    setMelissasMood("happy")
  }, 5000);

  return (
    <div>
      <h3>
        This is prop drilling from app.js => {props.state.mike}
      </h3>
      <h3>
        Melissas Mood => {melissasMood}
      </h3>
      <h3>
        This is some exported data => {exportExample()}
      </h3>
    </div>
  );
};