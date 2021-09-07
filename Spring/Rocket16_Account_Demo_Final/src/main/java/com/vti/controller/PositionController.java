package com.vti.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vti.dto.PositonDto;
import com.vti.entity.Position;
import com.vti.service.IPositionService;

@RestController
@RequestMapping(value = "api/v1/possitions")
@CrossOrigin("*")
public class PositionController {
	@Autowired
	private IPositionService possitionService;

	@GetMapping()
	public ResponseEntity<?> getAllPosition() {
		List<Position> entities = possitionService.getAllPositions();

		List<PositonDto> dtos = new ArrayList<>();
		for (Position possiton : entities) {
			PositonDto dto = new PositonDto(possiton.getId(), possiton.getName().toString());
			dtos.add(dto);

		}

		return new ResponseEntity<>(dtos, HttpStatus.OK);

	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<?> getPositionById(@PathVariable(name = "id") short id) {
		Position position = possitionService.getPositionById(id);
		PositonDto dto = new PositonDto(position.getId(), position.getName().toString());
		return new ResponseEntity<PositonDto>(dto, HttpStatus.OK);

	}
}
