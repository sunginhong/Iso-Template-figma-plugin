import React, { useRef } from "react";

interface Props {
  fontColor: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  masking: boolean;
}

const CountDash_Guide_re: React.FC<Props> = ({
  fontColor,
  fontFamily,
  fontSize,
  fontWeight,
  masking,
}) => {
  const dashRef = useRef<HTMLDivElement>(null);

  const style: React.CSSProperties = {
    display: "inline-block",
    overflow: "overlay",
    overflowX: "visible",
    color: fontColor,
    fontFamily,
    fontSize: `${fontSize}px`,
    fontWeight,
    WebkitMaskImage: masking
      ? "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 1) 9%, rgba(0, 0, 0, 1) 91%, transparent 100%)"
      : undefined,
    maskImage: masking
      ? "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 1) 9%, rgba(0, 0, 0, 1) 91%, transparent 100%)"
      : undefined,
  };

  return (
    <div ref={dashRef} style={style}>
      :
    </div>
  );
};

export default CountDash_Guide_re;
