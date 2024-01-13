import React from "react";

const Home = () => {
    const handleChange = () => {};

    const handleSubmit = () => {};

    return (
        <div className="bg-slate-900 h-screen">
            <div className="container flex flex-col justify-center items-center">
                <div className="m-10 py-4 px-16 rounded-xl bg-white text-center border-4 border-green-900">
                    <h1 className="text-3xl text-green-600 font-bold font-mono">
                        Download Spotify Songs
                    </h1>
                    <p className="text-lg mt-4 font-serif">
                        Download Spotify song by pasting the URL of that song.
                    </p>
                </div>
                <div className="w-1/2 h-64 rounded-xl bg-whit flex flex-col justify-center items-center bg-white border-4 border-green-900">
                    <input
                        type="text"
                        name="text"
                        placeholder="Enter the URLs"
                        className="h-14 w-2/3 p-4 font-xl font-semibold text-white bg-slate-500 border-2 border-black rounded-lg transition hover:bg-slate-600"
                        onChange={handleChange}
                    />
                    <button
                        className="h-14 w-1/3 mt-2 text-xl font-bold text-white bg-green-700 border-2 border-black rounded-lg transition hover:bg-green-800"
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
