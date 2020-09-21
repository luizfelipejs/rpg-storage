import React from 'react';

import './styles.css';

function NpcItem({name, age, objective}) {
  return (
    <div className="adventure-npc">
        <p className="adventure-npc-title">Nome: {name}</p>
        <p className="adventure-npc-title">Idade: {age}</p>
        <p className="adventure-npc-title">Objetivo do npc</p>
        <div className="description">{objective}</div>
    </div>
  )
}

export default NpcItem;