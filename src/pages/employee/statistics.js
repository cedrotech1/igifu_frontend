import React, { useState } from 'react';

function CheckboxComponent() {
  // State to manage the checkbox values
  const [use, setuse] = useState({
    one: 0,
    two: 0,
    three: 0,
  });

  // Event handler to update the checkbox state on checkbox change
  const handleCheckboxChange = (checkboxName) => {
    setuse((prevValues) => ({
      one: checkboxName === '1' ? 1 : 0,
      two: checkboxName === '2' ? 2 : 0,
      three: checkboxName === '3' ? 3 : 0,
    }));
  };

  return (
    <div>
      {/* Checkbox 1 */}
      <label>
        <input 
          type="checkbox" 
          checked={use.one > 0} 
          onChange={() => handleCheckboxChange('1')} 
        />
        Checkbox 1
      </label>

      {/* Checkbox 2 */}
      <label>
        <input 
          type="checkbox" 
          checked={use.two > 0} 
          onChange={() => handleCheckboxChange('2')} 
        />
        Checkbox 2
      </label>

      {/* Checkbox 3 */}
      <label>
        <input 
          type="checkbox" 
          checked={use.three > 0} 
          onChange={() => handleCheckboxChange('3')} 
        />
        Checkbox 3
      </label>

      {/* Display the checked checkbox value */}
      <p>Checked checkbox value: {Object.values(use).reduce((acc, val) => acc + val, 0) || 'None'}</p>
    </div>
  );
}

export default CheckboxComponent;
