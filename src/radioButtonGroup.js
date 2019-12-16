import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import RadioButton from "./radioButton";

const defaultSize = 24;
const defaultThickness = 2;
const defaultColor = "#007AFF";

class RadioButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex,
      prevSelected: this.props.selectedIndex
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedIndex !== prevState.prevSelected) {
      return {
        selectedIndex: nextProps.selectedIndex,
        prevSelected: nextProps.selectedIndex
      };
    } else {
      return null;
    }
  }

  onSelect = (index, value) => {
    this.setState({
      selectedIndex: index
    });
    if (this.props.onRadioGroupChange)
      this.props.onRadioGroupChange(index, value);
  };

  handleRadioButtonChange = (isChecked, index) => {
    const { radioButtons } = this.props;
    const { onRadioGroupChange } = this.props;
    if (this.props.isMultiSelect) {
      const newCheckState = radioButtons.map((aCheckbox, i) =>
        index === i ? { ...aCheckbox, selected: isChecked } : aCheckbox
      );
      onRadioGroupChange(newCheckState);
    } else {
      let checkState = radioButtons.map((aCheckbox, i) =>
        index === i
          ? { ...aCheckbox, selected: isChecked }
          : { ...aCheckbox, selected: !isChecked }
      );
      this.setState({
        selectedIndex: index
      });
      this.props.onRadioGroupChange(checkState);
    }
  };
  renderRadioGroups = () => {
    const { radioButtons } = this.props;
    if (!radioButtons) {
      return null;
    }
    return radioButtons.map((button, index) => {
      let labelName = this.props.optionLabelName;
      return (
        <RadioButton
          selected={
            this.props.isMultiSelect
              ? button.selected
              : index === this.state.selectedIndex
          }
          label={`${button[labelName]}`}
          {...this.props}
          onChange={selected => this.handleRadioButtonChange(selected, index)}
        />
      );
    });
  };

  render() {
    return (
      <View style={this.props.style}>
        <Text
          style={[
            { fontSize: 19, fontWeight: "700", marginBottom: 5 },
            this.props.radioGroupLabelStyle
          ]}
        >
          {this.props.radioGroupLabel}
        </Text>
        {this.renderRadioGroups()}
      </View>
    );
  }
}

RadioButtonGroup.propTypes = {
  onRadioGroupChange: PropTypes.func.isRequired,
  optionLabelName: PropTypes.string.isRequired,
  isMultiSelect: PropTypes.bool,
  radioGroupLabel: PropTypes.string,
  size: PropTypes.number,
  thickness: PropTypes.number,
  color: PropTypes.string,
  radioGroupLabelStyle: PropTypes.object,
  radioLabelStyle: PropTypes.object,
  radioStyle: PropTypes.object
};

RadioButtonGroup.defaultProps = {
  size: defaultSize,
  thickness: defaultThickness,
  color: defaultColor,
  isMultiSelect: false
};

export default RadioButtonGroup;
