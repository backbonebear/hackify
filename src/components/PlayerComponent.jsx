import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ajaxGetSongs } from '../modules/ajax';
import { youTubeGetSong } from '../modules/ajax';

class Player extends Component {


  switchToLanding() {
    ajaxGetSongs($('.input').val());
    youTubeGetSong({key: 'AIzaSyBTUh9qsB3l0N-vFkyE3U-FEwuuj5CDHBI', query: $('.input').val()});
    this.props.switchView('landing');
  }

  render() {
    return (
      <div>
        <h1>SoundBear Jemil</h1>
        <form>
          <input type="text" />
          <input type="button" value="Search" />
          <div> { this.props.currentSong } </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    view: state.view,
    currentSong: state.currentSong
  };
};

export default connect(mapStateToProps)(Player);
