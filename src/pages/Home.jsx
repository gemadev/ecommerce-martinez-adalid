import React from "react";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";

function Home() {
    return <div>
        <Announce/>
        <Navbar/>
        <ItemListContainer greeting="Bienvenido a amé"/>
        <ItemDetailContainer/>
        </div>;
}

export default Home;