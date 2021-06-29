import React from "react";
import { useContext } from "react";
import { Data } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import MicIcon from "@material-ui/icons/Mic";

const VoiceSearch = () => {
  const { isVoiceSearch, setIsVoiceSearch } = useContext(Data);
  const speech = new SpeechSynthesisUtterance();
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.start();
  recognition.onresult = (e) => {
    console.log(e);
    speech.text = e.results[0][0].transcript;
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
            setIsVoiceSearch(false);
          }}
          className="voice-search-close-icon"
        />
      </nav>
      <article className="voice-search-hero">
        <p>Speak Now</p>
        <div>
          <div className="voice-search-icon-container">
            <MicIcon className="voice-search-icon" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default VoiceSearch;
