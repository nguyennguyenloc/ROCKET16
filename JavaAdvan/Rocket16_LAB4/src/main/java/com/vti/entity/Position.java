package com.vti.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.vti.entity.Enum.PositionName;
import com.vti.entity.Enum.PositionNameConvert;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "position", catalog = "TestingSystemLab4")
@Setter
@Getter

@NoArgsConstructor
public class Position implements Serializable {
	@Column(name = "PositionID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private short id;

	@Column(name = "PositionName", nullable = false, unique = true)
	@Enumerated(EnumType.STRING)
	// @Convert(converter = PositionNameConvert.class)
	private PositionName name;

	public enum PositionName {
		Dev, Test, Scrum_Master, PM
	}

	@OneToMany(mappedBy = "position", fetch = FetchType.EAGER)
	// @Cascade(value = { CascadeType.REMOVE, CascadeType.SAVE_UPDATE })
	private List<Account> account;

	@Override
	public String toString() {
		return "Position [id=" + id + ", name=" + name ;
	}

}
