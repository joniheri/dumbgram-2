import React, { useContext } from "react";

// import context
import { AppContext } from "../contexts/GlobalContext";

export default function HomeUser() {
  const [state] = useContext(AppContext);
  console.log("DataState: ");
  return (
    <div>
      <h1 style={{ color: "#ffffff" }}>This is Home Page User</h1>
    </div>
  );
}
