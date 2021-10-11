import { ListOfMatchsStyle, ListOfMatchsContainer } from "./Constants";
import ProfileHeader from "./ProfileHeader";

const ListOfMatchs = (props) => {
  function showListOfMatchs() {
    const listOfMatchsToBeRendered = props.listOfMatchs.map((profile) => {
      return (
        <div key={profile.name}>
          <img alt="Profile" src={profile.photo} />
          <p>{profile.name}</p>
        </div>
      );
    });
    return listOfMatchsToBeRendered;
  }

  return (
    <ListOfMatchsContainer>
      <ProfileHeader
        currentPage={props.currentPage}
        user={props.user}
        updateCurrentPage={props.updateCurrentPage}
      />

      <ListOfMatchsStyle>{showListOfMatchs()}</ListOfMatchsStyle>
    </ListOfMatchsContainer>
  );
};

export default ListOfMatchs;
