/**
 * Contains all content related to a particular project
 */
import { Arrow } from "../shared/icons";
import "@styles/index.css";
import "@styles/App.css";
import { SlidePage } from "./slide-page";
import { useState } from "react";

const ProjectContainer: React.FC<CarouselContainerProps> = ({ project }) => {

  const [slideIndex, setSlideIndex] = useState(0)
  return (
    <>
      <Arrow 
      
        className="right-arrow-project" 
        onClick={()=>{
          if(slideIndex === project.slides.length - 1) return
          setSlideIndex(prev=>prev+1)
        }}
      />
      <Arrow 
        className="left-arrow-project"
        onClick={()=>{
          if(slideIndex === 0) return
          setSlideIndex(prev=>prev-1)
        }}
        
        />

      {/* Container for page */}
      <div className="project-slide-container">
          <SlidePage slide={project.slides[slideIndex]}></SlidePage>;
      </div>
    </>
  );
};

export default ProjectContainer;
