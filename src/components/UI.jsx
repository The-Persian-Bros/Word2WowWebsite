// src/components/UI.jsx

import { atom, useAtom } from "jotai";
import { useEffect } from "react";

// Define your pages with front and back textures
const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  // Function to handle page click and play audio
  const handlePageClick = (index) => {
    setPage(index);
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play().catch((error) => {
      console.error("Audio play failed:", error);
    });
  };

  return (
    <div className="page-controls">
      {[...pages].map((_, index) => (
        <button
          key={index}
          className={`page-button ${
            index === page ? "active" : ""
          }`}
          onClick={() => handlePageClick(index)}
        >
          {index === 0 ? "Cover" : `Page ${index}`}
        </button>
      ))}
      <button
        className={`page-button ${
          page === pages.length ? "active" : ""
        }`}
        onClick={() => handlePageClick(pages.length)}
      >
        Back Cover
      </button>
    </div>
  );
};
