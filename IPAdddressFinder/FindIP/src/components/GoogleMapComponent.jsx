import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapComponent = ({ latitude, longitude }) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: latitude ? parseFloat(latitude) : 0, // Ensure it's a number
    lng: longitude ? parseFloat(longitude) : 0,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDj0hlVMnkGpomg3BGRL8nNzTB82L33C_Q">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
