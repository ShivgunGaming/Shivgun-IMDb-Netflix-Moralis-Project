import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { ConnectButton, Icon, TabList, Tab, Modal, LinkTo } from "web3uikit";
import { movies } from "../helpers/library";
import { useState } from "react";
import { useMoralis } from "react-moralis";

const Home = () => {

const [visible, setVisible] = useState(false);
const [selectedFilm, setSelectedFilm] = useState();
const { isAuthenticated } = useMoralis;
return(
  <>
  <div className="logo">
  <img src="IMDb Logo.png"></img>
  </div>
  <div className="connect">
    <Icon fill="#ffffff" size={24} svg="bell" />
      <ConnectButton />
  </div>
  <div className="topBanner">
    <TabList defaultActiveKey={1} tabStyle="bar">
      <Tab tabKey={1} tabName={"Movies"}>

        <div className="scene">
          <img src={movies[0].Scene} className="sceneImg"></img>
          <img className="sceneLogo" src={movies[0].Logo}></img>
          </div>
        

        <div className="title">
          Top Picks
        </div>
        <div className="thumbs">
          {movies &&
          movies.map((e)=> {
            return(
              <img
              src={e.Thumnbnail}
              className="thumbnail"
              onClick={() => {
                setSelectedFilm(e);
                setVisible(true);
              }}
              >
              </img>
            )
          })
          }
        </div>

      </Tab>
      <Tab tabKey={2} tabName={"Series"} isDisabled={true}></Tab>
      <Tab tabKey={3} tabName={"MyList"}></Tab>
      </TabList>
      {selectedFilm && (
        <div className="modal">
          <Modal
          onCloseButtonPressed={() => setVisible(false)}
          isVisible = {visible}
          hasFooter = {false}
          width="1000px">
            <div className="modalContent">
            <img src={selectedFilm.Scene} className= "modalImg"></img>
            <img className="modalLogo" src={selectedFilm.Logo}></img>
            <LinkTo 
            address="https://www.youtube.com/playlist?list=PL3W-hhrU-UHtEfiIOb0r6PZnnfScazvek"
            text="Trailer"
            type="external"
            />
            
            
          <div className="movieInfo">
            <div className="description">
              <div className="details">
                <span>{selectedFilm.Year}</span>
                <span>{selectedFilm.Duration}</span>
                <span>{selectedFilm.ParentsGuide}</span>
              </div>
              {selectedFilm.Description}
            </div>
            <div className="detailedInfo">
              Genre:
              <span className="deets">{selectedFilm.Genre}</span>
              <br />
              Director:
              <span className="deets">{selectedFilm.Director}</span>
              <br />
              Stars:
              <span className="deets">{selectedFilm.Stars}</span>
              <br />
              Writers:
              <span className="deets">{selectedFilm.Writers}</span>
              <br />
              Rating:
              <span className="deets">{selectedFilm.Rating}</span>
            </div>
          </div>

          </div>
          </Modal>

        </div>
      )}
   </div>
  </>
)
};

export default Home
