import React, { useState } from 'react';

function Text5() {
  // Step 1: Define state variables for the two inputs and the result
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  // Step 2: Function to handle the addition
  const handleAdd = () => {
    setResult(parseFloat(num1) + parseFloat(num2)); // Add both numbers as floats
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Simple Add Two Numbers App</h2>
      
      {/* Input fields to get numbers from the user */}
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <br /><br />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <br /><br />

      {/* Button to trigger the addition */}
      <button onClick={handleAdd}>Add Numbers</button>

      {/* Display the result */}
      <h3>Result: {result}</h3>
    </div>
  );
}

export default Text5;
