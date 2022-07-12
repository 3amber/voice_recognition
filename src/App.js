import React from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import './App.css';

const App = () => {
  const { transcript, listening, browserSupportSpeechRecognitio, resetTranscript } = useSpeechRecognition();

  const startListening = ()  => {
    SpeechRecognition.startListening({
      continuous: true,
      language:"en-US",
      //language:"ar-SA",
    });

  };
  const stopListening = () => {
    SpeechRecognition.stopListening();
  };
  const reset = () => {
    resetTranscript();
  };
  if(browserSupportSpeechRecognitio){
    return <span>Your Browser does not support Speech Recognition</span>
  }

  return (
    <div className="App">
      <button onClick={ () => {listening ? stopListening() : startListening()} }>
      { listening ? 'Stop listening' : 'Start listening' }
      </button>
      <button onClick={() => {reset()}}>Reset</button>
      <p>{transcript}</p>   
    </div>
  );
}

export default App;
