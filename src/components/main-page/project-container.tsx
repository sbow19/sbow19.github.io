/**
 * Contains all content related to a particular project
 */
import { Arrow } from "../shared/icons";
import "@styles/index.css";
import "@styles/App.css";
import { SlidePage } from "./slide-page";
import { useMemo, useState } from "react";

const ProjectContainer: React.FC<CarouselContainerProps> = ({
  project,
  index,
  projectIndex,
}) => {
  const slides = useMemo(() => {
    return [...project.slides];
  }, [project]);
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <>
      {index === projectIndex && (
        <>
          <Arrow
            className="right-arrow-project"
            onClick={() => {
              if (slideIndex === slides.length - 1) return;
              setSlideIndex((prev) => prev + 1);
            }}
          />
          <Arrow
            className="left-arrow-project"
            onClick={() => {
              if (slideIndex === 0) return;
              setSlideIndex((prev) => prev - 1);
            }}
          />

          {/* Container for page */}
          <div className="project-slide-container">
            <SlidePage slide={slides[slideIndex]}></SlidePage>;
          </div>
        </>
      )}
    </>
  );
};

export default ProjectContainer;
