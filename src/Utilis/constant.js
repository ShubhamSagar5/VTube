import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiEclipse />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];



var nameList = [
    "Aarav",
    "Vivaan",
    "Aditya",
    "Arjun",
    "Ishaan",
    "Reyansh",
    "Kabir",
    "Advik",
    "Vihaan",
    "Shaurya",
    "Rudra",
    "Aryan",
    "Dhruv",
    "Ayaan",
    "Atharv",
    "Aadi",
    "Aaradhya",
    "Ananya",
    "Saanvi",
    "Myra",
    "Avni",
    "Anika",
    "Kiara",
    "Anaya",
    "Aanya",
    "Aditi",
    "Pari",
    "Riya",
    "Avisha",
    "Tara",
    "Aashi",
    "Ishita",
    "Aarohi",
    "Anvi",
  ];
  
  export const randomNameGenerator = ()=> {
  return nameList[Math.floor(Math.random() * nameList.length)];
      };
      


    export  function randomMessageGenerator() {
        const comments = [
            "Nice!",
            "Awesome!",
            "Great job!",
            "Amazing!",
            "Well done!",
            "Fantastic!",
            "Excellent!",
            "Superb!",
            "Brilliant!",
            "Impressive!",
            "Cool!",
            "Love it!",
            "Perfect!",
            "Incredible!",
            "Fabulous!",
            "Beautiful!",
            "Genius!",
            "Fantastic!",
            "Lovely!",
            "Outstanding!"
        ];
      
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * comments.length);
      
        // Return a random comment
        return comments[randomIndex];
      }    
      

  
  export const OFFSETCOUNT = 25



 export  function generateRandomProfilePicUrl() {
    const width = 200; // Specify the width of the image
    const height = 200; // Specify the height of the image
    const randomId = Math.floor(Math.random() * 1000); // Generate a random ID for the image
    return `https://picsum.photos/${width}/${height}?random=${randomId}`;
  }
  
  // Example usage
  const randomProfilePicUrl = generateRandomProfilePicUrl();
  console.log(randomProfilePicUrl);