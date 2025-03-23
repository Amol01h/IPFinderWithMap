import { useState } from "react";

const FindIP = ({ onSearch }) => {
  const [ip, setIp] = useState("");

  const handleSearch = () => {
    if (ip.trim() === "") return;
    onSearch(ip);
  };

  return (
    <div className="container mt-4 center">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter IP Address"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FindIP;
