import React, { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import trashVideo from "./Trash.mp4";

function TrashComponent() {
  const videoRef = useRef(null);

  useEffect(() => {
    const resizeVideoContainer = () => {
      const videoContainer = videoRef.current.parentElement;
      const videoWidth = videoRef.current.videoWidth;
      const videoHeight = videoRef.current.videoHeight;
      const containerWidth = videoContainer.offsetWidth;

      if (containerWidth / videoWidth < 1) {
        const scaleFactor = containerWidth / videoWidth;
        videoRef.current.style.width = `${containerWidth}px`;
        videoRef.current.style.height = `${videoHeight * scaleFactor}px`;
      } else {
        videoRef.current.style.width = "100%";
        videoRef.current.style.height = "auto";
      }
    };
    resizeVideoContainer();
    window.addEventListener("resize", resizeVideoContainer);
    return () => {
      window.removeEventListener("resize", resizeVideoContainer);
    };
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="video-container">
              <video
                ref={videoRef}
                src={trashVideo}
                onClick={handleVideoClick}
                controls
                autoPlay
                playsInline
                muted
                preload="metadata"
              ></video>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TrashComponent;
