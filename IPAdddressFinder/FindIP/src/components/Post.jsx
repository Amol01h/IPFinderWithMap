import { useEffect, useState } from "react";
import { FatchApi } from "../API/FatchApi";
import GoogleMapComponent from "./GoogleMapComponent";

const Post = ({ ip }) => {
  const [postData, setPostData] = useState(null);
  const currDate = new Date().toLocaleDateString();

  useEffect(() => {
    if (!ip) return;

    const getPostData = async () => {
      try {
        const res = await FatchApi(ip);
        setPostData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPostData();
  }, [ip]);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      {postData ? (
        <div className="card shadow-lg rounded-lg overflow-hidden border-0" style={{ width: "28rem" }}>
          
          {/* Card Header */}
          <div className="card-header bg-dark text-white text-center">
            <h5 className="mb-0"><i className="bi bi-geo-alt-fill"></i> IP Location Details</h5>
          </div>

          {/* Google Map */}
          <div className="p-2">
            <GoogleMapComponent latitude={postData.latitude} longitude={postData.longitude} />
          </div>

          {/* Card Body */}
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="bi bi-globe2 text-primary"></i> <strong>IP Address:</strong> {postData.ip}
              </li>
              <li className="list-group-item">
                <i className="bi bi-flag text-warning"></i> <strong>Country:</strong> {postData.country_name} ({postData.country_code})
              </li>
              <li className="list-group-item">
                <i className="bi bi-geo-alt text-danger"></i> <strong>City:</strong> {postData.city}
              </li>
              <li className="list-group-item">
                <i className="bi bi-map text-success"></i> <strong>Region:</strong> {postData.region_name} ({postData.region_code})
              </li>
              <li className="list-group-item">
                <i className="bi bi-compass text-info"></i> <strong>Latitude:</strong> {postData.latitude}, <strong>Longitude:</strong> {postData.longitude}
              </li>
              <li className="list-group-item">
                <i className="bi bi-clock text-secondary"></i> <strong>Time Zone:</strong> {postData.time_zone}
              </li>
              <li className="list-group-item">
                <i className="bi bi-building text-muted"></i> <strong>Metro Code:</strong> {postData.metro_code}
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="card-footer text-center bg-light">
            <small className="text-muted">Data fetched on: {currDate}</small>
          </div>

        </div>
      ) : (
        <div className="alert alert-info text-center">Enter an IP to search...</div>
      )}
    </div>
  );
};

export default Post;
