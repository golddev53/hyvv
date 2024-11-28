export interface ITealExportIcon {
  className: string;
}

const TealExportIcon: React.FC<ITealExportIcon> = ({ className }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 5.49999L10.6 1.39999"
        stroke="#08657E"
        strokeWidth="1.05882"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 3.4V1H8.59998"
        stroke="#08657E"
        strokeWidth="1.05882"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 1H4.5C2 1 1 2 1 4.5V7.5C1 10 2 11 4.5 11H7.5C10 11 11 10 11 7.5V6.5"
        stroke="#08657E"
        strokeWidth="1.05882"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TealExportIcon;
