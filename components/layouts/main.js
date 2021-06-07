import React, { useState } from "react";
import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-gray-200"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="w-100 max-w-4xl mx-auto p-5">
        <h1 className="text-4xl font-bold undefined">Daytech Dashboard</h1>
        <div className="my-5">
          <button>
            <Link href="/">
              <a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500">
                Widgets
              </a>
            </Link>
          </button>
          <button>
            <Link href="/about">
              <a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-white">
                About
              </a>
            </Link>
          </button>
        </div>
        <h2 className="text-xl undifined">Widgets</h2>

        {children}
      </div>
    </div>
  );
};
export default MainLayout;
