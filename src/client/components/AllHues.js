import { useQuery } from "@tanstack/react-query";
import apiClient from "../../http-common";

function AllHues() {
  const { data, refetch: getCentury } = useQuery(
    ["query-objects"],
    async () => {
      return await apiClient.get(
        `/color?apikey=${process.env.REACT_APP_HARVARD_TOKEN}&size=100`
      );
    },
    {
      enabled: true,
    }
  );

  function handleGetCentury() {
    getCentury();
  }
  console.log("hues: ", data);
  //   console.log("name: ", data?.data.records[0].name);
  //   console.log("count: ", data?.data.records[0].objectcount);

  return (
    <>
      <div className="container">
        {data?.data.records.map((record) => (
          <p key={record.id}>
            {record.name} -- Hex: {record.hex}
          </p>
        ))}
      </div>
    </>
  );
}

export default AllHues;
