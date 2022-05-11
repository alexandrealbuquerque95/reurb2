package br.com.cronos.appreurb.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.cronos.appreurb.model.Teste;
import br.com.cronos.appreurb.repository.TesteRepository;

@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "http://reurb.s3-website-sa-east-1.amazonaws.com")
@RestController
@RequestMapping("/api")
public class TesteController {

//	@Autowired
	TesteRepository loginRepository;
	
	@GetMapping("/verificarPermissaoCadastro")
	public ResponseEntity<Boolean> getPermissaoCadastroPeloCPF(@RequestParam(required = false) String cpf) 
	{
		System.out.println("\n\ngetPermissaoCadastroPeloCPF OK\n\n");
		
		if(cpf != null && (cpf.length() == 11))
		{
			return new ResponseEntity<>(true, HttpStatus.OK);
		}

		
//		if(cpf != null && (cpf.equals("052.337.431-32") || cpf.equals("05233743132")))
//		{
//			return new ResponseEntity<>(true, HttpStatus.OK);
//		}
//		
//		if(cpf != null && (cpf.equals("539.748.751-15") || cpf.equals("53974875115")))
//		{
//			return new ResponseEntity<>(false, HttpStatus.OK);
//		}
		
		return new ResponseEntity<>(false, HttpStatus.OK);
	}

	@GetMapping("/login")
	public ResponseEntity<Teste> getLogin(@RequestParam(required = true) String cpf, @RequestParam(required = false) String senha) 
	{
		System.out.println("\n\ngetLogin OK\n\n");

		
		return null;
	}
	
	@GetMapping("/listarLogins")
	public ResponseEntity<List<Teste>> getAllLogins(@RequestParam(required = false) String title) {
//		try {
//			List<Tutorial> tutorials = new ArrayList<Tutorial>();
//
//			if (title == null)
//			{
//				loginRepository.findAll().forEach(tutorials::add);
//			}
//			else
//			{
//				loginRepository.findByTitleContaining(title).forEach(tutorials::add);
//			}
//
//			if (tutorials.isEmpty()) {
//				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//			}
//
//			return new ResponseEntity<>(tutorials, HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
		
		List<Teste> tutoriais = new ArrayList<Teste>();
		
		Teste tutorial1 = new Teste();
		tutorial1.setDescription("Teste 123");
		tutorial1.setPublished(true);
		tutorial1.setTitle("Projeto Spring Boot");
		tutoriais.add(tutorial1);
		
		
		Teste tutorial2 = new Teste();
		tutorial2.setDescription("Vamos Flamengo 12");
		tutorial2.setPublished(false);
		tutorial2.setTitle("Projeto Angular 12");
		tutoriais.add(tutorial2);
		
		return new ResponseEntity<>(tutoriais, HttpStatus.OK);
	}
//
//	@GetMapping("/tutorials/{id}")
//	public ResponseEntity<Tutorial> getTutorialById(@PathVariable("id") long id) {
//		Optional<Tutorial> tutorialData = loginRepository.findById(id);
//
//		if (tutorialData.isPresent()) {
//			return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}
//
//	@PostMapping("/tutorials")
//	public ResponseEntity<Tutorial> createTutorial(@RequestBody Tutorial tutorial) {
//		try {
//			Tutorial _tutorial = loginRepository
//					.save(new Tutorial(tutorial.getTitle(), tutorial.getDescription(), false));
//			return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
//		} catch (Exception e) {
//			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
//
//	@PutMapping("/tutorials/{id}")
//	public ResponseEntity<Tutorial> updateTutorial(@PathVariable("id") long id, @RequestBody Tutorial tutorial) {
//		Optional<Tutorial> tutorialData = loginRepository.findById(id);
//
//		if (tutorialData.isPresent()) {
//			Tutorial _tutorial = tutorialData.get();
//			_tutorial.setTitle(tutorial.getTitle());
//			_tutorial.setDescription(tutorial.getDescription());
//			_tutorial.setPublished(tutorial.isPublished());
//			return new ResponseEntity<>(loginRepository.save(_tutorial), HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}
//
//	@DeleteMapping("/tutorials/{id}")
//	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
//		try {
//			loginRepository.deleteById(id);
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
//
//	@DeleteMapping("/tutorials")
//	public ResponseEntity<HttpStatus> deleteAllTutorials() {
//		try {
//			loginRepository.deleteAll();
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//
//	}
//
//	@GetMapping("/tutorials/published")
//	public ResponseEntity<List<Tutorial>> findByPublished() {
//		try {
//			List<Tutorial> tutorials = loginRepository.findByPublished(true);
//
//			if (tutorials.isEmpty()) {
//				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//			}
//			return new ResponseEntity<>(tutorials, HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}

}
