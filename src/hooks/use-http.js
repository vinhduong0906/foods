import React, { useState, useEffect, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = useCallback(async (requestConfig, addTask) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        setError(true);
        throw new Error('Some thing went wrong');
      }
      const data = await response.json();
      setIsLoading(false);
      addTask(data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttp;
