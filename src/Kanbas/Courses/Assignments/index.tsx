import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import database from "../../Database";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = database.assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <span>
                <label htmlFor="search"></label>
                <input id="search" className="form-control" placeholder="Search for Assignments"></input>
                <button type="button" className="btn btn-primary">Group</button>
                <button type="button" className="btn btn-primary">Assignment</button>
                <select className="form-select">
                    <option>Edit Assignment Dates</option>
                    <option>Assignment Groups Weight</option>
                    <option>Gradescope 1.3</option>
                    <option>Commons Favorites</option>
                </select>
            </span>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" />ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li key={assignment._id} className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;