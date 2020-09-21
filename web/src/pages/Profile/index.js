import React, {useEffect, useState} from 'react';
import Api from "../../services/api";

import Header from '../../components/header';
import AdventureItem from '../../components/adventureItem'

import './styles.css';

function Profile() {
  const [adventures, setAdventures] = useState([])

  useEffect(() => {
    async function fetchAdventures ()  {
      const response = await Api.get("/list-adventures")
      setAdventures(response.data.message.adventures)
      console.log(response.data)
    }

    fetchAdventures()
  }, [adventures])

  return (
      <div className="profile-page">
          <Header />
          <h1 className="profile-title">Aventuras que voce registrou</h1>
          <ul className="adventures">
           {
             adventures.map(adventure => 
                <AdventureItem 
                  name={adventure.name_adventure}
                  date={adventure.created_at}
                  id={adventure.id}
                  key={adventure.id}
                />
             )
           }
          </ul>
      </div>
  )
}

export default Profile;