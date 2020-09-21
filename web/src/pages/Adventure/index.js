import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../services/api";

import Header from "../../components/header";
import NpcItem from "../../components/npcItem";

import "./styles.css";

function Adventure() {
  const [adventure, setAdventure] = useState({});
  const [npcs, setNpcs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getAdventure() {
      const adventureRequest = await Api.get(`/adventure/${id}`);
      setAdventure(adventureRequest.data.message.adventureData.adventure);
      setNpcs(adventureRequest.data.message.adventureData.npcs);
    }

    getAdventure();
  }, [id]);
  return (
    <div className="adventure-page">
      <Header />
      <h1 className="adventure-title">{adventure.name_adventure}</h1>
      <div className="description-adventure">
        <p>{adventure.adventure_history}</p>
      </div>
      <div className="adventure-location">
        Lugar onde a aventura se passa:{" "}
        <span>{adventure.adventure_history}</span>
      </div>
      <h1 className="adventure-title">NPCS</h1>
      {npcs.map((npc) => (
        <NpcItem name={npc.age} age={npc.age} objective={npc.objective} />
      ))}
    </div>
  );
}

export default Adventure;
