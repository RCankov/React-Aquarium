import React, { useState, useEffect } from "react";
import "./Aquarium.css";

function Aquarium({ fishs }) {
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [length, setLength] = useState("");
    const [canApprove, setCanApprove] = useState(false);

    useEffect(() => {
        const totalVolume = width * height * length;
        const requiredVolume = fishs.reduce((total, fish) => {
            return total + (fish.size.toLowerCase() === "small" ? 10 : 20);
        }, 0);
        setCanApprove(totalVolume >= requiredVolume && totalVolume > 0);
    }, [width, height, length, fishs]);

    const handleApprove = () => {
        if (canApprove) {
            alert("Size of aquarium are good");
            resetInputs();
        }
    };

    const resetInputs = () => {
        setWidth("");
        setHeight("");
        setLength("");
        setCanApprove(false);
    };

    const countSmall = () => {
        return fishs.filter((fish) => fish.size.toLowerCase() === "small").length;
    };

    const countBig = () => {
        return fishs.filter((fish) => fish.size.toLowerCase() === "big").length;
    };

    return (
        <div className="aquarium-container">
            <div className="text-center border rounded pb-2">
                <h3 className="pt-3">Fish Requirements</h3>
                <p>Small Fish: 10 liters</p>
                <p>Big Fish: 20 liters</p>
            </div>
            <h2 className="text-center">Plan of Aquarium</h2>
            <div className="task-info mb-3 border rounded">
                <h3 className="text-center pt-3">Number of Fish</h3>
                <p className="text-center">Number of small fish: {countSmall()}</p>
                <p className="text-center">Number of big fish: {countBig()}</p>
            </div>
            <div className="aquarium-form row justify-content-center align-items-center">
                <div className="col-md-3 mb-2">
                    <input
                        type="number"
                        min="0"
                        placeholder="Width (dm)"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3 mb-2">
                    <input
                        type="number"
                        min="0"
                        placeholder="Height (dm)"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3 mb-2">
                    <input
                        type="number"
                        min="0"
                        placeholder="Length (dm)"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3 mb-2 class-but">
                    <button
                        className="btn btn-primary w-100"
                        onClick={handleApprove}
                        disabled={!canApprove}
                        style={{
                            backgroundColor: canApprove ? "green" : "red",
                        }}
                    >
                        Try Measures
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Aquarium;
