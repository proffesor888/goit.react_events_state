import { Component } from "react";
import PropTypes from "prop-types";
import { message } from "../../utils";

export class ClassComponent extends Component {
  static defaultProps = { chip: 21, onGenerateChipEvent: () => {} };

  static propTypes = {
    chip: PropTypes.number,
    onGenerateChipEvent: PropTypes.func,
    color: PropTypes.string
  };

  render() {
    const { chip, onGenerateChipEvent, color } = this.props;
    return (
      <div>
        <span>{message}</span>
        <span style={{ color: color}}>{chip}</span>
        <button onClick={() => onGenerateChipEvent()}>Generate new chip</button>
      </div>
    );
  }
}
