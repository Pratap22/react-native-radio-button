import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";

const RadioButton = ({
  size,
  onChange,
  color,
  selected,
  label,
  radioLabelStyle,
  radioStyle,
  thickness
}) => {
  return (
    <View style={{ flexDirection: "row", margin: 3 }}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onChange(!selected)}>
        <View
          style={[
            {
              height: size,
              width: size,
              borderRadius: size / 2,
              borderWidth: thickness,
              borderColor: color,
              alignItems: "center",
              justifyContent: "center"
            },
            radioStyle
          ]}
        >
          {selected ? (
            <View
              style={{
                height: size / 2,
                width: size / 2,
                borderRadius: size / 4,
                backgroundColor: color
              }}
            />
          ) : null}
        </View>
      </TouchableOpacity>
      <Text style={[{ marginLeft: 10 }, radioLabelStyle]}>{label}</Text>
    </View>
  );
};

RadioButton.propTypes = {
  size: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
  selected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  radioLabelStyle: PropTypes.object,
  radioStyle: PropTypes.object,
  thickness: PropTypes.number
};
RadioButton.defaultProps = {
  selected: false
};

export default RadioButton;
