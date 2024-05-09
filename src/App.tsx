import React, { useEffect } from 'react';
import Header from "./components/Header";
import "./style/main.scss";
import AppTitle from "./components/AppTitle";
import ImageSlider from "./components/ImageSlider";
import About from "./components/About";

function App() {
  useEffect(() => {
    window.addEventListener('appinstalled', handleInstall);

    return () => {
      window.removeEventListener('appinstalled', handleInstall);
    }
  }, []);

  const handleInstall = (event: Event) => {
    event.preventDefault();
    window.open('/home', '_blank');
  }



  const text =
    "Best casino in Malaysia\n1160 MYR\n500% bonus on your first deposit!\n+70 FREE SPINS";

  return (
    <div className="App">
      <Header></Header>
      <AppTitle name={"22BET"} author={"Casino"} />
      <ImageSlider
        images={[
          "https://preogh.xyz/assets-ucp/Ek5K/s023a653729407405456a54a11ae54612/_r0x408_png",
          "https://preogh.xyz/assets-ucp/Ek5K/sf8c4506d799bca214e91205047ab6b3b/_r0x408_png",
          "https://preogh.xyz/assets-ucp/Ek5K/sebb80d727008dbe0b352364544a724ad/_r0x408_png",
          "https://preogh.xyz/assets-ucp/Ek5K/sa8152c72ec8715d352080d9b900d07be/_r0x408_png",
        ]}
      ></ImageSlider>
      <About title={"About this game"} text={text}></About>
    </div>
  );
}

export default App;
