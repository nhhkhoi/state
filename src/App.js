import React, { useState } from "react";

function App() {
  const [like, setLike] = useState(0);
  return <h1> {like === 1 ? "&#128077;" : "&#128078;"}</h1>;
}

export default App;
