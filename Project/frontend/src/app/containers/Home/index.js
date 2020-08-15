import React from 'react';
import Header from "../../components/Header";
import Cards from "./Cards";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {

    const { cardsDetail } = this.props;
    return (
      <div>
        <Header />
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
