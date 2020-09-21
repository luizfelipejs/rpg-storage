import React, { useState } from "react";

import Api from "../../services/api";

import Input from "../../components/input/index";
import Header from "../../components/header/index";
import Textarea from "../../components/textarea";

import "./styles.css";
import { useHistory } from "react-router-dom";

function AdventureRegister() {
  const [adventureName, setAdventureName] = useState("");
  const [adventureLocation, setAdventureLocation] = useState("");
  const [adventureHisory, setAdventureHistory] = useState("");
  const history = useHistory()

  const [npcs, setNpcs] = useState([{ name: "", age: "", objective: "" }]);

  const addNpc = (event) => {
    event.preventDefault();
    setNpcs([...npcs, { name: "", age: "", objective: "" }]);
  };

  const updatedScheduleItem = (position, field, value) => {
    const updatedScheduleItem = npcs.map((npc, index) => {
      if (index === position) {
        return { ...npc, [field]: value };
      }

      return npc;
    });

    setNpcs(updatedScheduleItem);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Api.post("/adventure", {
        name_adventure: adventureName,
        adventure_location: adventureLocation,
        adventure_history: adventureHisory,
        npcs,
      });

      alert("ok");
      history.push("/");
    } catch (error) {
      alert("algum erro ocorreu");
      console.log(error);
    }
  };

  return (
    <div className="adventure">
      <Header />
      <form className="form-adventure" onSubmit={handleSubmit}>
        <h2>Crie sua aventura</h2>

        <Input
          name="name adventure"
          label="Nome da aventura"
          onChange={(e) => setAdventureName(e.target.value)}
          value={adventureName}
        />

        <Input
          name="location adventure"
          label="Lugar da aventura"
          onChange={(e) => setAdventureLocation(e.target.value)}
          value={adventureLocation}
        />

        <Textarea
          name="objective adventure"
          label="Historia da aventura"
          onChange={(e) => setAdventureHistory(e.target.value)}
          value={adventureHisory}
        />

        <h1 className="npc-logo">NPCS</h1>
        <button className="addNpc" onClick={addNpc}>
          + NPC
        </button>

        <div className="npcs">
          {npcs.map((npc, index) => {
            return (
              <div className="schedule-npc">
                <Input
                  name="npc-name"
                  label="nome do npc"
                  value={npc.name}
                  onChange={(e) =>
                    updatedScheduleItem(index, "name", e.target.value)
                  }
                />
                <Input
                  name="npc-age"
                  label="idade do npc"
                  value={npc.age}
                  onChange={(e) =>
                    updatedScheduleItem(index, "age", e.target.value)
                  }
                />
                <Textarea
                  name="npc-objective"
                  label="proposito do npc"
                  className="npc-objective"
                  value={npc.objective}
                  onChange={(e) =>
                    updatedScheduleItem(index, "objective", e.target.value)
                  }
                />
              </div>
            );
          })}
          <button className="submit" type="submit">
            Registrar Aventura
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdventureRegister;
