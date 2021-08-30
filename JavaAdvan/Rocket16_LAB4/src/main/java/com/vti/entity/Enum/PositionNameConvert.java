package com.vti.entity.Enum;

import javax.persistence.AttributeConverter;

public class PositionNameConvert implements AttributeConverter<PositionName, String> {

	public String convertToDatabaseColumn(PositionName name) {
		if (name == null) {
			return null;
		}

		return name.getValue();

	}

	public PositionName convertToEntityAttribute(String value) {
		return PositionName.of(value);
	}

}
