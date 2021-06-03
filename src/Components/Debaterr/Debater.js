import React from 'react';

const Debater = (props) => {
    const {Name, email, image, salary} = props.debater;
    return (
        <div className="border px-3 py-2">
            <h4>{Name}</h4>
            <p>Salary: {salary}</p>
            
        </div>
    );
};

export default Debater;