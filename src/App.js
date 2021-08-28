import NavBar from './components/NavBar.js';
import FirstSection from './components/FirstSection.js';
import URLShortner from './components/URLShortner.js';
import SecondSection from './components/SecondSection.js';
import Boost from './components/Boost.js';
import Footer from './components/Footer.js';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0);
  const finishLoading = () => setProgress(100);
  const startLoading = () => setProgress(20);
  return (
    <>
      <LoadingBar color='#2acfcf' progress={progress} height={4} onLoaderFinished={() => setProgress(0)} />
      <NavBar />
      <FirstSection />
      <URLShortner finishLoading={finishLoading} startLoading={startLoading} progress={progress}/>
      <SecondSection />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
