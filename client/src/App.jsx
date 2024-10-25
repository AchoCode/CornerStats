import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [apiData, setApiData] = useState({});
  const apiUrl = "http://127.0.0.1:5000";
  let response;
  useEffect(() => {
    const fetchData = async () => {
      try {
        response = await axios.get(apiUrl);
      } catch (error) {
        console.log(error);
        setApiData({
          Message: "Unable to retrieve data",
        });
      }
      setApiData(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        {apiData ? apiData.Message : "Loading..."} {/* Render the data */}
      </div>
    </>
  );
}

export default App;
