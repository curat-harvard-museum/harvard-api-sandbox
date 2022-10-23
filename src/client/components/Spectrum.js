import { useQuery } from "@tanstack/react-query";
import apiClient from "../../http-common";

// import "./Exhibition.css";

function Spectrum() {
  const { data, refetch: getSpectrum } = useQuery(
    ["query-objects"],
    async () => {
      return await apiClient.get(
        `/spectrum?apikey=${process.env.REACT_APP_HARVARD_TOKEN}&q=month:1&sort=daynumber`
      );
    },
    {
      enabled: true,
    }
  );

  function handleGetObjects() {
    getSpectrum();
  }
  console.log("spectrum: ", data);
  console.log("spectrum2: ", data?.data.records[0].color);
  return (
    <>
      <div className="container">
        {data?.data.records.map((record) => (
          <p key={record.id}>
            {record.color}
            <div></div>
          </p>
        ))}
      </div>
    </>
  );
}

export default Spectrum;
