import React, { useState, useEffect } from "react";

const DataRenderWithMap = () => {
  const [data, setData] = useState([
    "Data Item 1",
    "Data Item 2",
    "Data Item 3",
    "Data Item 4",
    "Data Item 5",
  ]);
  const [showMap, setShowMap] = useState(false);
  const [dataVisible, setDataVisible] = useState(false);
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setDataVisible(true); 
    }, 100);

    
    const mapTimer = setTimeout(() => {
      setShowMap(true); 
    }, data.length * 200 + 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(mapTimer);
    };
  }, [data.length]);

  return (
    <div style={styles.body}>
      <div
        style={{
          ...styles.dataContainer,
          ...(showMap ? styles.dataContainerMoveUp : {}),
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.dataItem,
              opacity: dataVisible ? 1 : 0,
              transform: dataVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${index * 200}ms`,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {showMap && (
        <div style={styles.mapContainer}>
          <p>Map Goes Here</p>
        </div>
      )}
    </div>
  );
};

// Styles
const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    overflow: "hidden",
  },
  dataContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "top 0.5s ease, transform 0.5s ease",
  },
  dataContainerMoveUp: {
    top: "20px",
    transform: "translate(-50%, 0)",
  },
  dataItem: {
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  },
  mapContainer: {
    width: "100%",
    height: "calc(100vh - 150px)",
    backgroundColor: "#ddd",
    marginTop: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    color: "#555",
  },
};

export default DataRenderWithMap;
