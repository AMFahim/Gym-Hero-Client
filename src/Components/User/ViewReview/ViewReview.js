import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './ViewReview.css';

const ViewReview = ({ reviews }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="p-3">
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">{loggedInUser.name}</h6>
          <hr className="text-dark" />
          <p class="card-text text-dark">{reviews.comment}</p>
        </div>
      </div>
    </div>



    //     <div class="card-style">
    //   <div class="set-style">
    //     {/* <h4><b>John Doe</b></h4> */}
    //     <p>{reviews.comment}</p>
    //   </div>
    // </div>
  );
};

export default ViewReview;