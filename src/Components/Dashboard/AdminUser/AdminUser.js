import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AdminUser = () => {
  return (
    <div className="container-fluid row">
      <div className="col-md-2">
        <Sidebar/>
      </div>
      <div className="col-md-10 text-center">
        <h1>This is AdminUser</h1>
      </div>
    </div>
  );
};

export default AdminUser;