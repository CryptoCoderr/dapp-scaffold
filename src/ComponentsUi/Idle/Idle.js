import React, { useState, useEffect } from "react";

const IdleScreen = () => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let idleTimeout;

    const resetIdleTimeout = () => {
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        setIsIdle(true);
      }, 30000);
    };

    const handleActivity = () => {
      if (isIdle) {
        setIsIdle(false);
      }
      resetIdleTimeout();
    };

    resetIdleTimeout();

    // Add event listeners for mousemove, touchstart, and scroll events
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("touchstart", handleActivity, { passive: true });
    window.addEventListener("scroll", handleActivity, { passive: true });

    return () => {
      clearTimeout(idleTimeout);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("touchstart", handleActivity, {
        passive: true,
      });
      window.removeEventListener("scroll", handleActivity, { passive: true });
    };
  }, []);

  useEffect(() => {
    const handleHideOverlay = () => {
      setIsIdle(false);
    };

    // Add event listeners for click and touchend events to hide the overlay
    window.addEventListener("click", handleHideOverlay);
    window.addEventListener("touchend", handleHideOverlay);
    window.addEventListener("mousemove", handleHideOverlay);
    window.addEventListener("touchstart", handleHideOverlay);
    window.addEventListener("scroll", handleHideOverlay);

    return () => {
      window.removeEventListener("click", handleHideOverlay);
      window.removeEventListener("touchend", handleHideOverlay);
      window.removeEventListener("mousemove", handleHideOverlay);
      window.removeEventListener("touchstart", handleHideOverlay);
      window.removeEventListener("scroll", handleHideOverlay);
    };
  }, []);

  return (
    <div className="idle-screen">
      {isIdle && (
        <div className="overlay">
          <div className="align-center">
            <div className="sl">
              <span>S</span>
              <span>O</span>
              <span>L</span>
              <span>Y</span>
              <span>M</span>
              <span>P</span>
              <span>I</span>
              <span>C</span>
              <span>S</span>
              <span>.</span>
              <span>V</span>
              <span>I</span>
              <span>P</span>
            </div>
            <div className="sca">
              <span>H</span>
              <span>k</span>
              <span>r</span>
              <span>a</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>S</span>
              <span>W</span>
              <span>N</span>
              <span>g</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdleScreen;
