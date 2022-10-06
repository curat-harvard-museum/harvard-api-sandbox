import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../http-common";

function AllObjects() {
  const [data, setData] = useState(null);

  const formatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading: isLoadingObjects, refetch: getAllObjects } = useQuery(
    ["query-objects"],
    async () => {
      return await apiClient.get(
        `/object?apikey=${process.env.REACT_APP_HARVARD_TOKEN}`
      );
    },
    {
      enabled: false,
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        setData(formatResponse(result));
      },
      onError: (err) => {
        setData(formatResponse(err.response?.data || err));
      },
    }
  );

  useEffect(() => {
    if (isLoadingObjects) setData("loading...");
  }, [isLoadingObjects]);

  function handleGetObjects() {
    try {
      getAllObjects();
    } catch (err) {
      setData(formatResponse(err));
    }
  }

  return (
    <div>
      <button onClick={handleGetObjects}>View Full Collection</button>

      {data && (
        <div role="alert">
          <pre>{data}</pre>
        </div>
      )}
    </div>
  );
}

export default AllObjects;
