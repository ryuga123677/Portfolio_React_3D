/**
 * Starfield Environment with Blinking White Stars
 * Creates a starry night sky with blinking white stars for Babylon.js scenes
 * Matches the canvas starfield properties (color, size, intensity, blinking)
 */

import * as BABYLON from "@babylonjs/core";

/**
 * Helper function to convert hex color to RGB
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 255, g: 255, b: 0 };
}

/**
 * Create a blinking starfield texture with white stars
 * Stars will blink/twinkle with varying speeds (matching canvas properties)
 */
export function createBlinkingStarfield(scene, width = 2048, height = 2048, starCount=800) {
  const texture = new BABYLON.DynamicTexture("blinkingStarfield", { width, height }, scene);
  const context = texture.getContext();
  
  // Store star data for animation
  const stars = [];
  
  // Dark blue-black background (matching canvas)
  context.fillStyle = "#000011";
  context.fillRect(0, 0, width, height);
  
  // Create stars with white color (matching canvas)
  for (let i = 0; i < starCount; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    
    // Store star data for blinking animation (matching canvas properties)
    stars.push({
      x,
      y,
      baseSize: Math.random() * 2 + 0.5, // Size: 0.5 to 2.5 (matching canvas)
      baseOpacity: Math.random() * 0.8 + 0.2, // Opacity: 0.2 to 1.0 (matching canvas)
      blinkSpeed: Math.random() * 2 + 0.5, // Blink speed: 0.5 to 2.5 (matching canvas)
      blinkPhase: Math.random() * Math.PI * 2, // Random starting phase
      brightness: Math.random() * 0.5 + 0.5, // Brightness: 0.5 to 1.0 (matching canvas)
    });
  }
  
  // Function to redraw stars with blinking effect
  const updateStarfield = (deltaTime = 0.016) => {
    // Initialize or get animation time from texture
    if (!texture._animationTime) {
      texture._animationTime = 0;
    }
    texture._animationTime += deltaTime; // Accumulate time
    
    // Clear and redraw
    context.fillStyle = "#000000";
    context.fillRect(0, 0, width, height);
    
    stars.forEach(star => {
      // Calculate blinking brightness using sine wave (matching canvas)
      const blinkValue = (Math.sin(texture._animationTime * star.blinkSpeed + star.blinkPhase) + 1) / 2;
      // Blink between 20% and 100% brightness for more noticeable effect (matching canvas)
      const currentBrightness = 0.2 + (blinkValue * 0.8);
      // Calculate opacity using baseOpacity, currentBrightness, and brightness (matching canvas)
      const opacity = star.baseOpacity * currentBrightness * star.brightness;
      
      // Use white color (matching canvas)
      context.fillStyle = '#ffffff';
      context.globalAlpha = opacity;
      
      // Add glow effect for larger stars (matching canvas)
      context.shadowBlur = star.baseSize > 1.5 ? 3 : 1;
      context.shadowColor = '#ffffff';
      
      // Draw star
      context.beginPath();
      context.arc(star.x, star.y, star.baseSize, 0, Math.PI * 2);
      context.fill();
    });
    
    // Reset global alpha and shadow
    context.globalAlpha = 1;
    context.shadowBlur = 0;
    
    texture.update();
  };
  
  // Initial draw
  updateStarfield();
  
  // Store update function and stars data on texture for animation
  texture._updateStarfield = updateStarfield;
  texture._stars = stars;
  texture._animationTime = 0; // Initialize animation time
  
  return texture;
}

/**
 * Create a skybox with starfield texture
 * This creates a cube skybox around the scene
 */
export function createStarfieldSkybox(scene, starTexture, enableBlinking = false) {
  // Create skybox
  const skybox = BABYLON.MeshBuilder.CreateBox("skybox", { size: 5000 }, scene);
  
  // Create material for skybox
  const skyboxMaterial = new BABYLON.StandardMaterial("skyboxMaterial", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.disableLighting = true;
  
  // Use the starfield texture
  skyboxMaterial.diffuseTexture = starTexture;
  skyboxMaterial.diffuseTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  
  // Make it emissive so stars glow
  skyboxMaterial.emissiveTexture = starTexture;
  skyboxMaterial.emissiveTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  
  skybox.material = skyboxMaterial;
  
  // If blinking is enabled and texture has update function, set up animation
  if (enableBlinking && starTexture._updateStarfield && !starTexture._animationRegistered) {
    let lastTime = Date.now();
    
    // Register animation callback
    scene.registerBeforeRender(() => {
      const currentTime = Date.now();
      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1); // Cap deltaTime to prevent jumps
      lastTime = currentTime;
      if (starTexture._updateStarfield) {
        starTexture._updateStarfield(deltaTime);
      }
    });
    
    // Mark as registered to prevent duplicate registrations
    starTexture._animationRegistered = true;
  }
  
  return skybox;
}

/**
 * Complete setup function - combines skybox and environment with blinking white stars
 * This is the recommended approach for a full starfield environment
 */
export function setupStarfieldEnvironment(scene) {
  // Create the blinking starfield texture with white stars (1000 stars)
  const starTexture = createBlinkingStarfield(scene, 2048, 2048, 2000);
  
  // Create skybox with blinking enabled
  const skybox = createStarfieldSkybox(scene, starTexture, true);
  
  // Set scene background color to dark blue-black (matching canvas)
  scene.clearColor = new BABYLON.Color3(0, 0, 0.066); // #000011
  
  // Optional: Set fog for depth effect
  scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
  scene.fogDensity = 0.001;
  scene.fogColor = new BABYLON.Color3(0, 0, 0);
  
  return { skybox, starTexture };
}

/**
 * Simple starfield setup with fewer stars (better performance)
 */
export function setupSimpleStarfield(scene) {
  // Set dark blue-black background (matching canvas)
  scene.clearColor = new BABYLON.Color3(0, 0, 0.066); // #000011
  
  // Create a blinking starfield texture with 1000 stars
  const starTexture = createBlinkingStarfield(scene, 1024, 1024, 1000);
  
  // Create skybox with blinking enabled
  const skybox = createStarfieldSkybox(scene, starTexture, true);
  
  return { skybox, starTexture };
}


