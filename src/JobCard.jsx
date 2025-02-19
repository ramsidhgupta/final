import React from "react";
import './JobCard.css';

const JobCard = () => {
  return (
    <>

<div className="container py-5 py-md-5">
        <div className="row card-container-Tech mt-5">
            <div className="col-lg-4 col-md-6 col-sm-6 mt-5">
                <div class="card-deck">
                    <div class="card">
                        <img
                            class="card-img-top"
                            src="http://www.orseu-concours.com/451-615-thickbox/selor-test-de-raisonnement-abstrait-niveau-a.jpg"
                            alt="Company logo"
                         />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-success">
                                <i class="fa fa-briefcase" style={{fontSize:"20px"}}></i> Company name 1
                            </li>
                            <li class="list-group-item list-group-item-success">
                                <i class="fa fa-user" style={{fontSize:"20px"}}></i> Role name 1
                            </li>
                            <li class="list-group-item list-group-item-success">
                                <i class="fa fa-map-marker" style={{fontSize:"20px"}}></i>Location name 1
                            </li>
                            <li class="list-group-item list-group-item-success">
                                <i class="fa fa-clock-o" style={{fontSize:"20px"}}></i> Duration name 1
                            </li>
                            <li class="list-group-item list-group-item-success">
                                <i class="fa fa-inr" style={{fontSize:"20px"}}></i> Cost name 1
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <button type="button" class="btn" id="left-panel-link">Register 1</button>
                        <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal1" id="right-panel-link"> Job Description 1</button>
                    </div>
                </div>
            </div>
        

















            <div className="col-lg-4 col-md-6 col-sm-6 mt-5">
                 {/* <div class="card-deck"> */}
                    <div class="card">
                        <img
                            class="card-img-top"
                            src="http://www.orseu-concours.com/451-615-thickbox/selor-test-de-raisonnement-abstrait-niveau-a.jpg"
                            alt="Company logo"
                        />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <ul class="list-group">
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-briefcase" style={{fontSize:"20px"}}></i> Company name 2
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-user" style={{fontSize:"20px"}}></i> Role name 2
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-map-marker" style={{fontSize:"20px"}}></i>{" "}
                Location
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-clock-o" style={{fontSize:"20px"}}></i> Duration name 2
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-inr" style={{fontSize:"20px"}}></i> Cost name 2
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <button type="button" class="btn" id="left-panel-link">
              Register 2
            </button>
            <button
              type="button"
              class="btn"
              data-toggle="modal"
              data-target="#exampleModal2"
              id="right-panel-link"
            >
              Job Description 2
            </button>
          </div>
        </div>
</div>









        <div class="card">
          <img
            class="card-img-top"
            src="http://www.orseu-concours.com/451-615-thickbox/selor-test-de-raisonnement-abstrait-niveau-a.jpg"
            alt="Company logo"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <ul class="list-group">
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-briefcase" style={{fontSize:"20px"}}></i> Company
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-user" style={{fontSize:"20px"}}></i> Role
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-map-marker" style={{fontSize:"20px"}}></i>{" "}
                Location
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-clock-o" style={{fontSize:"20px"}}></i> Duration
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-inr" style={{fontSize:"20px"}}></i> Cost
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <button type="button" class="btn" id="left-panel-link">
              Register
            </button>
            <button
              type="button"
              class="btn"
              data-toggle="modal"
              data-target="#exampleModal3"
              id="right-panel-link"
            >
              Job Description
            </button>
          </div>
        </div>
      </div>
      <div class="sep"></div>

      <div class="card-deck">
        <div class="card">
          <img
            class="card-img-top"
            src="http://www.orseu-concours.com/451-615-thickbox/selor-test-de-raisonnement-abstrait-niveau-a.jpg"
            alt="Company logo"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <ul class="list-group">
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-briefcase" style={{fontSize:"20px"}}></i> Company
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-user" style={{fontSize:"20px"}}></i> Role
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-map-marker" style={{fontSize:"20px"}}></i>{" "}
                Location
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-clock-o" style={{fontSize:"20px"}}></i> Duration
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-inr" style={{fontSize:"20px"}}></i> Cost
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <button type="button" class="btn" id="left-panel-link">
              Register
            </button>
            <button
              type="button"
              class="btn"
              data-toggle="modal"
              data-target="#exampleModal4"
              id="right-panel-link"
            >
              Job Description
            </button>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="http://www.orseu-concours.com/451-615-thickbox/selor-test-de-raisonnement-abstrait-niveau-a.jpg"
            alt="Company logo"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <ul class="list-group">
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-briefcase" style={{fontSize:"20px"}}></i> Company
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-user" style={{fontSize:"20px"}}></i> Role
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-map-marker" style={{fontSize:"20px"}}></i>{" "}
                Location
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-clock-o" style={{fontSize:"20px"}}></i> Duration
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-inr" style={{fontSize:"20px"}}></i> Cost
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <button type="button" class="btn" id="left-panel-link">
              Register
            </button>
            <button
              type="button"
              class="btn"
              data-toggle="modal"
              data-target="#exampleModal5"
              id="right-panel-link"
            >
              Job Description
            </button>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="http://www.orseu-concours.com/451-615-thickbox/selor-test-de-raisonnement-abstrait-niveau-a.jpg"
            alt="Company logo"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <ul class="list-group">
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-briefcase" style={{fontSize:"20px"}}></i> Company
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-user" style={{fontSize:"20px"}}></i> Role
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-map-marker" style={{fontSize:"20px"}}></i>{" "}
                Location
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-clock-o" style={{fontSize:"20px"}}></i> Duration
              </li>
              <li class="list-group-item list-group-item-success">
                <i class="fa fa-inr" style={{fontSize:"20px"}}></i> Cost
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <button type="button" class="btn" id="left-panel-link">
              Register
            </button>
            <button
              type="button"
              class="btn"
              data-toggle="modal"
              data-target="#exampleModal6"
              id="right-panel-link"
            >
              Job Description
            </button>
          </div>
        </div>
      </div>
      <div class="sep"></div>

      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title 1
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title 2
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title 3
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title 4
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal5"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title 5
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal6"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title 6
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default JobCard;
