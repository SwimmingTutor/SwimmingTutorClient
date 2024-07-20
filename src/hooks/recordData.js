import { useEffect, useCallback } from 'react';
import axios from '../utils/https/axios/customAxios';

function useWebViewBridge() {
  const sendDataToServer = useCallback(async parsedData => {
    try {
      const response = await axios.post(
        'record/',
        { data: parsedData.flat() }
        // {
        //   data: parsedData
        // }
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //   }
        // }
      );
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error :', JSON.stringify(error));

      console.error('Error sending data to server:', error);
    }
  }, []);

  useEffect(() => {
    window.receiveDataFromKotlin = data => {
      try {
        sendDataToServer(JSON.parse(data));
      } catch (error) {
        console.error('Error parsing data from Kotlin:', error);
      }
    };

    return () => {
      delete window.receiveDataFromKotlin;
    };
  }, [sendDataToServer]);

  return null;
}

export default useWebViewBridge;
