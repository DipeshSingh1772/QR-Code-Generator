import React from "react";
import "./body.css";
import axios from "axios";
import { Buffer } from "buffer";

const Body = () => {
  const [url, setUrl] = React.useState("");
  const [value, setValue] = React.useState("");

  const buildUrl = () => {
    setUrl(
      `https://api.qrserver.com/v1/create-qr-code/?data=${value}&amp;size=300x300`
    );
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="body_main_div">
      <div className="input_div">
        <textarea
          value={value}
          onChange={handleChange}
          className="text_input"
          type="text"
          placeholder="Write Any Thing......"
        ></textarea>
      </div>
      <div className="code_main_div">
        <div className="generate_button_div">
          <button className="generate_button" onClick={buildUrl}>
            Generate
          </button>
        </div>
        <div className="code_div">
          <img className="image_code" src={url}></img>
        </div>
      </div>
    </div>
  );
};

export default Body;
