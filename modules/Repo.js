import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>RepoName from route parameters: {this.props.params.repoName}</h2>
        <h2>Read props of component defined in route: {this.props.route.something}</h2>
      </div>
    )
  }
})