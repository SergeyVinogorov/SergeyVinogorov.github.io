import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
const LaunchResiver = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      {data.launches.map(launch => {
        return <LaunchItem key={launch.flight_number} launch={launch} />;
      })}
    </Fragment>
  );
};
export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <MissionKey />
        <LaunchResiver />
      </Fragment>
    );
  }
}

export default Launches;
