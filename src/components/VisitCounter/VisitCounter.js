import React, { useState, useEffect } from "react";

const VisitCounter = () => {
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    const fetchPageViews = () => {
      // Überprüfen, ob das gtag-Skript vorhanden und die getAll-Funktion definiert ist
      if (window.gtag && typeof window.gtag.getAll === "function") {
        // Abrufen der Seitenaufrufe über das gtag-Befehl
        const pageViews = window.gtag.getAll()[0].get("page_view_count");
        setPageViews(pageViews);
      } else {
        console.error(
          "Google Analytics ist nicht geladen oder nicht richtig konfiguriert."
        );
      }
    };

    fetchPageViews();
  }, []);

  return (
    <div>
      <p>Anzahl der Seitenaufrufe: {pageViews}</p>
    </div>
  );
};

export default VisitCounter;
