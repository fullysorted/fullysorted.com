"use client";

import { useState } from "react";

/**
 * Hidden fields for lib/bot-guard.ts. Spread `trapFields` into the JSON body
 * and render `<BotTrap value={hp} onChange={setHp} />` inside the form.
 * People never see or reach the field; scripts that fill every input do.
 */
export function useBotTrap() {
  const [startedAt] = useState(() => Date.now());
  const [hp, setHp] = useState("");
  return { hp, setHp, trapFields: { fs_hp: hp, fs_t: startedAt } };
}

export function BotTrap({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
      <label>
        Leave this empty
        <input
          type="text"
          name="fs_hp"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
