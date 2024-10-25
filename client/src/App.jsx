import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [apiData, setApiData] = useState({});
  const [homeTeam, setHomeTeam] = useState();
  const [awayTeam, setAwayTeam] = useState();
  const [formData, setFormData] = useState({});
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

  useEffect(() => {
    const postForm = () => {
      setFormData((preFormData) => ({
        ...preFormData,
        homeTeam,
        awayTeam,
      }));
    };

    postForm();
  }, [homeTeam, awayTeam]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(apiUrl, formData)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="page-container">
        <div className="match-wrapper">
          <form onSubmit={handleOnSubmit}>
            <div className="input-box">
              <input
                type="text"
                onChange={(e) => {
                  setHomeTeam(e.target.value);
                }}
              />
              <label htmlFor="">Home Team</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                onChange={(e) => {
                  setAwayTeam(e.target.value);
                }}
              />
              <label htmlFor="">Away Team</label>
            </div>
            <button type="submit" className="btn">
              Get details
            </button>
          </form>
          {apiData ? apiData.Message : "Loading..."} {/* Render the data */}
        </div>
      </div>
    </>
  );
}

export default App;
