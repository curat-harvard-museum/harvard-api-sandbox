import { useQuery } from "@tanstack/react-query";
import apiClient from "../../http-common";

function Classification() {
  const { data, refetch: getClassification } = useQuery(
    ["query-objects"],
    async () => {
      return await apiClient.get(
        `/classification?apikey=${process.env.REACT_APP_HARVARD_TOKEN}&size=100`
      );
    },
    {
      enabled: true,
    }
  );

  function handleGetClassification() {
    getClassification();
  }
  console.log("classification: ", data);
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

export default Classification;
