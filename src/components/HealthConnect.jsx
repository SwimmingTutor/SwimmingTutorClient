import React from 'react';
import useWebViewBridge from '../hooks/recordData';

function getHealthConnectData() {
  if (window.android) {
    healthConnectJsInterface.getDataRecords('2024-06-21T12:33:08.649878');
    console.log('a');
  }
}

function HealthConnect() {
  useWebViewBridge();

  return (
    <>
      <button onClick={getHealthConnectData}>Get HealthConnect Data</button>
      <div id='i'></div>
    </>
  );
}
// function YourComponent() {
//     useWebViewBridge();

//     // ... 컴포넌트 로직
//   }
// function useWebViewBridge() {
//     useEffect(() => {
//       window.receiveDataFromKotlin = (data) => {
//         const parsedData = JSON.parse(data);
//         console.log(parsedData);
//         // 여기서 React 상태를 업데이트하거나 다른 처리를 할 수 있습니다.
//       };

//       return () => {
//         // 컴포넌트 언마운트 시 정리
//         delete window.receiveDataFromKotlin;
//       };
//     }, []);
//   }
// window.receiveDataFromKotlin = data => {
//   const parsedData = JSON.parse(data);
//   document.getElementById('i').innerText('parsedData');
//   console.log(parsedData);
//   // 여기서 React 상태를 업데이트하거나 다른 처리를 할 수 있습니다.
// };
// function receiveDataFromKotlin(data) {
//   // Parse the JSON string back into a JavaScript object
//   const parsedData = JSON.parse(data);
//   document.getElementById('i').innerText("parsedData");
//   // Now you can use the data in your JavaScript code
//   console.log(parsedData);

//   // 여기서 데이터를 처리하거나 표시할 수 있습니다.
// }

export default HealthConnect;
