// src/components/SeeItInAction.jsx

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";

const SeeItInAction = () => {
  return (
    <section id="see-it-in-action" className="see-it-in-action">
      <Canvas
        shadows
        camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
          fov: 45,
        }}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <UI />
    </section>
  );
};

export default SeeItInAction;
