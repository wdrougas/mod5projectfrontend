import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Segment, Grid, List, Image} from 'semantic-ui-react'

class Standings extends React.Component {
  render() {
    return (
        <div>
          <br/>
          <br/>
          <h2>Standings</h2>
          <Segment>
            <Grid columns={2} relaxed='very'>
              <Grid.Column>
                <h3>East Standings</h3>
                {this.props.standings.map(standing => {
                  if (standing.conference == 'east') {
                  return <List key={standing.id}>
                    <List.Item>
                      <Image avatar src={standing.team_logo} />
                      <List.Content>
                        <List.Header as='a'>
                        <Link to={`/teams/${standing.team_id}`}>{standing.team_name} {standing.win} - {standing.loss}</Link>
                        </List.Header>
                      </List.Content>
                    </List.Item>
                  </List>
                }})}
              </Grid.Column>
              <Grid.Column>
                <h3>West Standings</h3>
                {this.props.standings.map(standing => {
                  if (standing.conference == 'west') {
                  return <List key={standing.id}>
                    <List.Item>
                      <Image avatar src={standing.team_logo} />
                      <List.Content>
                        <List.Header as='a'>
                        <Link to={`/teams/${standing.team_id}`}>{standing.team_name} {standing.win} - {standing.loss}</Link>
                        </List.Header>
                      </List.Content>
                    </List.Item>
                  </List>
                }})}
              </Grid.Column>
            </Grid>
          </Segment>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      standings: state.standings
  }
}

export default withRouter(connect(mapStateToProps)(Standings))