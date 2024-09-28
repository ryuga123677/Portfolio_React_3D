import React from "react";
import { FaTimes } from "react-icons/fa";
export const Skills = ({ onchange }) => {
  return (
    <>
      <div className="flex justify-end bg-[#853824] ">
      
        <button
          onClick={() => onchange(false)}
          className="hover:text-amber-500 bg-[#853824] text-white"
        >
          <FaTimes size={25} />
        </button>
      </div>

      <div className="flex bg-[#853824] lg:min-h-screen justify-center sm:h-max text-white text-xl">
        <div className="flex flex-col gap-2">
          <h3 align="left">Connect with me:</h3>
          <p align="left">
            <a
              href="https://www.linkedin.com/in/harshit-kumar-vishwakarma-4793bb280"
              target="blank"
            >
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="https://www.linkedin.com/in/harshit-kumar-vishwakarma-4793bb280"
                height="40"
                width="40"
              />
            </a>
          </p>

          <p>Languages-</p>
          <div className="flex m-2 gap-2">
            <a
              href="https://www.cprogramming.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="c"
                height="40"
                width="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.w3schools.com/cpp/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="cplusplus"
                height="40"
                width="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.w3schools.com/cs/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                alt="csharp"
                 height="40"
                width="40"
              />{" "}
            </a>
            <a href="https://www.python.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                height="40"
                width="40"
              />{" "}
            </a>
          </div> 

          <p>Frontend Web Skills-</p>
          <div className="flex m-2 gap-2 flex-wrap">
            {" "}
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                height="40"
                width="40"
              />{" "}
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
              height="40"
                width="40"
              />{" "}
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                height="40"
                width="40"
              />{" "}
            </a>{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                height="40"
                width="40"
              />{" "}
            </a>
            <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
              <img
                src="https://reactrouter.com/favicon-light.png"
                alt="react-router"
                 height="40"
                width="40"
              />
            </a>{" "}
            <a href="https://redux.js.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
                 height="40"
                width="40"
              />{" "}
            </a>
            <a href="https://mui.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
                alt="materialui"
                 height="40"
                width="40"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                 height="40"
                width="40"
              />{" "}
            </a>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                alt="figma"
                 height="40"
                width="40"
              />{" "}
            </a>
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                alt="bootstrap"
               height="40"
                width="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
                alt="framermotion"
                height="40"
                width="40"
              />
            </a>{" "}
            <a href="https://p5js.org/" target="_blank" rel="noreferrer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Yogc2t_fdJAiIIGn2hVCfou6ieHc3L7WjVQjJpS3ox4hphEYXKYzNST-uQvujQsA124&usqp=CAU"
                alt="p5js"
                 height="40"
                width="40"
              />
            </a>
          </div>

          <p>Flutter Skills-</p>
          <div className="flex m-2 gap-2">
            <a href="https://dart.dev" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
                alt="dart"
                 height="40"
                width="40"
              />{" "}
            </a>{" "}
            <a href="https://flutter.dev" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
                alt="flutter"
                height="40"
                width="40"
              />{" "}
            </a>
            <a href="https://flutter.dev" target="_blank" rel="noreferrer">
              <img
                src="https://res.cloudinary.com/strapi/image/upload/v1621261454/logo_vgoldp.png"
                alt="flutter"
                height="40"
                width="40"
              />
            </a>{" "}
            <a
              href="https://developer.android.com/studio"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://pbs.twimg.com/media/FwMqYA-WIA0E6Rw.jpg:large"
                alt="androidstudio"
              height="40"
                width="40"
              />
            </a>
          </div>

          <p>Backend Skills-</p>
          <div className="flex m-2 gap-2 flex-wrap">
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                alt="firebase"
             height="40"
                width="40"
              />{" "}
            </a>{" "}
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                height="30"
                width="30"
              />{" "}
            </a>{" "}
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                height="40"
                width="40"
              />{" "}
            </a>{" "}
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                height="40"
                width="40"
              />{" "}
            </a>
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                alt="express"
              height="40"
                width="40"
              />{" "}
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                height="40"
                width="40"
              />{" "}
            </a>
            <a href="https://jwt.io/" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1d/JWT_LOGO.png?20150226185540"
                alt="jwt"
                height="40"
                width="40"
              />
            </a>
            <a href="https://postman.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
           height="40"
                width="40"
              />{" "}
            </a>{" "}
            <a href="https://www.oracle.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
                alt="oracle"
                height="40"
                width="40"
              />{" "}
            </a>
          </div>
          <p>3D Skills-</p> 
          <div className="flex m-2 gap-2">
            <a href="https://www.blender.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://download.blender.org/branding/community/blender_community_badge_white.svg"
                alt="blender"
                height="40"
                width="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.babylonjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://seeklogo.com/images/B/babylon-js-logo-6AC6775AA0-seeklogo.com.png"
                alt="babylonjs"
                 height="35"
                width="40"
              />
            </a>{" "}
            <a href="https://unity.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://preview.redd.it/tu3gt6ysfxq71.png?auto=webp&s=10ab55d9dc09e7ed6ea59bd5916800a5272d5969"
                alt="unity"
               height="40"
                width="40"
              />{" "}
            </a>
          </div>
          <p>Deployement Skills-</p>
          <div className="flex m-2 gap-2">
            <a href="https://vercel.com/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.intuji.com/2022/06/Logo_Vercel-1.jpg"
                alt="vercel"
                height="40"
                width="40"
              />
            </a>
            <a href="https://render.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.finsmes.com/wp-content/uploads/2021/11/render.jpg"
                alt="render"
                 height="40"
                width="40"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
