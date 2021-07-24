import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Clients = () => {
  return (
    <div className="container-fluid row">
      <div className="col-md-2">
        <Sidebar/>
      </div>
      <div style={{height:'600px'}} className="col-md-10 text-center">
        <h1>This is AdminUser</h1>
      </div>
    </div>
  );
};

export default Clients;