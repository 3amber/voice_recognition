import React from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import './App.css';

const App = () => {
  const commands = [
    {
      command: " clear ",
      callback: ()=> resetTranscript(),
    }
  ];
  const { transcript, listening, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition({commands});

  //Using start Listening and Adding the language
  const startListeningEn = ()  => {
    SpeechRecognition.startListening({
      continuous: true,
      language:"en-US",
    });
  };
  const startListeningAr = ()  => {
    SpeechRecognition.startListening({
      continuous: true,
    language:"ar-SA",
    });
  };

  // to chick if the browser support the speech recognition
  if(!browserSupportsSpeechRecognition){
    return <span>Your Browser doesn't support speech recognition</span>
  }

  return (

    
    <div>
      
      <p> Microphone: {listening? "on" : "off"} </p>
      
      <p>
      voice commands: {""}
      {commands.map((c)=>c.command+"")}
      </p>
      
      <button
      onMouseDown={startListeningEn}
      onMouseUp={SpeechRecognition.stopListening}
      >
        Hold to talk in English
      </button>

      <button
      onMouseDown={startListeningAr}
      onMouseUp={SpeechRecognition.stopListening}
      >
        اضغط مطولاً للتحدث بالعربية
      </button>
      
      <button
      onClick={()=> {resetTranscript();}}
      >
        Clear/حذف النص
      </button>
      
      <p> {transcript} </p>
    
    </div>
  );
  };
  export default App;