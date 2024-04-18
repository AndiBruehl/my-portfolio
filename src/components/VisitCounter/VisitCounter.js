import React, { useState, useEffect } from "react";

const VisitCounter = ({ trackingID }) => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Function to fetch visit count from Google Analytics
    const fetchVisitCount = async () => {
      try {
        // Replace 'YOUR_VIEW_ID' with your Google Analytics view ID
        const response = await fetch(
          `https://www.google-analytics.com/mp/collect?measurement_id=${trackingID}&conversion_event=1`
        );

        if (response.ok) {
          // Parsing the response to get visit count
          const data = await response.json();
          const count = data.visits; // Assuming Google Analytics returns visit count in the response
          setVisitCount(count);
        } else {
          throw new Error("Failed to fetch visit count");
        }
      } catch (error) {
        console.error("Error fetching visit count:", error);
      }
    };

    // Fetch visit count when the component mounts
    fetchVisitCount();

    // You can set up a timer to fetch the visit count periodically
    // setInterval(fetchVisitCount, 60000); // Fetch every minute

    // Cleanup function to clear the interval if the component unmounts
    // return () => clearInterval(intervalId);
  }, [trackingID]);

  return (
    <div>
      <p>Number of visits: {visitCount}</p>
    </div>
  );
};

export default VisitCounter;
