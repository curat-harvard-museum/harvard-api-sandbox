import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../http-common";

function ObjectById() {
  //this will allow us to get an object by a particular ID
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);

  const formatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

    const { isLoading: isLoadingObject, refetch: getObjectById } = useQuery(
      ["query-object-by-id"],
      async () => {
        return await apiClient.get(`/object/${id}`);
      },
      {
        enabled: false,
        retry: 1,
        onSuccess: (res) => {
          const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
          };

          setResult(formatResponse(result));
        },
        onError: (err) => {
          setResult(formatResponse(err.response?.data || err));
        },
      }
    );

    useEffect(() => {
      if (isLoadingObject) setResult("loading...");
    }, [isLoadingObject]);

    function getObjectDataById() {
      if (id) {
        try {
          getObjectDataById();
        } catch (err) {
          setResult(formatResponse(err));
        }
      }
    }

    const clearGetOutput = () => {
      setResult(null);
    };

  return (
    <div>
      <button onClick={getAllObjectData}>View Full Collection</button>
    </div>
  );
}

export default ObjectById;
