import React from "react";

// Inline CSS styles for the TipBox component
const styles = {
  tipBox: {
    padding: "10px",
    margin: "15px 0",
    borderLeft: "5px solid #007bff", // Blue color for the border
    backgroundColor: "#f1f1f1", // Light grey background
    color: "#333", // Dark text color for readability
    fontStyle: "italic",
    // You can add more styling as needed
  },
};

const TipBox = ({ children }) => {
  return <div style={styles.tipBox}>{children}</div>;
};

export default TipBox;
