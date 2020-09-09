import React from 'react';
import Slider from "../../components/Slider";
import Cards from "./Cards";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {

    const { cardsDetail } = this.props;
    return (
      <div>
        <Slider />
        <Cards cardsDetail={cardsDetail} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cardsDetail: state.cardDetail.cardsDetail
  }
}

export default connect(mapStateToProps)(Home);
