
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container py-4">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark mb-4">
        <a className="navbar-brand" href="#">
          <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Octofit Logo" className="octofit-logo" />
          OctoFit Tracker
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Activities</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Teams</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Leaderboard</a></li>
          </ul>
        </div>
      </nav>

      {/* Heading */}
      <h1 className="display-4 mb-4 text-center">Welcome to OctoFit Tracker</h1>

      {/* Card */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Track Your Fitness Journey</h5>
              <p className="card-text">Log activities, join teams, and compete on the leaderboard!</p>
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>Show Info Modal</button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mb-4">
        <h2 className="h4">Sample Activities</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Activity</th>
              <th>Duration (min)</th>
              <th>Calories</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Running</td>
              <td>30</td>
              <td>300</td>
              <td>2025-11-20</td>
            </tr>
            <tr>
              <td>Cycling</td>
              <td>45</td>
              <td>400</td>
              <td>2025-11-21</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Form */}
      <div className="mb-4">
        <h2 className="h4">Add Activity</h2>
        <form className="row g-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Activity Type" />
          </div>
          <div className="col-md-2">
            <input type="number" className="form-control" placeholder="Duration" />
          </div>
          <div className="col-md-2">
            <input type="number" className="form-control" placeholder="Calories" />
          </div>
          <div className="col-md-2">
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-success w-100">Add</button>
          </div>
        </form>
      </div>

      {/* Links */}
      <div className="mb-4 text-center">
        <a href="https://reactjs.org" className="btn btn-link">Learn React</a>
        <a href="https://getbootstrap.com" className="btn btn-link">Learn Bootstrap</a>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome!</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal for OctoFit Tracker.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
