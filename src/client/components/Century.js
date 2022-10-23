import { useQuery } from "@tanstack/react-query";
import apiClient from "../../http-common";

function Century() {
  const { data, refetch: getCentury } = useQuery(
    ["query-objects"],
    async () => {
      return await apiClient.get(
        `/century?apikey=${process.env.REACT_APP_HARVARD_TOKEN}`
      );
    },
    {
      enabled: true,
    }
  );

  function handleGetCentury() {
    getCentury();
  }
  console.log("century: ", data);
  console.log("name: ", data?.data.records[0].name);
  console.log("count: ", data?.data.records[0].objectcount);

  return (
    <>
      <div className="container">
        {data?.data.records.map((record) => (
          <p key={record.id}>
            {record.name} -- Count: {record.objectcount}
          </p>
        ))}
      </div>
    </>
  );
}

export default Century;
