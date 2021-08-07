import React from "react";
import { useContext, useState, useEffect } from "react";
import { Data } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import MicIcon from "@material-ui/icons/Mic";
import VoiceSearchError from "./VoiceSearchError";

const VoiceSearch = () => {
  const { isVoiceSearch, setIsVoiceSearch, setSearchValue, setDoSearch } =
    useContext(Data);
  const [voiceSearchIconContainerClass, setVoiceSearchIconContainerClass] =
    useState("voice-search-icon-container background-white");
  const [voiceSearchIconClass, setVoiceSearchIconClass] = useState(
    "voice-search-icon red"
  );
  const [message, setMessage] = useState("Preparing..");
  const [isVoiceSearchError, setIsVoiceSearchError] = useState(false);
  const [audio, setAudio] = useState("");
  useEffect(() => {
    if (audio === "") {
    } else if (message !== audio) {
      setVoiceSearchIconContainerClass("voice-search-icon-container");
      setVoiceSearchIconClass("voice-search-icon");
      setMessage(audio);
      setTimeout(() => {
        setSearchValue(audio);
        setDoSearch(true);
      }, 2000);
    }
  }, [message]);
  useEffect(() => {
    if (audio === "") {
    } else {
      setMessage(audio);
    }
  }, [audio]);
  useEffect(() => {
    if (!isVoiceSearch) {
      recognition.stop();
    }
  }, [isVoiceSearch]);
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
        console.log("started listening");
        setMessage("Listening...");
        // setTimeout(() => {
        //   recognition.abort();
        // }, 6000);
      };

      recognition.onresult = (e) => {
        setAudio(`${e.results[0][0].transcript}`);

        setVoiceSearchIconContainerClass("voice-search-icon-container");
        setVoiceSearchIconClass("voice-search-icon");
        setTimeout(() => {
          recognition.stop();
        }, 3000);

        speech.text =
          "Here are the results I found for," + e.results[0][0].transcript;
        speech.volume = 1;
        speech.pitch = 1;
        speech.rate = 1;
        window.speechSynthesis.speak(speech);
      };
      recognition.onend = () => {
        if (audio === "") {
          setMessage("Didn't get that");
          setVoiceSearchIconContainerClass("voice-search-icon-container");
          setVoiceSearchIconClass("voice-search-icon");
        }
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
    }, 1000);
  }, []);

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
          <p>{message}</p>
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
