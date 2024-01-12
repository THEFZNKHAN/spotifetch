import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import axios from "axios";

const Home = () => {
    const [url, setUrl] = useState("");
    const [isDownloading, setIsDownloading] = useState(false);
    const [isError, setIsError] = useState(false);

    const hideAlerts = () => {
        setTimeout(() => {
            setIsDownloading(false);
            setIsError(false);
        }, 2000);
    };

    const getShortURL = (fullURL) => {
        const urlParts = fullURL.trim().split("/");
        const shortURL = urlParts[urlParts.length - 1];
        return shortURL;
    };

    const handleChange = (e) => {
        setUrl(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const shortURL = getShortURL(url);
            const response = await axios.get(
                `https://lemonic.viperadnan.com/api/track/${shortURL}`
            );
            const { url: redirectUrl } = response.data;
            window.location.href = redirectUrl;
            setIsDownloading(true);
            hideAlerts();
        } catch (error) {
            setIsError(true);
            hideAlerts();
        }
    };

    return (
        <div className="bg-neutral-900 h-screen">
            <div className="container w-screen flex justify-center items-center">
                {isDownloading && (
                    <Alert
                        variant="filled"
                        severity="success"
                        className="alert fixed top-0"
                    >
                        Downloading will be started soon...
                    </Alert>
                )}
                {isError && (
                    <Alert
                        variant="filled"
                        severity="error"
                        className="alert fixed top-0"
                    >
                        Error occurred. Please try again later.
                    </Alert>
                )}
                <div className="mt-8 w-3/4 py-8 rounded-xl bg-white flex flex-col justify-center items-center border-4 border-green-800">
                    <input
                        type="text"
                        name="text"
                        placeholder="Enter the URLs"
                        className="h-14 w-4/5 sm:w-3/4 p-4 font-xl text-sm sm:text-lg font-semibold text-white bg-slate-500 border-2 border-black rounded-lg transition hover:bg-slate-600"
                        onChange={handleChange}
                    />
                    <button
                        className="h-14 w-4/5 sm:w-3/4 mt-2 text-sm sm:text-lg font-bold text-white bg-green-700 border-2 border-black rounded-lg transition hover:bg-green-800"
                        onClick={handleSubmit}
                    >
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
