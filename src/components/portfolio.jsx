import React, { useEffect, useState, useRef } from "react";
import { Engine, Scene } from "@babylonjs/core";
import "@babylonjs/loaders";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/inspector";
import { Buttons } from "./Buttons";
//import "@babylonjs/gui";
import myIntroVideo from "../assets/video/myintro.mp4";
import earcut from "earcut";
import { AdvancedDynamicTexture, Button, Control } from "@babylonjs/gui";
import { Projects } from "./Projects";
import { Card1, Card6 } from "./Card";
import { Card2 } from "./Card";
import { Card3 } from "./Card";
import { Card4 } from "./Card";
import { Card5 } from "./Card";

window.earcut = earcut;

const BabylonScene = ({
  antialias,
  engineOptions,
  adaptToDeviceRatio,
  sceneOptions,
  onRender,
  onSceneReady,
  ...rest
}) => {
  const reactCanvas = useRef(null);

  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;

    const engine = new Engine(
  
      canvas,
      antialias,
      engineOptions,
      adaptToDeviceRatio
    );
    const isMobile = () => {
      return /Mobi|Android/i.test(navigator.userAgent);
    };
    
    
    if (isMobile()) {
      engine.setHardwareScalingLevel(1); 
    } else {
      engine.setHardwareScalingLevel(0.9);   
    }
    engine.setHardwareScalingLevel(1);
    const scene = new Scene(engine, sceneOptions);

    if (scene.isReady()) {
      onSceneReady(scene);
    } else {
      scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
    }

    engine.runRenderLoop(() => {
      if (typeof onRender === "function") onRender(scene);
      scene.render();
    });

    const resize = () => {
      scene.getEngine().resize();
    };

    window.addEventListener("resize", resize);

    return () => {
      scene.getEngine().dispose();
      window.removeEventListener("resize", resize);
    };
  }, [
    antialias,
    engineOptions,
    adaptToDeviceRatio,
    sceneOptions,
    onRender,
    onSceneReady,
  ]);

  return <canvas className="" ref={reactCanvas} {...rest} />;
  
};

