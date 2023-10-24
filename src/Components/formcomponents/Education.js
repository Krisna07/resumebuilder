import React, { useEffect, useState } from "react";
import { FaChevronUp, FaGraduationCap, FaPlus } from "react-icons/fa";
import Autosuggest from "react-autosuggest";
// import "./Education.css"; // Add a CSS file for styling the autocomplete input

const Education = ({ getEducation }) => {
  const [educationEntries, setEducationEntries] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [open, setOpen] = useState(false);
  const [states, setStates] = useState([]);
  const [newEntry, setNewEntry] = useState({
    degree: "",
    institution: "",
    state: "",
    country: "",
    from: "",
    to: "",
  });
  const [suggestions, setSuggestions] = useState([]);
  const sortedCountries = countries.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?country=${newEntry.country}`)
      .then((response) => response.json())
      .then((data) => {
        setUniversities(data);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
    const getCountryData = countries.find((country) => {
      return country.name === newEntry.country;
    });
    getCountryData && setStates(getCountryData.states);
  }, [newEntry.country]);

  const addEntry = () => {
    if (
      newEntry.degree.trim() !== "" &&
      newEntry.institution.trim() !== "" &&
      newEntry.from.trim() !== "" &&
      newEntry.to.trim() !== ""
    ) {
      setEducationEntries([...educationEntries, newEntry]);
      setNewEntry({
        degree: "",
        institution: "",
        state: "",
        country: "",
        from: "",
        to: "",
      });
    }
    getEducation(newEntry);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : universities.filter(
          (uni) => uni.name.toLowerCase().slice(0, inputLength) === inputValue,
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  const inputProps = {
    placeholder: "Institution Name",
    value: newEntry.institution,
    className: "w-full border-b-2 outline-none focus:border-green-200",
    onChange: (e, { newValue }) =>
      setNewEntry({ ...newEntry, institution: newValue }),
  };

  return (
    <div className="p-4 grid gap-4">
      <div className="flex items-center gap-4 py-2">
        <span className="text-xl font-[600]">Education</span>
        <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
          <FaGraduationCap />
        </div>
      </div>

      {educationEntries.map((education, index) => (
        <div
          className="grid"
          key={index}>
          <span className="capitalize font-semibold">{education.degree}</span>
          <span>{education.institution}</span>
          <div>
            {education.state}, {education.country}
          </div>
          <div className="flex text-sm gap-[4px]">
            {education.from.split("-").join("/")} <span>-</span>
            {education.to.split("-").join("/")}
          </div>
        </div>
      ))}

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Degree"
          className="w-full border-b-2 outline-none focus-border-green-200"
          value={newEntry.degree}
          onChange={(e) => setNewEntry({ ...newEntry, degree: e.target.value })}
        />

        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />

        <div className="w-full grid grid-cols-2 gap-4">
          <label>
            <span className="w-full font-semibold">From</span>
            <input
              type="date"
              className="w-full border-b-2 outline-none focus-border-green-200"
              value={newEntry.from}
              onChange={(e) =>
                setNewEntry({ ...newEntry, from: e.target.value })
              }
            />
          </label>
          <label>
            <span className="w-full font-semibold">To</span>
            <input
              type="date"
              className="w-full border-b-2 outline-none focus-border-green-200"
              value={newEntry.to}
              onChange={(e) => setNewEntry({ ...newEntry, to: e.target.value })}
            />
          </label>
        </div>
        <div className="flex gap-4">
          <div className="relative focus:bg-green-200">
            {/* <div
              className={`absolute w-16 h-full grid place-items-center ${
                open ? "bg-green-200" : "bg-gray-200"
              }  right-0`}>
              <FaChevronUp
                className={`${open ? "rotate-[180deg]" : ""} transition-all`}
              />
            </div> */}
            <select
              onClick={() => setOpen(!open)}
              onChange={(e) =>
                setNewEntry({ ...newEntry, country: e.target.value })
              }
              className="w-fit bg-gray-200 px-4 py-1 rounded outline-none focus:bg-green-200  ">
              {countries.map((country, index) => (
                <option
                  className="text-sm "
                  key={index}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          {states && (
            <select
              className="w-fit leading-[120%] bg-gray-200 px-2 rounded focus:bg-green-200"
              value={newEntry.state}
              onChange={(e) =>
                setNewEntry({ ...newEntry, state: e.target.value })
              }>
              {states.map((state, index) => (
                <option
                  className="text-sm "
                  value={state.name}
                  key={index}>
                  {state.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="flex gap-4">
          <span
            className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-green-200 leading-[120%]"
            onClick={addEntry}>
            Add more <FaPlus />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
