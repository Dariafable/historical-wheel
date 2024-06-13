import React from "react";
export const usePreviousValue = (value: any) => {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current || 0;
};
