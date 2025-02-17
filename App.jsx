import { useState } from "react";
import FishList from "./components/FishList/FishList";
import FishForm from "./components/FishForm/FishForm";
import rawData from "./fishData.json";
import Aquarium from "./components/Aquarium/Aquarium";
import "./App.css";

const App = () => {
    const [listFishs, setListFishs] = useState(rawData.fishs);
    const [activeTab, setActiveTab] = useState(1);

    const handleDelete = (idToDel) => {
        const temp = listFishs.filter((fish) => fish.id !== idToDel);
        setListFishs(temp);
    };

    const handleAdd = (newFish) => {
        setListFishs((prevList) => [...prevList, newFish]);
    };

    return (
        <div className="main-cont">
            <div className="toggler-cont">
                <h1 className="text-center huga">Aquarium App</h1>
                <button className={`toggler-btn ${activeTab === 1 ? "active" : ""}`} onClick={() => setActiveTab(1)}>List of Fish</button>
                <button className={`toggler-btn ${activeTab === 2 ? "active" : ""}`} onClick={() => setActiveTab(2)}>Aquarium</button>
            </div>
            <div className="content-cont">
                {activeTab === 1 && (
                    <div className="container">
                        <FishList
                            data={listFishs}
                            onDelete={handleDelete}
                        />
                        <FishForm
                            data={listFishs}
                            onAdd={handleAdd}
                        />
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="container">
                        <Aquarium fishs={listFishs} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
