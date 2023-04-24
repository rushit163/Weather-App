import Search from "./components/search";

function App() {
  const handleOnSearchChange = (searchData)=>{
      console.log(searchData)
  }
    return (
    <div style={{backgroundColor : '#e5e5e5'}} className="min-h-[100vh]">
      <div className="flex flex-col items-center justify-center ">
      <Search onSearchChange={handleOnSearchChange}/>
      </div>
      
    </div>
  );
}

export default App;
