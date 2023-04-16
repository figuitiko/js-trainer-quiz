import { useRef, useState } from "react";
import TestsCard from "./TestsCard"
import { flushSync } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const  items = [0,1,2,3,4,5,6,7,8,9]

const TestList = () => {
   
  const [index, setIndex] = useState(0);
  const liRef = useRef<HTMLDivElement | null>(null);
  const handleScroll = () => {

    if(liRef.current){
      liRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }
  const handleForward = () => {    
      flushSync(() => {
        if (index < items.length - 1) {
          setIndex(index + 1);
        } 
      });
      handleScroll();
      
    }
    const handleBack = () => {
      if (index > 0) {
        setIndex(index - 1);
      } 
      handleScroll();
      
    }
   
  
  return (
    <>
      
      <div className="carousel carousel-center rounded-box gap-4">
        {
          items.map((item, i) => {            
            return (
              <div ref={index === item ? liRef : null} key={item} className="carousel-item">
                <TestsCard isActive={index === i} />
              </div>
            )
          })
        }

      </div>
      <div className="flex justify-center mt-4 gap-4">
       
       {
         (index > 0) && <button className="btn btn-outline btn-accent" onClick={handleBack}><FiChevronLeft /></button>
       }
       {
         (index < items.length - 1) && <button className="btn btn-outline btn-accent" onClick={handleForward}><FiChevronRight /></button>
       }
     

     </div>
    </>
   )
}

export default TestList