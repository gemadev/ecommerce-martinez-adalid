import React from "react";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import ItemListContainer from "../components/ItemListContainer";

function Home() {
    return <div>
        <Announce/>
        <Navbar/>
        <ItemListContainer greeting="Bienvenido a amé"/>
        </div>;
}

export default Home;