const Portfolio = () => {
  const [isrunning, setisRunning] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [anim, setanim] = useState(false);
  const [projectview, setproject] = useState(false);
  const [shouldLoadScene, setShouldLoadScene] = useState(false);
  const [sceneType, setSceneType] = useState('spaceTravel'); // 'spaceTravel' or 'portfolio'
  const scrollContainerRef = useRef(null);
  const galaxyCanvasRef = useRef(null);

  // Blinking stars animation with transition effect
  useEffect(() => {
    if (shouldLoadScene) return; // Don't run if scene is loaded

    // Use requestAnimationFrame to ensure canvas is ready
    const initCanvas = () => {
      const canvas = galaxyCanvasRef.current;
      if (!canvas) {
        requestAnimationFrame(initCanvas);
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size to match container
      const container = canvas.parentElement;
      const width = container?.offsetWidth || window.innerWidth;
      const height = container?.offsetHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Create stars randomly distributed across the canvas
      const stars = [];
      const numStars = 800;

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          baseOpacity: Math.random() * 0.8 + 0.2,
          blinkSpeed: Math.random() * 2 + 0.5, // Faster blink speed (0.5 to 2.5)
          blinkPhase: Math.random() * Math.PI * 2, // Random starting phase
          brightness: Math.random() * 0.5 + 0.5
        });
      }

      let animationTime = 0;
      let animationId;
      let lastTime = performance.now();

      const animate = (currentTime) => {
        if (shouldLoadScene) {
          if (animationId) cancelAnimationFrame(animationId);
          return;
        }

        // Handle resize
        const currentWidth = canvas.parentElement?.offsetWidth || window.innerWidth;
        const currentHeight = canvas.parentElement?.offsetHeight || window.innerHeight;
        if (canvas.width !== currentWidth || canvas.height !== currentHeight) {
          canvas.width = currentWidth;
          canvas.height = currentHeight;
          // Redistribute stars on resize
          stars.forEach(star => {
            star.x = Math.random() * currentWidth;
            star.y = Math.random() * currentHeight;
          });
        }

        // Update animation time using performance.now() for smooth animation
        const now = performance.now();
        const deltaTime = (now - lastTime) / 1000; // Convert to seconds
        lastTime = now;
        animationTime += deltaTime;

        // Clear canvas with dark blue-black background
        ctx.fillStyle = '#000011';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw blinking stars
        stars.forEach(star => {
          // Calculate blinking brightness using sine wave
          const blinkValue = (Math.sin(animationTime * star.blinkSpeed + star.blinkPhase) + 1) / 2;
          // Blink between 20% and 100% brightness for more noticeable effect
          const currentBrightness = 0.2 + (blinkValue * 0.8);
          const opacity = star.baseOpacity * currentBrightness * star.brightness;

          // Draw star
          ctx.globalAlpha = opacity;
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = star.size > 1.5 ? 3 : 1;
          ctx.shadowColor = '#ffffff';
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;

        animationId = requestAnimationFrame(animate);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        const newWidth = canvas.parentElement?.offsetWidth || window.innerWidth;
        const newHeight = canvas.parentElement?.offsetHeight || window.innerHeight;
        canvas.width = newWidth;
        canvas.height = newHeight;
        // Redistribute stars on resize
        stars.forEach(star => {
          star.x = Math.random() * newWidth;
          star.y = Math.random() * newHeight;
        });
      };
      window.addEventListener('resize', handleResize);

      return () => {
        if (animationId) cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
      };
    };

    initCanvas();
  }, [shouldLoadScene]);

  // Space Travel Scene Setup
  const setupSpaceTravelScene = (scene, onAnimationComplete) => {
    const engine = scene.getEngine();
    const canvas = scene.getEngine().getRenderingCanvas();

    // Clear default camera
    scene.activeCamera?.dispose();

    // Create free camera for space travel
    const camera = new BABYLON.FreeCamera(
      "camera",
      new BABYLON.Vector3(0, 0, -10),
      scene
    );
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false); // Don't allow manual control during animation

    // Set black background
    scene.clearColor = new BABYLON.Color3(0, 0, 0);
    scene.activeCamera = camera;

    // ==============================
    // STAR PARTICLE SYSTEM
    // ==============================
    const stars = new BABYLON.ParticleSystem("stars", 10000, scene);

    stars.particleTexture = new BABYLON.Texture(
      "https://playground.babylonjs.com/textures/flare.png",
      scene
    );

    stars.minEmitBox = new BABYLON.Vector3(-90, -90, 50);
    stars.maxEmitBox = new BABYLON.Vector3(90, 90, 320);

    stars.color1 = new BABYLON.Color4(1, 1, 1, 1);
    stars.color2 = new BABYLON.Color4(0.85, 0.9, 1, 1);

    stars.emitRate = 5500;
    stars.minLifeTime = 6;
    stars.maxLifeTime = 8;
    stars.minSize = 0.15;
    stars.maxSize = 0.3;
    stars.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;

    // ==============================
    // GLOW LAYER
    // ==============================
    const glow = new BABYLON.GlowLayer("glow", scene);
    glow.intensity = 1.5;

    // ==============================
    // CENTER ENERGY CORE
    // ==============================
    const core = BABYLON.MeshBuilder.CreateDisc(
      "core",
      { radius: 0.5, tessellation: 64 },
      scene
    );
    core.position.set(0, 0, 0);
    core.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
    core.setEnabled(false);

    const coreMat = new BABYLON.StandardMaterial("coreMat", scene);
    coreMat.emissiveColor = new BABYLON.Color3(0.9, 0.95, 1);
    coreMat.disableLighting = true;
    core.material = coreMat;

    // ==============================
    // WARP PARAMETERS
    // ==============================
    const SPEED = 230;
    const STREAK_START = 90;   // where streak begins
    const STREAK_END = 30;     // full streak near camera
    const MAX_STREAK = 80;
    const CENTER_HOLE = 8; // Increased exclusion zone to prevent center streaks
    let coreSize = 0;
    const CORE_GROWTH_RATE = 2.5; // units per second
    const CORE_MAX_SIZE = 800;
    let elapsed = 0;
    let coreVisible = false;
    const SLOW_RATE = 2;        // initial normal speed
    const FAST_RATE = 18;       // very fast later
    const SLOW_PHASE_LIMIT = 3;

    function pushOutOfCenter(p) {
      const d = Math.sqrt(p.position.x ** 2 + p.position.y ** 2);
      if (d < CENTER_HOLE) {
        const a = Math.random() * Math.PI * 2;
        // Push to edge of exclusion zone with some randomness
        const pushDistance = CENTER_HOLE + Math.random() * 5;
        p.position.x = Math.cos(a) * pushDistance;
        p.position.y = Math.sin(a) * pushDistance;
      }
    }

    stars.updateFunction = function (particles) {
      const dt = engine.getDeltaTime() * 0.001;
      elapsed += dt;

      // ===== CORE APPEAR =====
      if (elapsed > 6 && !coreVisible) {
        core.setEnabled(true);
        core.scaling.setAll(0.01);
        coreVisible = true;
      }
// ===== CONSTANT RATE GROWTH =====
if (coreVisible && coreSize < CORE_MAX_SIZE) {
  coreSize += CORE_GROWTH_RATE * dt;
  coreSize = Math.min(coreSize, CORE_MAX_SIZE);
  core.scaling.setAll(coreSize);
}
if (coreVisible && coreSize < CORE_MAX_SIZE) {
  let growthRate =
      coreSize < SLOW_PHASE_LIMIT ? SLOW_RATE : FAST_RATE;

  coreSize += growthRate * dt;
  coreSize = Math.min(coreSize, CORE_MAX_SIZE);
  core.scaling.setAll(coreSize);
}


      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move star
        p.position.z -= SPEED * dt;

        // Continuously push particles away from center (not just on loop)
        pushOutOfCenter(p);

        // Direction
        p.angle = Math.atan2(p.position.y, p.position.x);

        // ==============================
        // PROGRESSIVE STREAK GROWTH
        // ==============================
        // Only create streaks if particle is outside center exclusion zone
        const distFromCenter = Math.sqrt(p.position.x ** 2 + p.position.y ** 2);
        if (distFromCenter > CENTER_HOLE && p.position.z < STREAK_START) {
          const t = BABYLON.Scalar.Clamp(
            (STREAK_START - p.position.z) / (STREAK_START - STREAK_END),
            0,
            1
          );

          // Apply easing for slow, gradual growth (ease-in cubic for smooth slow start)
          // Using t^3 makes it start very slowly and gradually speed up
          const easedT = t * t * t; // Cubic ease-in for slow growth
          // Alternative: use t^2 for quadratic (slightly faster) or Math.pow(t, 2.5) for in-between

          // Length grows from 0 → MAX with slow easing
          p.scale.x = easedT * MAX_STREAK;
          p.scale.y = BABYLON.Scalar.Lerp(1, 0.25, easedT);
        } else {
          // Dot (or hidden if too close to center)
          p.scale.x = 0;
          p.scale.y = distFromCenter > CENTER_HOLE ? 1 : 0; // Hide particles in center
        }

        // Loop
        if (p.position.z < -20) {
          p.position.z = 320;
          p.position.x = BABYLON.Scalar.RandomRange(-90, 90);
          p.position.y = BABYLON.Scalar.RandomRange(-90, 90);
          pushOutOfCenter(p);
          p.scale.x = 0;
          p.scale.y = 1;
        }
      }
    };

    stars.start();

    // Handle animation completion
    const travelDuration = 9000; // 8 seconds in milliseconds
    const startTime = Date.now();

    const beforeRenderObserver = scene.onBeforeRenderObservable.add(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime >= travelDuration) {
        // Animation complete - clean up and transition
        scene.onBeforeRenderObservable.remove(beforeRenderObserver);
        stars.dispose();
        glow.dispose();
        core.dispose();
        coreMat.dispose();
        camera.dispose();
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }
    });
  };

  const onSceneReady = async (scene) => {
    const engine = scene.getEngine();
    const canvas = scene.getEngine().getRenderingCanvas();
   // scene.debugLayer.show();
    // Check scene type and load appropriate scene
    if (sceneType === 'spaceTravel') {
      setupSpaceTravelScene(scene, () => {
        // After space travel animation completes, switch to portfolio scene
        setTimeout(() => {
          setSceneType('portfolio');
        }, 600); // Small delay for smooth transition
      });
      return;
    }

    // Portfolio scene setup (existing code)
  //  const {starTexture}=setupSimpleStarfield(scene);
    scene.clearColor = new BABYLON.Color3(0, 0, 0);

    // Intermediate position the camera should move to
    const intermediatePosition = new BABYLON.Vector3(-9.458373784231779, 5.394242042078482, -27.77824032671519);
    const intermediatePosition2 = new BABYLON.Vector3(-7.458373784231779, 8.394242042078482, -27.77824032671519);
    // Target to look at
    const finalTarget = new BABYLON.Vector3(1, 4, -30);

    // Create FreeCamera
    const camera = new BABYLON.FreeCamera(
      "camera",
      intermediatePosition.clone(),
      scene
    );
   

    // Set camera to look at the final target initially
    camera.setTarget(finalTarget);
    
    // Attach camera controls (mouse/keyboard)
    //camera.attachControl(canvas, true);
    
    // Set camera movement speed
    camera.speed = 2;
    camera.angularSensibility = 2000;

    // Animate the camera position directly
     // Add an ArcRotateCamera
     var arcCamera = new BABYLON.ArcRotateCamera(
      "camera",
      0,
      1.5,
      1,
      new BABYLON.Vector3(1, 8.5, -38),
      scene
    );
  
      BABYLON.Animation.CreateAndStartAnimation(
        "moveAnimation2",
        camera,
        "position",
        30,
        120, // 4 seconds at 30fps
        intermediatePosition,
        intermediatePosition2,
        0
      ).onAnimationEndObservable.add(() => {
        camera.dispose();
        arcCamera.radius = 5;
        scene.activeCamera = arcCamera;
        scene.activeCamera.attachControl(canvas, true);
        scene.activeCamera.lowerRadiusLimit = 0;
        scene.activeCamera.upperRadiusLimit = 8;
    });
   


 
   
    if (isrunning) {
      engine.runRenderLoop(() => {
        scene.render();
      });
    }

    var check = false;
    let lampon = false;
    const lamp = new BABYLON.PointLight(
      "lamp",
      new BABYLON.Vector3(-0.08, 2.26, -47.98),
      scene
    );
    lamp.diffuse = new BABYLON.Color3(1, 1, 0);
    lamp.intensity = 0;
    // createInformationbar();

    const planeOpts = {
      height: 2.5,
      width: 4.1,
      sideOrientation: BABYLON.Mesh.DOUBLESIDE,
    };
    const ANote0Video = BABYLON.MeshBuilder.CreatePlane(
      "plane",
      planeOpts,
      scene
    );
    const vidPos = new BABYLON.Vector3(-12.32, 8.61, -26.06);
    ANote0Video.position = vidPos;
    ANote0Video.rotation = new BABYLON.Vector3(0, -Math.PI / 2, 0);

    BABYLON.SceneLoader.ImportMeshAsync(
      null,
      "./models/",
      "portfolio-1.glb",
      scene
    ).then(() => {
      BABYLON.NodeMaterial.ParseFromSnippetAsync("#ZJ8KVZ#4", scene).then(
        function (nodeMaterial) {
          // Find the mesh by its name
          //const wall3 = scene.getMeshByName("wall3");
          // if (wall3) {
          // Assign the node material to the wall3 mesh
          //  wall3.material = nodeMaterial;
          // } else {
          //   console.error("Mesh with name 'wall3' not found!");
          // }
        }
      );
      const drawer =  scene.getMeshByName("Drawer_primitive0");
      const drawerbase=scene.getMeshByName("Drawer_primitive1");
      
      if(drawer)
      {
        
      BABYLON.Animation.CreateAndStartAnimation(
        "moveDrawerZ",
        drawer,
        "position.z",
        30,
        60,
        drawer.position.z,
        drawer.position.z + 0.75,
        0
      );
      BABYLON.Animation.CreateAndStartAnimation(
        "moveDrawerZ",
        drawerbase,
        "position.z",
        30,
        60,
        drawer.position.z,
        drawer.position.z + 0.75,
        0
      );
      setTimeout(function(){ BABYLON.Animation.CreateAndStartAnimation(
        "moveDrawerZ",
        drawer,
        "position.z",
        30,
        60,
        drawer.position.z,
        drawer.position.z - 0.75,
        0
      );
      BABYLON.Animation.CreateAndStartAnimation(
        "moveDrawerZ",
        drawerbase,
        "position.z",
        30,
        60,
        drawer.position.z,
        drawer.position.z - 0.75,
        0
      );},7000)
      }
      scene.onPointerDown = function castRay() {
        const ray = scene.createPickingRay(
          scene.pointerX,
          scene.pointerY,
          BABYLON.Matrix.Identity(),
          scene.activeCamera
        );
        const hit = scene.pickWithRay(ray);
        if (hit.pickedMesh.name == "car" && hit.pickedMesh) {
          const photo = hit.pickedMesh;
          const frame = scene.getMeshByName("carframe");

          if (photo.position.x >= 14.9) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              photo,
              "position.x",
              30,
              60,
              photo.position.x,
              photo.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              60,
              frame.position.x,
              frame.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              photo,
              "position.y",
              30,
              60,
              photo.position.y,
              photo.position.y - 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              60,
              frame.position.y,
              frame.position.y - 2,
              0
            );
          }
          if (photo.position.x < 14.9) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              photo,
              "position.x",
              30,
              60,
              photo.position.x,
              14.9,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              60,
              frame.position.x,
              14.9,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              photo,
              "position.y",
              30,
              60,
              photo.position.y,
              10.45,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              60,
              frame.position.y,
              10.45,
              0
            );
          }

          createGUIButton(
            "https://github.com/ryuga123677/mobile-car-simulation",
            "Open Project"
          );
        }
        if (hit.pickedMesh.name == "todo.001" && hit.pickedMesh) {
          const photo = hit.pickedMesh;
          const frame = scene.getMeshByName("todo");
          if (photo.position.x >= 14.92) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              photo,
              "position.x",
              30,
              60,
              photo.position.x,
              photo.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              60,
              frame.position.x,
              frame.position.x - 10,
              0
            );
          }
          if (photo.position.x < 14.92) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              photo,
              "position.x",
              30,
              60,
              photo.position.x,
              14.92,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              60,
              frame.position.x,
              14.92,
              0
            );
          }

          createGUIButton(
            "https://github.com/ryuga123677/Chat-Todo-app",
            "Open Project"
          );
        }
        if (hit.pickedMesh.name == "mouse.001" && hit.pickedMesh) {
          const mouse = hit.pickedMesh;
          const frame = scene.getMeshByName("mouse");

          if (mouse.position.x >= 14.97) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              mouse,
              "position.x",
              30,
              60,
              mouse.position.x,
              mouse.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              60,
              frame.position.x,
              frame.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              mouse,
              "position.y",
              30,
              60,
              mouse.position.y,
              mouse.position.y - 4,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              60,
              frame.position.y,
              frame.position.y - 4,
              0
            );
          }
          if (mouse.position.x < 14.97) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              mouse,
              "position.x",
              30,
              60,
              mouse.position.x,
              14.97,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              60,
              frame.position.x,
              14.97,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              mouse,
              "position.y",
              30,
              60,
              mouse.position.y,
              12.45,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              60,
              frame.position.y,
              12.45,
              0
            );
          }

          createGUIButton(
            "https://github.com/ryuga123677/Mouse-runner",
            "Open Project"
          );
        }
        if (hit.pickedMesh.name == "hospital" && hit.pickedMesh) {
          const hospital = hit.pickedMesh;
          const frame = scene.getMeshByName("hospital2");
          if (hospital.position.x >= 14.92) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              hospital,
              "position.x",
              30,
              60,
              hospital.position.x,
              hospital.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              60,
              frame.position.x,
              frame.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              hospital,
              "position.y",
              30,
              60,
              hospital.position.y,
              hospital.position.y - 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              60,
              frame.position.y,
              frame.position.y - 2,
              0
            );
          }
          if (hospital.position.x < 14.92) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              hospital,
              "position.x",
              30,
              60,
              hospital.position.x,
              14.92,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              60,
              frame.position.x,
              14.92,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              hospital,
              "position.y",
              30,
              60,
              hospital.position.y,
              10.41,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              60,
              frame.position.y,
              10.41,
              0
            );
          }

          createGUIButton(
            "https://github.com/ryuga123677/Hospital_Management",
            "Open Project"
          );
        }
        if (hit.pickedMesh.name == "Screenshot (543)" && hit.pickedMesh) {
          const hospital = hit.pickedMesh;
          const frame = scene.getMeshByName("snake.001");
          if (hospital.position.x >= 14.94) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              hospital,
              "position.x",
              30,
              60,
              hospital.position.x,
              hospital.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              60,
              frame.position.x,
              frame.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              hospital,
              "position.y",
              30,
              60,
              hospital.position.y,
              hospital.position.y - 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              60,
              frame.position.y,
              frame.position.y - 2,
              0
            );
          }
          if (hospital.position.x < 14.94) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              hospital,
              "position.x",
              30,
              60,
              hospital.position.x,
              14.94,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              60,
              frame.position.x,
              14.94,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              hospital,
              "position.y",
              30,
              60,
              hospital.position.y,
              10.46,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              60,
              frame.position.y,
              10.46,
              0
            );
          }

          createGUIButton(
            "https://github.com/ryuga123677/Snake-and-Ladder",
            "Open Project"
          );
        }
        console.log(hit.pickedMesh.name)
        if (hit.pickedMesh.name == "Chair_primitive0" && hit.pickedMesh) {
          var chair = scene.getMeshByName("Chair_primitive0");
          var chairpipe = scene.getMeshByName("Chair_primitive1");
          var chairbase = scene.getMeshByName("chairbase");
          if (chair.position.x < 9.36) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              chair,
              "position.x",
              30,
              60,
              chair.position.x,
              chair.position.x + 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              chairpipe,
              "position.x",
              30,
              60,
              chairpipe.position.x,
              chairpipe.position.x + 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              chairbase,
              "position.x",
              30,
              60,
              chairbase.position.x,
              chairbase.position.x + 2,
              0
            );
          }
          if (chair.position.x > 9.35) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              chair,
              "position.x",
              30,
              60,
              chair.position.x,
              chair.position.x - 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              chairpipe,
              "position.x",
              30,
              60,
              chairpipe.position.x,
              chairpipe.position.x - 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              chairbase,
              "position.x",
              30,
              60,
              chairbase.position.x,
              chairbase.position.x - 2,
              0
            );
          }
        }
        if (
          hit.pickedMesh.name == "plane" &&
          hit.pickedMesh &&
          check == false
        ) {
         
          // setCheck(true);

          var ANote0VideoMat = new BABYLON.StandardMaterial("m", scene);
          var ANote0VideoVidTex = new BABYLON.VideoTexture(
            "vidtex",
            myIntroVideo,
            scene
          );
          ANote0VideoMat.diffuseTexture = ANote0VideoVidTex;
          ANote0VideoMat.roughness = 100;
          ANote0VideoMat.emissiveColor = BABYLON.Color3.Black();
          ANote0Video.material = ANote0VideoMat;

          scene.activeCamera.target = ANote0Video;
      
          const DEG60=BABYLON.Tools.ToRadians(60);
          // ALPHA (horizontal rotation)
scene.activeCamera.lowerAlphaLimit = -DEG60;
scene.activeCamera.upperAlphaLimit = DEG60;



          pointLight.intensity = 2;

          ANote0VideoVidTex.video.play();

          check = true;

          const guiCanvas = AdvancedDynamicTexture.CreateFullscreenUI("UI");
          const guiButton = Button.CreateSimpleButton("guiButton", "Exit");
          guiButton.width = "150px";
          guiButton.height = "40px";
          guiButton.top = "300px";
          guiButton.color = "white";
          guiButton.cornerRadius = 5;
          guiButton.background = "#853824";

          guiButton.onPointerUpObservable.add(() => {
            ANote0VideoVidTex.video.pause();
            guiCanvas.dispose();
            check = false;
            scene.activeCamera.target = new BABYLON.Vector3(1, 8.5, -38);
            scene.activeCamera.alpha=0;
            scene.activeCamera.lowerAlphaLimit = null;
            scene.activeCamera.upperAlphaLimit = null;
      

            pointLight.intensity = 800;
          });

          guiButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
          guiCanvas.addControl(guiButton);
        }
        if (hit.pickedMesh.name == "resume" && hit.pickedMesh) {
          const hospital = hit.pickedMesh;

          createGUIButton(
            "https://drive.google.com/file/d/1wN6vqSVbpScyIGPUJFxk7gICAJ0R20BC/view?usp=drivesdk/ ",
            "Open Resume"
          );
        }
        if (
          hit.pickedMesh.name == "Lamp" &&
          hit.pickedMesh &&
          lampon == false
        ) {
          lampon = true;

          lamp.intensity = 100;

          console.log("true");
        } else if (
          hit.pickedMesh.name == "Lamp" &&
          hit.pickedMesh &&
          lampon == true
        ) {
          lampon = false;
          lamp.intensity = 0;
        }
      };
    });
    const createtext = async (name, x, y, z, siz = 0.5, rot = Math.PI / 2) => {
      var fontData = await (
        await fetch(
          "https://assets.babylonjs.com/fonts/Droid Sans_Regular.json"
        )
      ).json();
      var myText = BABYLON.MeshBuilder.CreateText("myText", name, fontData, {
        size: siz,
        resolution: 64,
        depth: 0.55,
        faceUV: [
          new BABYLON.Vector4(0, 0, 1, 1),
          new BABYLON.Vector4(0, 0, 1, 1),
          new BABYLON.Vector4(0, 0, 1, 1),
        ],
      });
      myText.position = new BABYLON.Vector3(x, y, z);
      myText.rotation = new BABYLON.Vector3(0, rot, 0);
      var yellowMaterial = new BABYLON.StandardMaterial(
        "yellowMaterial",
        scene
      );

      yellowMaterial.diffuseColor = BABYLON.Color3.Black;

      yellowMaterial.roughness = 2;
      myText.material = yellowMaterial;
    };

    createtext("Work Experience", 15, 12.87, -37);

    createtext("Projects", -14.92, 13.98, -36.98, 0.5, -Math.PI / 2);
    createtext("Resume", 0.51, 13.72, -19.81, 0.5, 2 * Math.PI);
    // scene.debugLayer.show({
    //   embedMode: true,
    // });



    const pointLight = new BABYLON.PointLight(
      "pointLight",
      new BABYLON.Vector3(0.1, 15.62, -35.2), // Position of the light
      // Light decay
      scene
    );
    pointLight.intensity = 800;
    pointLight.diffuse = new BABYLON.Color3(
      0.9803921568627451,
      0.9882352941176471,
      0.6431372549019608
    );
    const spotLight = new BABYLON.SpotLight(
      "areaLight",
      new BABYLON.Vector3(-7.02, 14.32, -36.68), // Position of the light
      new BABYLON.Vector3(-0.83, -0.56, 0), // Direction pointing down
      127.7, // Wide angle to cover a large area
      2, // Light decay
      scene
    );
    spotLight.intensity = 500;
    spotLight.diffuse = new BABYLON.Color3(0.5647058823529412, 0.5803921568627451, 0.1843137254901961);



    function moveMesh(mesh, x, y = null) {
      BABYLON.Animation.CreateAndStartAnimation(
        "moveAnimation",
        mesh,
        "position.x",
        30,
        120,
        mesh.position.x,
        mesh.position.x + x,
        0
      );
      if (y !== null) {
        BABYLON.Animation.CreateAndStartAnimation(
          "moveAnimation",
          mesh,
          "position.z",
          30,
          120,
          mesh.position.z,
          mesh.position.z + y,
          0
        );
      }
    }

    function createGUIButton(url, name) {
      const guiCanvas = AdvancedDynamicTexture.CreateFullscreenUI("UI");

      // Main button
      const guiButton = Button.CreateSimpleButton("guiButton", name);
      guiButton.width = "150px";
      guiButton.height = "40px";
      guiButton.top = "30px";
      guiButton.color = "white";
      guiButton.cornerRadius = 5;
      guiButton.background = "#853824";
      guiButton.onPointerUpObservable.add(() => {
        window.open(url, "newtab", "status=1,fullscreen=1");
        guiCanvas.dispose();
      });
      guiButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
      guiButton.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
      guiCanvas.addControl(guiButton);
    //cloose button
      const closeButton = Button.CreateSimpleButton("closeButton", "X"); // Use "X" as button text
      closeButton.width = "40px";
      closeButton.height = "40px";
      closeButton.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
      closeButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
      closeButton.top = "30px";
      closeButton.left="100px"
   
     
      closeButton.color = "#853824"; // Color of the "X"
      closeButton.background = "transparent"; // Make background transparent
      closeButton.fontSize = "20px"; // Adjust font size as needed
    
      closeButton.onPointerUpObservable.add(() => {
        guiCanvas.dispose(); // Dispose of the GUI when the close button is clicked
      });
    
      guiCanvas.addControl(closeButton); 
    }
    
    
  };

  const onRender = (scene) => {
    // Custom render logic
  };
  const handleclick = () => {
    setisRunning(false);
    setIsVisible(false);
    setSceneType('spaceTravel'); // Start with space travel scene
    setShouldLoadScene(true);
  };
  const handleproject = () => {
    setanim(true);

    const handleScroll = () => {
      // Use setTimeout to ensure DOM has updated with Projects component
      setTimeout(() => {
        window.scrollTo({
          top: 1000, 
          behavior: "smooth", 
        });
      }, 100);
    };

    setTimeout(function(){
      setanim(false);
      setproject(true);
      handleScroll();
    },8000);
  };
  return (
    <>
      <div className="relative w-full" style={{ height: '91vh', minHeight: '91vh', backgroundColor: '#000011' }}>
        {!shouldLoadScene && (
          <canvas
            ref={galaxyCanvasRef}
            className="absolute inset-0 w-full"
            style={{ backgroundColor: '#000011', width: '100%', height: '100%' }}
          />
        )}
    
        {shouldLoadScene && (
          <BabylonScene
            key={sceneType} // Force remount when scene type changes
            antialias
            onSceneReady={onSceneReady}
            onRender={onRender}
            id="babylon-canvas"
            className="h-[91vh] w-full flex justify-center"
          />
        )}
      
        {isVisible && (
          <>
            {!shouldLoadScene ? (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-xl space-x-2">
                  <button className='rounded bg-white hover:scale-125 transition-all border-2 p-2 m-4 text-black' onClick={handleclick}>Dive into Scene</button>
                  <button onClick={handleproject} className='rounded hover:scale-125 transition-all p-2 m-4 bg-transparent border-2 border-white text-white'>Open Projects</button>
                </div>
              </div>
            ) : (
              <Buttons onChange={handleclick} onprojectclick={handleproject} />
            )}
          </>
        )}
        
        {anim && !projectview && <Card1/>}
        {anim && !projectview &&<Card2/>}
        {anim && !projectview &&<Card3/>}
        {anim && !projectview &&<Card4/>}
        {anim && !projectview &&<Card5/>}
        {anim && !projectview &&<Card6/>}
      
      </div>
      { projectview && <Projects/>}
      
    </>
  );
};

export default Portfolio;
