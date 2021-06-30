import React from "react";
import { useContext, useState, useEffect } from "react";
import { Data } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import MicIcon from "@material-ui/icons/Mic";

const VoiceSearch = () => {
  const { isVoiceSearch, setIsVoiceSearch } = useContext(Data);
  const [voiceSearchIconContainerClass, setVoiceSearchIconContainerClass] =
    useState("voice-search-icon-container background-white");
  const [voiceSearchIconClass, setVoiceSearchIconClass] = useState(
    "voice-search-icon red"
  );
  const [messsage, setMessage] = useState("Preparing..");

  const speech = new SpeechSynthesisUtterance();
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onstart = (e) => {
    setVoiceSearchIconClass("voice-search-icon white");
    setVoiceSearchIconContainerClass(
      "voice-search-icon-container background-red animation"
    );
    setMessage("Listening...");
  };
  recognition.onresult = (e) => {
    setVoiceSearchIconContainerClass("voice-search-icon-container");
    setVoiceSearchIconClass("voice-search-icon");
    setMessage(`${e.results[0][0].transcript}...`);
    console.log(e);
    recognition.stop();
    speech.text = "Getting results, for" + e.results[0][0].transcript;
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    // window.speechSynthesis.speak(speech);
  };
  recognition.onend = () => {
    if (!(messsage === "Listening...")) setMessage("Didn't get that");
    setVoiceSearchIconContainerClass("voice-search-icon-container");
    setVoiceSearchIconClass("voice-search-icon");
  };

  useEffect(() => {
    setTimeout(() => {
      recognition.start();
    }, 3000);
  }, []);
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
        <p>
          {messsage}
          {/* <span className="try-again-message"> Try again?</span> */}
        </p>
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
