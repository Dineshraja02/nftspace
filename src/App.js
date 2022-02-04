import Nftspace from "./Pages/Home/nftspaceHome";
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import NftspaceExplore from "./Pages/Explore/nftspaceExplore";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Nftspace/>} />
        <Route exact path="/explore" element={<NftspaceExplore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;