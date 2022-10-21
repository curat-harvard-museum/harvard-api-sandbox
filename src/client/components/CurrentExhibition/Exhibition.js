import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../http-common";

// import "./Exhibition.css";

function Exhibition() {
  const { data, refetch: getExhibition } = useQuery(
    ["query-objects"],
    async () => {
      return await apiClient.get(
        `/exhibition?apikey=${process.env.REACT_APP_HARVARD_TOKEN}&status=current&venue=HAM`
      );
    },
    {
      enabled: true,
    }
  );

  function handleGetObjects() {
    getExhibition();
  }
  console.log("exhibition: ", data);
  console.log("gallery: ", data?.data.records[0].venues[0].galleries);
  return (
    <>
      <div className="container">
        {/* <button onClick={handleGetObjects}>View Full Collection</button> */}
        {data?.data.records.map((record) => (
          <p key={record.id}>
            {record.title}
            <br></br>
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
            ) : null}
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

export default Exhibition;
