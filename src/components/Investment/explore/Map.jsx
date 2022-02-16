// import React, { Component } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";

// class MapContact extends Component {
//   render() {
//     return (
//       <div className="w-full h-96 bg-gray-50 rounded">
//         <Map
//           centerAroundCurrentLocation={true}
//           google={this.props.google}
//           zoom={14}
//           style={{
//             position: "relative",
//             width: "100%",
//             height: "100%",
//             zIndex: "-1",
//           }}
//           initialCenter={{
//             lat: 27.717245,
//             lng: 85.323959,
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCNYAkCtpJKJklz78SKMdZg_BvWyz7Q3mM",
// })(MapContact);

import React from "react";

const Map = () => {
  return (
    <div className="w-full my-10">
      <div className="my-10 text-xl font-medium">
        Budhanilkantha View Tower - Illustrated on Map
      </div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="400"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Map;
