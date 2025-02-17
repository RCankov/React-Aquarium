import React, { useState } from "react";
import "./FishForm.css";

const FishForm = ({ data, onAdd }) => {
    const [valid, setValid] = useState(false);
    const [newFish, setNewFish] = useState({
        id: data.length > 0 ? Math.max(...data.map(fish => fish.id)) + 1 : 1,
        name: "",
        color: "",
        size: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFish = { ...newFish, [name]: value };
        setNewFish(updatedFish);
        validateData(updatedFish);
    };

    const validateData = (fish) => {
        if (fish.name === "" || fish.color === "" || fish.size === "") {
            setValid(false);
        } else {
            setValid(true);
        }
    };

    const resetNewFish = () => {
        const temp = {
            id: newFish.id + 1,
            name: "",
            color: "",
            size: ""
        };
        setNewFish(temp);
        validateData(temp);
    };

    const handleAddClick = () => {
        onAdd(newFish);
        resetNewFish();
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="row w-100 fish-form">
                <h3 className="text-center pb-3">Add fish to aquarium</h3>
                <div className="col-md-3 mb-2">
                    <input
                        type="text"
                        placeholder="name"
                        name="name"
                        onChange={handleChange}
                        value={newFish.name}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3 mb-2">
                    <input
                        type="text"
                        placeholder="color"
                        name="color"
                        onChange={handleChange}
                        value={newFish.color}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3 mb-2 form-control class-sel">
                    <select
                        aria-label="Default select example"
                        className="form-select"
                        name="size"
                        value={newFish.size}
                        onChange={handleChange}>
                        <option value="">Select Size</option>
                        <option value="small">Small</option>
                        <option value="big">Big</option>
                    </select>
                </div>
                <div className="col-md-2 mb-2">
                    <button disabled={!valid} onClick={handleAddClick} className="btn btn-primary">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FishForm;
