import React from "react";
import { useLocation } from "react-router-dom/dist";

export default function Works() {
  const location = useLocation();

  return (
    <div>
      <button>버튼</button>
    </div>
  );
}
