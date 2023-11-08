import React, { FC } from "react";
import { Link } from "react-router-dom";

function DownloadIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M16.9999 19C19.209 19 20.9999 17.2091 20.9999 15C20.9999 12.7909 19.209 11 16.9999 11H16.9774C16.9923 10.8353 16.9999 10.6685 16.9999 10.5C16.9999 7.46243 14.5374 5 11.4999 5C8.4623 5 5.99986 7.46243 5.99986 10.5C5.99986 10.5047 5.99987 10.5095 5.99988 10.5142C4.04366 10.9113 2.57129 12.6408 2.57129 14.7142C2.57129 17.0811 4.49007 18.9999 6.857 18.9999"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 14L12 19M12 19L14 17M12 19L10 17"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export const DownloadView: FC = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white mt-10 p-10 bg-white rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur text-base">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Download CV
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/">
            <DownloadIcon className="h-6 w-6 flex-none fill-white transition w-28 h-28 hover:fill-slate-200" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DownloadView;