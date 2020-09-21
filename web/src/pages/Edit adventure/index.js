import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Api from "../../services/api";

import Header from "../../components/header";

import "./styles.css";

function EditAdventure() {
  const { id } = useParams();
  const [adventureHistory, setAdventureHistory] = useState("");
  const history = useHistory();

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      await Api.put(`/adventure/${id}`, {
        adventure_history: adventureHistory,
      });
      alert("Aventura editada");
      history.push("/");
    } catch (error) {
      alert("algum erro ocorreu");
      console.warn(error);
    }
  };

  useEffect(() => {
    async function getAdventure() {
      const adventureRequest = await Api.get(`/adventure/${id}`);
      setAdventureHistory(
        adventureRequest.data.message.adventureData.adventure.adventure_history
      );
    }

    getAdventure();
  }, [id]);

  return (
    <div className="editAdventure-page">
      <Header />
      <div className="editable-adventure">
        <textarea
          contentEditable="true"
          className="text-edit"
          onChange={(e) => setAdventureHistory(e.target.value)}
          value={adventureHistory}
        ></textarea>
      </div>
      <button className="edit-button" onClick={handleEdit}>
        Editar
      </button>
    </div>
  );
}

export default EditAdventure;
