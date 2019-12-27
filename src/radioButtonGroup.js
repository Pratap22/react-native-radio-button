import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import RadioButton from "./radioButton";

const defaultSize = 24;
const defaultThickness = 2;
const defaultColor = "#007AFF";

class RadioButtonGroup extends React.Component {
  handleRadioButtonChange = (isChecked, index) => {
    const { radioButtons } = this.props;
    const { onRadioGroupChange } = this.props;
    let checkState = radioButtons.map((aCheckbox, i) => {
      const currentClicked = index === i;
      if (this.props.isMultiSelect) {
        return currentClicked
          ? { ...aCheckbox, selected: isChecked }
          : aCheckbox;
      } else {
        return currentClicked && aCheckbox.selected
          ? aCheckbox
          : { ...aCheckbox, selected: currentClicked };
      }
    });
    onRadioGroupChange(checkState);
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
          key={`radio-button-${index}`}
          selected={button.selected}
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
            { fontSize: 19, marginBottom: 5 },
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
