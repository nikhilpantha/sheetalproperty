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
