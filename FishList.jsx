import "./FishList.css";
import React from "react";

const FishList = ({ data, onDelete }) => {
    return (
        <div className="container">
            <h3 className="text-center text-light pb-3 h-3">List of Fish</h3>
            <div className="list mx-auto">
                {data.map((item) => {
                    return (
                        <div
                            className="item d-flex justify-content-between align-items-center p-1 mb-2 rounded"
                            key={item.id}>
                            <span className="item-text">
                                {item.name} {item.color} / {item.size}
                            </span>
                            <button
                                className="btn btn-danger btn-sm ml-2 delete-button"
                                onClick={() => onDelete(item.id)}>
                                X
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FishList;
