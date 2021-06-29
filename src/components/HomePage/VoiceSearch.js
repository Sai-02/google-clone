import React from "react";
import { useContext, useState } from "react";
import { Data } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import MicIcon from "@material-ui/icons/Mic";

const VoiceSearch = () => {
  const { isVoiceSearch, setIsVoiceSearch } = useContext(Data);
  const [voiceSearchIconContainerClass, setVoiceSearchIconContainerClass] =
    useState("voice-search-icon-container");
  const [voiceSearchIconClass, setVoiceSearchIconClass] =
    useState("voice-search-icon");
  const speech = new SpeechSynthesisUtterance();
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  // const Listen = () => {
  // recognition.start();
  // setTimeout(() => {
  //   recognition.stop();
  // }, 5000);
  // };
  // Listen();

  recognition.onstart = (e) => {
    setVoiceSearchIconContainerClass(
      "voice-search-icon-container background-red"
    );
    setVoiceSearchIconClass("voice-search-icon white");
  };
  // recognition.onnomatch = () => {
  //   setVoiceSearchIconContainerClass("voice-search-icon-container");
  //   setVoiceSearchIconClass("voice-search-icon");
  // };
  recognition.onresult = (e) => {
    setVoiceSearchIconContainerClass("voice-search-icon-container");
    setVoiceSearchIconClass("voice-search-icon");
    console.log(e);
    speech.text = "Getting results, for" + e.results[0][0].transcript;
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
   
  };
  return (
    <section className="voice-search">
      <nav className="voice-search-nav">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => {
            recognition.abort();
            setIsVoiceSearch(false);
          }}
          className="voice-search-close-icon"
        />
      </nav>
      <article className="voice-search-hero">
        <p>Speak Now</p>
        <div>
          <div className={voiceSearchIconContainerClass}>
            <MicIcon className={voiceSearchIconClass} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default VoiceSearch;
