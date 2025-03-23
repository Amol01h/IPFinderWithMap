import { useState } from "react";
import FindIP from "./components/FindIP";
import Post from "./components/Post";

const App = () => {
  const [searchedIP, setSearchedIP] = useState("");

  return (
    <div className="container mt-5">
      <FindIP onSearch={setSearchedIP} />
      <Post ip={searchedIP} />
    </div>
  );
};

export default App;
