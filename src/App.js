import React from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import './App.css';

const App = () => {
  const { transcript, listening, browserSupportSpeechRecognitio, resetTranscript } = useSpeechRecognition();

  //Using start Listening and selecting the language
  const startListening = ()  => {
    SpeechRecognition.startListening({
      continuous: true,
      language:"en-US",
      //language:"ar-SA",
    });

  };

  //Using stop listening
  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  // here to reset the transcript
  const reset = () => {
    resetTranscript();
  };
  
  // to chick if the browser support the speech recognition
  if(browserSupportSpeechRecognitio){
    return <span>Your Browser does not support Speech Recognition</span>
  }

  return (

    <div className="App">
      <button onClick={ () => {listening ? stopListening() : startListening()} }>
      { listening ? 'Stop' : 'Start' }
      </button>
      <button onClick={() => {reset()}}>Reset</button>
      <p>{transcript}</p>   
    </div>
  );
}

export default App;
