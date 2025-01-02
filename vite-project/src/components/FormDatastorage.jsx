import React, { useState, useEffect } from 'react';

const FormDatastorage = () => {
  const [inputValue, setInputValue] = useState('');

  // Load saved data from localStorage when the component mounts
  useEffect(() => {
    const savedValue = localStorage.getItem('formData');
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, []);

  // Update localStorage whenever the input value changes
  useEffect(() => {
    localStorage.setItem('formData', inputValue);
  }, [inputValue]);

  function handleSubmit(e) {
    e.preventDefault();
    alert('Form submit kar dun kya');
  }

  function handleChange(e) {
    setInputValue(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormDatastorage;

// Key Updates:
// State for Input Value:

// Added inputValue state to store the current value of the input field.
// Persist to LocalStorage:

// Saved the inputValue to localStorage whenever it changes using a useEffect.
// Load from LocalStorage:

// Retrieved the saved value from localStorage when the component mounts and set it as the initial value of the input field.
// Two-Way Binding:

// Used value={inputValue} on the input field to bind the state to the input.
// Behavior:
// Typing in the input field will update the state and persist the value in localStorage.
// On reloading the page, the input field will load the saved value from localStorage.
// Submitting the form will show an alert and the data will still persist in the input field.
