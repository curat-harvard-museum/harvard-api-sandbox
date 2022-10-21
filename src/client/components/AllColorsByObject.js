import { useQuery } from "@tanstack/react-query";
import apiClient from "../../http-common";

// import "./Exhibition.css";

function ColorsByObj() {
  const { data, refetch: getColorsByObj } = useQuery(
    ["query-objects"],
    async () => {
      return await apiClient.get(
        `/object?apikey=${process.env.REACT_APP_HARVARD_TOKEN}&page=83&size=100`
      );
    },
    {
      enabled: true,
    }
  );

  function handleGetObjects() {
    getColorsByObj();
  }
  console.log("color: ", data);
  console.log("color2: ", data?.data.records[0].colors);
  return (
    <>
      <div className="container">
        {/* <button onClick={handleGetObjects}>View Full Collection</button> */}
        {data?.data.records.map((record) => (
          //   <p key={record.id}>
          //     {record.colors[0].hue}
          //     <br></br>
          //     End Date: {record.enddate}
          //     <br></br>
          //     Gallery Location:
          //     <li>Name: {record.venues[0].galleries[0].name}</li>
          //     <li>
          //       Gallery Number: {record.venues[0].galleries[0].gallerynumber}
          //     </li>
          //     <li>Floor: {record.venues[0].galleries[0].floor}</li>
          //     <br></br>
          //     {record.primaryimageurl ? (
          //       <img
          //         className="imageTile"
          //         key={record.id}
          //         src={record.primaryimageurl}
          //         alt="{record.title} by {record.people[0].name} "
          //       ></img>
          //     ) : null}
          //   </p>
          <p key={record.id}>
            Color Info:
            <li>Color: {record.totalpageviews}</li>
            <li>Hue: {record.colors[0].hue}</li>
            {/* <li>Hue: {record.colors[0].hue}</li> */}
            <li>Percentage: {record.colors[0].percent}</li>
            {record.primaryimageurl ? (
              <img
                className="imageTile"
                key={record.id}
                src={record.primaryimageurl}
                alt="{record.title} by {record.people[0].name} "
              ></img>
            ) : null}
          </p>
        ))}
      </div>
    </>
  );
}

export default ColorsByObj;
