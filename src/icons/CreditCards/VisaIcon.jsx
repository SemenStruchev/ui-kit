import React from "react";
import { createIcon } from "../../helpers/icon";

export const VisaIcon = createIcon((props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" fill="none" viewBox="0 0 34 24" {...props}>
            <rect width="33" height="23" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" />
            <path
                fill="#172B85"
                fillRule="evenodd"
                d="M10.75 15.858H8.69L7.146 9.792c-.074-.279-.23-.525-.458-.642A6.573 6.573 0 004.8 8.51v-.234h3.318c.458 0 .801.35.859.758l.8 4.376 2.06-5.134h2.002l-3.089 7.583zm4.234 0h-1.945l1.602-7.583h1.945l-1.602 7.583zm4.118-5.482c.058-.409.401-.642.802-.642a3.535 3.535 0 011.888.35l.343-1.633a4.801 4.801 0 00-1.773-.35c-1.888 0-3.262 1.05-3.262 2.507 0 1.11.973 1.692 1.66 2.042.743.35 1.03.584.972.934 0 .524-.572.758-1.144.758a4.789 4.789 0 01-2.002-.467l-.344 1.634c.687.29 1.43.408 2.117.408 2.117.058 3.433-.992 3.433-2.567 0-1.983-2.69-2.1-2.69-2.974zm9.498 5.482l-1.545-7.583h-1.659a.863.863 0 00-.801.583l-2.86 7h2.002l.4-1.108h2.46l.23 1.108H28.6zm-2.918-5.54l.572 2.857h-1.602l1.03-2.858z"
                clipRule="evenodd"
            />
        </svg>
    );
});
