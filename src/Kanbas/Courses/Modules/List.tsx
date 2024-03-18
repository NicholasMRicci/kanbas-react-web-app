import React, { useState } from "react";
import "./List.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import database from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      <span>
        <button type="button" className="btn btn-primary">Collapse All</button>
        <button type="button" className="btn btn-primary">View Progress</button>
        <select className="form-select">
          <option>Publish All</option>
        </select>
        <button type="button" className="btn btn-primary">Module</button>
      </span>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button className="btn btn-primary" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button className="btn btn-success" onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input value={module.name} className="form-control mx-1"
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <input value={module.description} className="form-control mx-1"
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />

        </li>
        {moduleList.filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="position-absolute end-0">
                  <button className="btn btn-warning mx-2"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                  <button className="btn btn-danger mx-2"
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              <div>{selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: any) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}</div>

            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;