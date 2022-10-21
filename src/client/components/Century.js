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
        {/* <button onClick={handleGetObjects}>View Full Collection</button> */}
        {data?.data.records.map((record) => (
          <p key={record.id}>
            {record.name} -- Count: {record.objectcount}
            {/* <br></br>
            End Date: {record.enddate}
            <br></br>
            Gallery Location:
            <li>Name: {record.venues[0].galleries[0].name}</li>
            <li>
              Gallery Number: {record.venues[0].galleries[0].gallerynumber}
            </li>
            <li>Floor: {record.venues[0].galleries[0].floor}</li>
            <br></br>
            {record.primaryimageurl ? (
              <img
                className="imageTile"
                key={record.id}
                src={record.primaryimageurl}
                alt="{record.title} by {record.people[0].name} "
              ></img>
            ) : null} */}
          </p>
        ))}
      </div>
    </>
  );
}

export default Century;
