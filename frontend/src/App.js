import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:8000/upload/", formData);
    setResults(res.data.results);
  };

  return (
    <div>
      <h2>Upload Image for YOLO Inference</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload & Infer</button>
      {results && (
        <pre>{JSON.stringify(results, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
