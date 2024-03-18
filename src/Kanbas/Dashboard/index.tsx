import { Link } from "react-router-dom";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <h5>Course</h5>
      <input value={course.number} style={{ "width": "150px" }} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.startDate} style={{ "width": "150px" }} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} style={{ "width": "150px" }} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      <button onClick={addNewCourse} className="btn btn-primary mx-1">
        Add
      </button>
      <button className="btn btn-success mx-1" onClick={(event) => {
        event.preventDefault();
        updateCourse();
      }}>
        Update
      </button>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 340 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                  style={{ height: 150 }} alt={course.name} />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.number}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary mx-1">
                    Go </Link>
                  <button className="btn btn-danger mx-1" onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}>
                    Delete
                  </button>
                  <button className="btn btn-warning mx-1" onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}
export default Dashboard;