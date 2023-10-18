import { useState, useEffect } from "react";
import { useListTypeEffect } from "./hooks/list-type-effect";
import "./App.css";

export default function App() {
  const request = new Request(
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/756e6b"
  );

  const [flag, setFlag] = useState("");

  const url = request.url;

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => setFlag(data))
      .catch((error) => console.log(error));
  }, []);

  const text = useListTypeEffect(flag, 500);

  return (
    <div className="App">
      <h1>🏁</h1>
      {!flag && <h2>Loading...</h2>}
      {flag && <>{text}</>}
    </div>
  );
}

// Script used to access URL
// const charContainer = Array.from(document.querySelectorAll('code'))
//   .filter(codeContainer => {
//     const dataClass = codeContainer.getAttribute('data-class');
//     const dataTag = codeContainer.querySelector('div').getAttribute('data-tag');
//     const dataId = codeContainer.querySelector('div span').getAttribute('data-id');
//     const value = codeContainer.querySelector('div span i').getAttribute('value');

//     return (
//       dataClass && dataClass.startsWith('23') &&
//       dataTag && dataTag.endsWith('93') &&
//       dataId.includes('21')
//     );
//   })
//   .map(codeContainer => {
//     return codeContainer.querySelector('div span i').getAttribute('value');
//   })
//   .join('');

// console.log(charContainer);
