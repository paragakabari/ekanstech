"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsCopy } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";

function CopyBtn({ Code }) {
  const [copySuccess, setCopySuccess] = useState("Copy code");

  const copyToClipboard = (code) => {
    toast.success("Copied to clipboard!", {
      style: {
        borderRadius:"15px",
        border: "1px solid black",
        padding: "16px",
        color: "black",
      },
      iconTheme: {
        primary: "black",
        secondary: "#FFFAEE",
      },
    });
    navigator.clipboard.writeText(code);
    setCopySuccess("Copied!");

    setTimeout(() => {
      setCopySuccess("Copy code"); // Reset the button after 2 seconds
    }, 2000);
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      <div className="CodeWrapper">
        <button
          className="copy-button"
          onClick={() => copyToClipboard(Code.props.children)}
        >
          {copySuccess === "Copy code" ? <BsCopy /> : <MdOutlineDone />}
          <span className="px-2"> {copySuccess}</span>
        </button>
        <span className="CodeBox">{Code}</span>
      </div>
    </>
  );
}

export default CopyBtn;
