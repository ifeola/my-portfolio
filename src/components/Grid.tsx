import style from "../styles/grid.module.css";

export default function Grid() {
  return (
    <svg aria-hidden="true" className={style.grid__box}>
      <defs>
        <pattern
          id=":Rkh7qbt6ja:"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          x="-1"
          y="-1">
          <path d="M.5 20V.5H20" fill="none" strokeDasharray="0"></path>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#:Rkh7qbt6ja:)"></rect>
    </svg>
  );
}
