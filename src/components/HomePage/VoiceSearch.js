import React from "react";
import { useContext, useState, useEffect } from "react";
import { Data } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import MicIcon from "@material-ui/icons/Mic";
import VoiceSearchError from "./VoiceSearchError";

const VoiceSearch = () => {
  const { isVoiceSearch, setIsVoiceSearch } = useContext(Data);
  const [voiceSearchIconContainerClass, setVoiceSearchIconContainerClass] =
    useState("voice-search-icon-container background-white");
  const [voiceSearchIconClass, setVoiceSearchIconClass] = useState(
    "voice-search-icon red"
  );
  const [messsage, setMessage] = useState("Preparing..");
  const [isVoiceSearchError, setIsVoiceSearchError] = useState(false);

  if (!isVoiceSearchError) {
    try {
      var speech = new SpeechSynthesisUtterance();
      var SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      var recognition = new SpeechRecognition();
      window.parent.Listen = () => {
        recognition.start();
      };
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
        if (messsage === "Listening...") setMessage("Didn't get that");
        setVoiceSearchIconContainerClass("voice-search-icon-container");
        setVoiceSearchIconClass("voice-search-icon");
      };
    } catch (e) {
      setIsVoiceSearchError(true);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      try {
        window.parent.Listen();
      } catch (e) {
        setIsVoiceSearchError(true);
      }
    }, 2000);
  }, [isVoiceSearch]);

  return (
    <section className="voice-search">
      <nav className="voice-search-nav">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => {
            try {
              recognition.abort();
              setIsVoiceSearch(false);
            } catch (e) {
              setIsVoiceSearch(false);
            }
          }}
          className="voice-search-close-icon"
        />
      </nav>
      {isVoiceSearchError ? (
        <VoiceSearchError />
      ) : (
        <article className="voice-search-hero">
          <p>
            {messsage}
            {/* <span className="try-again-message"> Try again?</span> */}
          </p>
          <div>
            <div
              className={voiceSearchIconContainerClass}
              onClick={() => {
                recognition.start();
              }}
            >
              <MicIcon className={voiceSearchIconClass} />
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

export default VoiceSearch;
