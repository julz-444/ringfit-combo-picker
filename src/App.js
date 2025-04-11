import { useState } from "react";

const combos = [
  { lists: "List A + List M", tags: ["HI", "CORE"] },
  { lists: "List D + List N", tags: ["HI", "CORE", "LEGS", "UPP"] },
  { lists: "List J + List H", tags: ["HI", "CORE", "FUN"] },
  { lists: "List F + List R", tags: ["MOD", "CORE"] },
  { lists: "List C + List F", tags: ["HI", "LEGS"] },
  { lists: "List K + List N", tags: ["MOD", "LEGS", "UPP"] },
  { lists: "List E + List Q", tags: ["REC", "CORE"] },
  { lists: "List G + List R", tags: ["MOD", "REC"] },
  { lists: "List L + List B", tags: ["MOD", "FUN"] },
  { lists: "List R + List H", tags: ["MOD", "CORE", "FUN"] },
];

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