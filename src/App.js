import {MainContainer} from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";

function App() {
  return (
      <MainContainer>
        <NavBar/>
        <HomeScreen/>
      </MainContainer>
  );
}

export default App;
