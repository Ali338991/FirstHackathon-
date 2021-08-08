import React from "react";
import { AiTwotoneHome,AiOutlineUser } from "react-icons/ai";
import { BiImageAdd,BiLogOutCircle } from "react-icons/bi";
import { FaPhotoVideo ,FaVideo} from "react-icons/fa";
import { Carousel } from "react-bootstrap";

import "./AdminNavigationBar.css";
import { Link } from "react-router-dom";

export default function AdminNavigationBar() {
  return (
    
      <div className="asd">
        <Link to="/Admin" className="text-center text-decoration-none">
          <AiTwotoneHome color="white" size={42} />
          <div className="link">Home</div>
        </Link>
        <hr style={{ color: "white" }} />
        <Link to="/Admin/AddPic" className="text-center text-decoration-none">
          <BiImageAdd color="white" size={42} />
          <div className="link">Add</div>
        </Link>
        <hr style={{ color: "white" }} />
        <Link to="/Admin" className="text-center text-decoration-none">
          <AiOutlineUser color="white" size={42} />
          <div className="link">Users</div>
        </Link>
        <hr style={{ color: "white" }} />
        <Link to="/Admin" className="text-center text-decoration-none">
          <FaPhotoVideo color="white" size={42} />
          <div className="link">Photos</div>
        </Link>
        <hr style={{ color: "white" }} />
        <Link to="/Admin" className="text-center text-decoration-none">
          <FaVideo color="white" size={42} />
          <div className="link">Videos</div>
        </Link>
        <hr style={{ color: "white" }} />
        <Link to="/Admin" className="text-center text-decoration-none">
          <BiLogOutCircle color="white" size={42} />
          <div className="link">Logout</div>
        </Link>
     

      </div>
    
  );
}
