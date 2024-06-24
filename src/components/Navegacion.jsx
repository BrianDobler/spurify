import React from "react";

export const IconoNavAtras = () => (
  <svg
    height="16"
    fill="currentColor"
    width="16"
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path
      d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06
         1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"
    ></path>
  </svg>
);
export function NavegacionAtras() {
  const NavAtras = () => {
    window.history.back();
  };

  return (
    <button
      onClick={NavAtras}
      className="rounded-full p-2 bg-black bg-opacity-70 transition
      transform duration-200 ease-in-out hover:scale-105"
    >
      <IconoNavAtras />
    </button>
  );
}
