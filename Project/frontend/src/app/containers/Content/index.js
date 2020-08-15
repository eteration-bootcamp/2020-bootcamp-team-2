import React from 'react';
import Header from "./Header";
import Cards from "./Cards";
import { connect } from "react-redux";

class Content extends React.Component{
  render() {

    const { cardsDetail } = this.props;
    return (
      <div>
        <Header />
        <Cards  cardsDetail = {cardsDetail} />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cardsDetail : state.cardDetail.cardsDetail
  }
}

export default connect(mapStateToProps)(Content);
