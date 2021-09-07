package com.vti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vti.entity.Position;
import com.vti.repository.IPositionRepository;

@Service
public class PossitionService implements IPositionService {
	@Autowired
	private IPositionRepository positionRepository;

	@Override
	public List<Position> getAllPositions() {
		// TODO Auto-generated method stub
		return positionRepository.findAll();
	}

	@Override
	public Position getPositionById(short id) {
		// TODO Auto-generated method stub
		return positionRepository.getById(id);
	}
}
