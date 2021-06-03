import React from 'react';

const Student = (props) => {
    // console.log(props);
    const { Name, email, salary, image } = props.student;
    return (
        <div className="shadow rounded mb-3 text-center p-5">
            <img src={image} alt="" height="80px" width="80px" className="rounded-circle" />
            <h5 className="mt-4">{Name}</h5>
            <p className="my-0">Email: {email}</p>
            <p className="my-0">Salary: {salary}</p>
            <button onClick={() => props.handleAddStudent(props.student)} className="btn btn-success btn-sm px-5 mt-3">Add Student</button>
        </div>
    );
};

export default Student;