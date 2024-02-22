import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle color="red" className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt color="red" className="fs-2" />  },
    { label: "Courses",   icon: <FaBook color="red" className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt color="red" className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> 
            <div>{link.icon}</div>
            <div>{link.label}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;