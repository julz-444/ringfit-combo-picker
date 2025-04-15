import { useState } from "react";

import combos from './combos.json';


export default function RingFitComboPicker() {
  const [combo, setCombo] = useState(null);

  const getRandomCombo = () => {
    const random = combos[Math.floor(Math.random() * combos.length)];
    setCombo(random);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Ring Fit Combo Picker</h1>
      <button onClick={getRandomCombo}>Pick a Combo</button>
      {combo && (
        <div style={{ marginTop: 20 }}>
          <h2>{combo.lists}</h2>
          <p>Focus: {combo.tags.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
