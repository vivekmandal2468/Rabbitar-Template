


import React from "react";
import { easeOut, motion } from "motion/react";
import image from "../assets/image.png";
import { cn } from "../lib/utils";

export const LandingImages = ({className}) => {
  return (
    <div className="relative ">
    
      {/* <div className="absolute inset-x-0 mask-t-from-10% w-full h-full"></div> */}
      <div className={cn("relative min-h-72 sm:min-h-80  md:min-h-100 lg:min-h-140 w-full perspective-distant  lg:pl-20 md:translate-x-16 max-w-5xl  pt-20 md:pt-44 pointer-events-none overflow-y-clip", className)}>
        
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative perspective-[3500px]"
        >
          <img
            src={image}
            alt="demo for template"
            height={1080}
            width={1920}
            className="absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl object-cover opacity-30"
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative perspective-[3500px] translate-x-20 -translate-y-10 md:-translate-y-20 lg:-translate-y-40"
        >
          <img
            src={image}
            alt="demo for template"
            height={1080}
            width={1920}
            className="absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-2xl transform-3d object-cover select-none pointer-events-none"
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-24 w-full bg-gradient-to-b from-transparent to-background md:h-40"></div>
      </div>
    </div>
  );
};








// import React from 'react';
// import { easeOut, motion } from "motion/react";
// import image from "../assets/image.png";

// export const LandingImages = () => {
//   return (
//     <div className="relative">
//       <div className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full overflow-hidden perspective-distant pt-20 pl-8 lg:pl-20 md:translate-x-20 max-w-5xl">
  

//         <motion.div 
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: easeOut }}
//           whileInView={{opacity:1, y:0}}
//           viewport={{once:true}}
//           className="relative perspective-[4000px]"
//         >
//           <img 
//             src={image}
//             alt="demo for template" 
//             height={1080} 
//             width={1920}
//             className="absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl object-cover opacity-30"
//             style={{ transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)" }}
//           />
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
//           whileInView={{opacity:1, y:0}}
//           viewport={{once:true}}
//           className="relative perspective-[4000px] translate-x-20 -translate-y-10 md:-translate-y-20 lg:-translate-y-40"
//         >
//           <img 
//            src={image}
//             alt="demo for template" 
//             height={1080} 
//             width={1920} 
//             className="absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-2xl transform-3d object-cover select-none pointer-events-none"
//             style={{ transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)" }}
//           />
//         </motion.div>

//         <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-24 w-full bg-gradient-to-b from-transparent to-background md:h-40"></div>
//       </div>
//     </div>
//   );
// }; 