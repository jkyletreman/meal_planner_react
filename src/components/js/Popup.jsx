import React from "react";
import { Modal, Button, Icon } from "antd";

export default class Popup extends React.Component {
  state = {
    visible: false,
    info: ''
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  // response is valid, cant get the information out of the state, this.state.info[0].difficulty is failing
  // async getAllCardInfo() {
  //   const res = await fetch("api/AllCardInfo");
  //   const info = await res.json();
  //   this.setState({ info: info });
  // }
  // componentWillMount = () => {
  //   this.getAllCardInfo();
  // };
  render() {
    return (
      <div>
        <Icon
          style={{ fontSize: "1.7em", margin: "0 auto" }}
          type="info-circle-o"
          onMouseOver={this.onHoverInfo}
          onClick={this.showModal}
        />
        <Modal
          title={this.props.recipeName}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>{this.props.recipeSummary}</div>
        </Modal>
      </div>
    );
  }
}
