import { useRef } from "react";

export const useFullscreen = callback => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback == "function") {
      callback(isFull);
    }
  };
  const triggerFullScreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (document.exitFullcreen) {
      document.exitFullcreen();
    } else if (document.mozCancleFullScreen) {
      document.mozCancleFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitscreen) {
      document.msExitscreen();
    }
    runCb(false);
  };
  return { element, triggerFullScreen, exitFull };
};
