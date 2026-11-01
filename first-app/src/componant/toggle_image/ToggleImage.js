import { useState } from "react";

function ToggleImage() {
  const onBulb = "https://www.w3schools.com/js/pic_bulbon.gif";
  const offBulb = "https://www.w3schools.com/js/pic_bulboff.gif";

  const [flag, setflag] = useState(false);

  const chageBulb = () => setflag(!flag);
  return (
    <div>
      <img
        src={flag ? onBulb : offBulb}
        style={{
          height: 150,
          width: 150,
          backgroundColor: flag ? "yellow" : "black",
        }}
      />
      <button onClick={chageBulb}>{flag ? "of" : "on"}</button>
    </div>
  );
}

export default ToggleImage;
