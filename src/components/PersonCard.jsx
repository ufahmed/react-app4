import React, { useState } from 'react';

// PersonCard component
const PersonCard = (props) => {
  const { firstName, lastName, hairColor } = props;
  const [age, setAge] = useState(props.age);

  const increaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div className="person-card">
      <h2>{firstName} {lastName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
};

export default PersonCard ;