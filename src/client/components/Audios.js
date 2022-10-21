import { useQuery } from "@tanstack/react-query";
import apiClient from "../../http-common";

// import "./Exhibition.css";

function Audios() {
  const { data, refetch: getAudios } = useQuery(
    ["query-objects"],
    async () => {
      return await apiClient.get(
        `/audio?apikey=${process.env.REACT_APP_HARVARD_TOKEN}`
      );
    },
    {
      enabled: true,
    }
  );

  function handleGetObjects() {
    getAudios();
  }
  console.log("Audios: ", data);
  //   console.log("Audios2: ", data?.data.records[0].color);
  return (
    <>
      <div className="container">
        {/* <button onClick={handleGetObjects}>View Full Collection</button> */}
        {data?.data.records.map((record) => (
          <p key={record.id}>
            {record.color}
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
            <div>
              {/* <h3
                dangerouslySetInnerHTML={{ __html: record.textiledescription }}
              ></h3> */}
              {/* {record.textiledescription} */}
            </div>
          </p>
        ))}
      </div>
    </>
  );
}

export default Audios;
