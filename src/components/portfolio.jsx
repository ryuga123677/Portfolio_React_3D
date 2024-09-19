import React, { useEffect, useRef } from "react";
import { Engine, Scene } from "@babylonjs/core";
import "@babylonjs/loaders";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/inspector";
//import "@babylonjs/gui";
import myIntroVideo from "../assets/video/myintro.mp4";
import earcut from "earcut";
import { AdvancedDynamicTexture, Button, Control } from "@babylonjs/gui";
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

  return <canvas ref={reactCanvas} {...rest} />;
};

const Portfolio = () => {
  const onSceneReady = async (scene) => {
    const engine = scene.getEngine();
    const canvas = scene.getEngine().getRenderingCanvas();
    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      0,
      1.5,
      1,
      new BABYLON.Vector3(1, 8.5, -38),
      scene
    );
    camera.attachControl(canvas, true);
    camera.radius = 5;
    var check = false;
    let lampon = false;
    const lamp = new BABYLON.PointLight(
      "lamp",
      new BABYLON.Vector3(-0.08, 2.26, -47.98),
      scene
    );
    lamp.diffuse = new BABYLON.Color3(1, 1, 0);
    lamp.intensity = 0;

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
      "portfolio.glb",
      scene
    ).then(() => {
      scene.onPointerDown = function castRay() {
        const ray = scene.createPickingRay(
          scene.pointerX,
          scene.pointerY,
          BABYLON.Matrix.Identity(),
          camera
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
              120,
              photo.position.x,
              photo.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              120,
              frame.position.x,
              frame.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              photo,
              "position.y",
              30,
              120,
              photo.position.y,
              photo.position.y - 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              120,
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
              120,
              photo.position.x,
              14.9,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              120,
              frame.position.x,
              14.9,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              photo,
              "position.y",
              30,
              120,
              photo.position.y,
              10.45,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              120,
              frame.position.y,
              10.45,
              0
            );
          }

          createGUIButton(
            "https://github.com/ryuga123677/mobile-car-simulation","Open Project"
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
              120,
              photo.position.x,
              photo.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              120,
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
              120,
              photo.position.x,
              14.92,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              120,
              frame.position.x,
              14.92,
              0
            );
          }

          createGUIButton("https://github.com/ryuga123677/Chat-Todo-app","Open Project");
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
              120,
              mouse.position.x,
              mouse.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              120,
              frame.position.x,
              frame.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              mouse,
              "position.y",
              30,
              120,
              mouse.position.y,
              mouse.position.y - 4,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              120,
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
              120,
              mouse.position.x,
              14.97,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              120,
              frame.position.x,
              14.97,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              mouse,
              "position.y",
              30,
              120,
              mouse.position.y,
              12.45,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              120,
              frame.position.y,
              12.45,
              0
            );
          }

          createGUIButton("https://github.com/ryuga123677/Mouse-runner","Open Project");
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
              120,
              hospital.position.x,
              hospital.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              120,
              frame.position.x,
              frame.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              hospital,
              "position.y",
              30,
              120,
              hospital.position.y,
              hospital.position.y - 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              120,
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
              120,
              hospital.position.x,
              14.92,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              120,
              frame.position.x,
              14.92,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              hospital,
              "position.y",
              30,
              120,
              hospital.position.y,
              10.41,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              120,
              frame.position.y,
              10.41,
              0
            );
          }

          createGUIButton("https://github.com/ryuga123677/Hospital_Management","Open Project");
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
              120,
              hospital.position.x,
              hospital.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              120,
              frame.position.x,
              frame.position.x - 10,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              hospital,
              "position.y",
              30,
              120,
              hospital.position.y,
              hospital.position.y - 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              120,
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
              120,
              hospital.position.x,
              14.94,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              frame,
              "position.x",
              30,
              120,
              frame.position.x,
              14.94,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              hospital,
              "position.y",
              30,
              120,
              hospital.position.y,
              10.46,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation2",
              frame,
              "position.y",
              30,
              120,
              frame.position.y,
              10.46,
              0
            );
          }

          createGUIButton("https://github.com/ryuga123677/Snake-and-Ladder","Open Project");
        }
        if (hit.pickedMesh.name == "chair" && hit.pickedMesh) {
          var chair = scene.getMeshByName("chair");
          var chairpipe = scene.getMeshByName("chairpipe");
          var chairbase = scene.getMeshByName("chairbase");
          if (chair.position.x < 9.36) {
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              chair,
              "position.x",
              30,
              120,
              chair.position.x,
              chair.position.x + 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              chairpipe,
              "position.x",
              30,
              120,
              chairpipe.position.x,
              chairpipe.position.x + 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              chairbase,
              "position.x",
              30,
              120,
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
              120,
              chair.position.x,
              chair.position.x - 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              chairpipe,
              "position.x",
              30,
              120,
              chairpipe.position.x,
              chairpipe.position.x - 2,
              0
            );
            BABYLON.Animation.CreateAndStartAnimation(
              "moveAnimation",
              chairbase,
              "position.x",
              30,
              120,
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
          console.log("yesss");
          // setCheck(true);

          var ANote0VideoMat = new BABYLON.StandardMaterial("m", scene);
          var ANote0VideoVidTex = new BABYLON.VideoTexture(
            "vidtex",
            myIntroVideo,
            scene,
          
          );
          ANote0VideoMat.diffuseTexture = ANote0VideoVidTex;
          ANote0VideoMat.roughness = 100;
          ANote0VideoMat.emissiveColor = BABYLON.Color3.Black();
          ANote0Video.material = ANote0VideoMat;

          camera.target = ANote0Video;
          bulb3.intensity = 1;
          bulb2.intensity = 1;

          ANote0VideoVidTex.video.play();

          check = true;

          const guiCanvas = AdvancedDynamicTexture.CreateFullscreenUI("UI");
          const guiButton = Button.CreateSimpleButton("guiButton", "Exit");
          guiButton.width = "150px";
          guiButton.height = "40px";
          guiButton.top = "300px";
          guiButton.color = "white";
          guiButton.cornerRadius = 5;
          guiButton.background = "green";

          guiButton.onPointerUpObservable.add(() => {
            ANote0VideoVidTex.video.pause();
            guiCanvas.dispose();
            check = false;
            camera.target = new BABYLON.Vector3(1, 8.5, -38);
            bulb3.intensity = 500;
            bulb2.intensity = 100;
          });

          guiButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
          guiCanvas.addControl(guiButton);
        }  if (hit.pickedMesh.name == "resume" && hit.pickedMesh) {
          const hospital = hit.pickedMesh;
        
        
          createGUIButton(
            "https://drive.google.com/file/d/1wN6vqSVbpScyIGPUJFxk7gICAJ0R20BC/view?usp=drivesdk/ ","Open Resume"
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
      yellowMaterial.diffuseColor = BABYLON.Color3.White();

      yellowMaterial.roughness = 1;
      myText.material = yellowMaterial;
    };

    createtext("Harshit's Tech Stack", 15, 14.57, -36.47);

    createtext("Projects", -14.92, 13.98, -36.98, 0.5, -Math.PI / 2);
    createtext("Resume", 0.51, 13.72, -19.81, 0.5, 2 * Math.PI);
    // scene.debugLayer.show({
    //   embedMode: true,
    // });

    camera.lowerRadiusLimit = 0;
     camera.upperRadiusLimit = 8;

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var bulb1 = new BABYLON.PointLight(
      "light1",
      new BABYLON.Vector3(-12.95, 14.73, -23.0),
      scene
    );
    var emitterPosition = new BABYLON.Vector3(10, 1, 10);
    var emitterMesh = new BABYLON.Mesh("emitterMesh", scene);
    emitterMesh.position = new BABYLON.Vector3(0, 0, 1); // Set the initial position of the emitter mesh

    // Default intensity is 1. Let's dim the light a small amount
    bulb1.intensity = 150;
    var bulb2 = new BABYLON.PointLight(
      "light2",
      new BABYLON.Vector3(0.6, 15.09, -47.06),
      scene
    );
    bulb2.intensity = 200;
    var bulb3 = new BABYLON.PointLight(
      "light3",
      new BABYLON.Vector3(0.09, 15.63, -35.14),
      scene
    );
    bulb3.intensity = 500;
    var bulb4 = new BABYLON.PointLight(
      "light4",
      new BABYLON.Vector3(1.38, 15.79, -46.75),
      scene
    );
    bulb4.intensity = 300;

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

    function createGUIButton(url,name) {
      const guiCanvas =
        AdvancedDynamicTexture.CreateFullscreenUI("UI");
      const guiButton =Button.CreateSimpleButton(
        "guiButton",
        name
      );
      guiButton.width = "150px";
      guiButton.height = "40px";
      guiButton.top = "300px";
      guiButton.color = "white";
      guiButton.cornerRadius = 5;
      guiButton.background = "green";
      guiButton.onPointerUpObservable.add(() => {
        window.open(url, "newtab", "status=1,fullscreen=1");
            guiCanvas.dispose();
      });
      guiButton.verticalAlignment =
       Control.VERTICAL_ALIGNMENT_CENTER;
      guiCanvas.addControl(guiButton);
    }


  };

  const onRender = (scene) => {
    // Custom render logic
  };

  return (
    <div style={{ flex: 1, display: "flex", width: "100vw", height: "100vh"}}>
      <BabylonScene
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id="babylon-canvas"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Portfolio;
