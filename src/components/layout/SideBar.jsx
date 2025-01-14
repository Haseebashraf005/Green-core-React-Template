import React from 'react';
import { NavLink } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className="bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
        <i className="fas fa-user-secret me-2"></i>test
      </div>
      <div className="list-group list-group-flush my-3">
        <NavLink
          to="/"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
        >
          <i className="fas fa-project-diagram me-2"></i>
          Home
        </NavLink>    

        <NavLink
          to="/datatable"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
        >
          <i className="fas fa-project-diagram me-2"></i>
          DataTables
        </NavLink>
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-chart-line me-2"></i>Analytics
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-paperclip me-2"></i>Reports
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-shopping-cart me-2"></i>Store Mng
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-gift me-2"></i>Products
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-comment-dots me-2"></i>Chat
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-map-marker-alt me-2"></i>Outlet
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
          <i className="fas fa-power-off me-2"></i>Logout
        </a>
      </div>
    </div>
  );
};

export default SideBar;
