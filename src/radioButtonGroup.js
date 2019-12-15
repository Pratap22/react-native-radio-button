import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";
import RadioButton from "./RadioButton";

const defaultSize = 24;
const defaultThickness = 2;
const defaultColor = "#007AFF";

class RadioButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex
    };
    this.prevSelected = this.props.selectedIndex;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndex !== this.prevSelected) {
      this.prevSelected = nextProps.selectedIndex;
      this.setState({
        selectedIndex: nextProps.selectedIndex
      });
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
    return radioButtons.map((button, index) => (
      <RadioButton
        selected={
          this.props.isMultiSelect
            ? button.selected
            : index === this.state.selectedIndex
        }
        label={button.label}
        {...this.props}
        onChange={selected => this.handleRadioButtonChange(selected, index)}
      />
    ));
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

export default RadioButtonGroup;

RadioButtonGroup.contextType = {
  onRadioGroupChange: PropTypes.func.isRequired,
  isMultiSelect: PropTypes.bool.isRequired,
  radioGroupLabel: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  radioGroupLabelStyle: PropTypes.object.isRequired,
  radioLabelStyle: PropTypes.object.isRequired,
  radioStyle: PropTypes.object.isRequired
};

RadioButtonGroup.defaultProps = {
  size: defaultSize,
  thickness: defaultThickness,
  color: defaultColor,
  isMultiSelect: false
};
