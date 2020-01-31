import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Image, Container, List, Modal, Segment, Grid, Divider} from 'semantic-ui-react'


class TeamDetail extends React.Component {

    render() {
        console.log(this.props.team)
        return  !this.props.team ? <div className="ui active transition visible dimmer">
        <div className="content"><div className="ui text loader">Loading</div></div>
      </div> : (
            <div>
                <br/>
                <br/>
                <h1>{this.props.team.name}</h1>
                <Segment>
                <Grid columns ={3} relaxed='very'>
                <Grid.Column>
                <h3>Roster</h3>
                {this.props.team.players.map(player => {
                return <List key={player.id} player={player} >
                <List.Item >
                    <Modal trigger={<List.Header as='a'>{player.position} - {player.first_name} {player.last_name}</List.Header>}>
                        <Modal.Header>{player.first_name} {player.last_name}</Modal.Header>
                        <Modal.Content>
                            <p>College: {player.college}</p>
                            <p>Years Pro: {player.yearsPro}</p>
                            <p>Date of Birth: {player.date_of_birth}</p>
                            <p>Country: {player.country} </p>
                        </Modal.Content>
                    </Modal>               
                    </List.Item>
                    </List>})}
                </Grid.Column>
                <Grid.Column>
                    <h3>Home Games</h3>
                    {console.log(this.props.team.home_games)}
                    {this.props.team.home_games.map(game => {
                        return <List key={game.id} game={game}>
                            <List.Item>
                                <Image avatar src={game.visiting_team_logo} />
                            <Link to={`/teams/${game.visiting_team_id}`}> <List.Header as='a'>{game.visiting_team_name}</List.Header></Link>
                            </List.Item>
                        </List>
                    })}
                </Grid.Column>
                <Grid.Column>
                    <h3>Away Games</h3>
                </Grid.Column>
                </Grid>
                </Segment>
            </div>
            )
        }
    }



const mapStateToProps = (store, ownProps) => {
    return {
        team: store.teams.find(
            team => {return team.id === parseInt(ownProps.match.params.id)}
        )
    }
}



export default withRouter(connect(mapStateToProps)(TeamDetail))