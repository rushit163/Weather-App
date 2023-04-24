import Search from "./components/search";
import Weather from "./components/weather";

function App() {
  const handleOnSearchChange = (searchData)=>{
      console.log(searchData)
  }
    return (
    <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
      <div className="flex flex-col items-center justify-center pt-3">
      <Search onSearchChange={handleOnSearchChange}/>
      </div>
      <Weather/>      
    </div>
  );
}

export default App;
