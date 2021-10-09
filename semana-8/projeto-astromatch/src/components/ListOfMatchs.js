import {ListOfMatchsStyle, Header, ListOfMatchsContainer} from './Constants';

const ListOfMatchs = (props) => {

    function showListOfMatchs(){
        const listOfMatchsToBeRendered = props.listOfMatchs.map((profile) =>{
            return(
                <div>
                    <img src={profile.photo}/>
                    <p>{profile.name}</p>
                </div>
            )
        })
        return listOfMatchsToBeRendered
    }

    return (
        <ListOfMatchsContainer>

            <Header>
                <h3>AstroMatch 2.0</h3>
                {props.iconOfTheHeader}
            </Header>

            <ListOfMatchsStyle>
                {showListOfMatchs()}
            </ListOfMatchsStyle>

        </ListOfMatchsContainer>
    )
}

export default ListOfMatchs
