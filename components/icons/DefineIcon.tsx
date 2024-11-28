export interface IIcon {
  className?: string;
  width?: string;
  height?: string;
}

const DefineIcon: React.FC<IIcon> = ({ className, width, height }) => {
  return (
    <svg
      className={className || ""}
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V5.25H6H0V4ZM0 6.75V16C0 18.2091 1.79086 20 4 20H5.25V13V6.75H0ZM6.75 20H16C18.2091 20 20 18.2091 20 16V13.75L6.75 13.75V20ZM20 12.25V6.75L6.75 6.75V12.25L20 12.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DefineIcon;
