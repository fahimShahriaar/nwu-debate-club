import React, { useEffect, useState } from 'react';
import Student from '../../Student/Student';
import studentData from '../../../fakeData/fakeData.json';
import Debater from '../../Debaterr/Debater';

const Students = () => {
    const [iStudents, setIStudents] = useState([]);
    const [debaters, setDebaters] = useState([]);
    const totalSalary = debaters.reduce((totalSalary, debater) => totalSalary + debater.salary, 0);
    useEffect(() => {
        setIStudents(studentData);
    }, [])

    const handleAddStudent = (student) => {
        setDebaters([...debaters, student]);
    }

    return (
        <div className="container py-4 px-5">
            <h4 className="text-center text-success">Debater Selection</h4>
            <div className="row">
                <div className="col-sm-6 col-md-6 p-4">
                    <h4>Interested Students</h4>
                    {
                        iStudents.map(student => <Student student={student} handleAddStudent={handleAddStudent} key={student.id} />)
                    }
                </div>
                <div className="col-sm-6 col-md-6 p-4 text-center">
                    <h4>Selected Students</h4>
                    <div className="shadow rounded">
                        {
                            debaters.map(debater => <Debater debater={debater} key={debater.id} />)
                        }
                        <p className="alert alert-primary py-4">Total Salary: {totalSalary}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Students;