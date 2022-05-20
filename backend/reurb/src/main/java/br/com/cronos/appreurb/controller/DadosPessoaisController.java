package br.com.cronos.appreurb.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.cronos.appreurb.model.BeneficioSocial;
import br.com.cronos.appreurb.model.BeneficioSocialDadosPessoais;
import br.com.cronos.appreurb.model.DadosPessoais;
import br.com.cronos.appreurb.model.Ocupacao;
import br.com.cronos.appreurb.model.OcupacaoDadosPessoais;
import br.com.cronos.appreurb.model.Teste;
import br.com.cronos.appreurb.repository.BeneficioSocialDadosPessoaisRepository;
import br.com.cronos.appreurb.repository.DadosPessoaisRepository;
import br.com.cronos.appreurb.repository.OcupacaoDadosPessoaisRepository;
import br.com.cronos.appreurb.repository.TesteRepository;

@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "http://reurb.s3-website-sa-east-1.amazonaws.com")
@RestController
@RequestMapping("/api")
public class DadosPessoaisController {

	@Autowired
	DadosPessoaisRepository dadosPessoaisRepository;
	
	@Autowired
	OcupacaoDadosPessoaisRepository ocupacaoDadosPessoaisRepository;
	
	@Autowired
	BeneficioSocialDadosPessoaisRepository beneficioSocialDadosPessoaisRepository;
	
	@RequestMapping(value="/dados_pessoais", method= RequestMethod.GET)
	public ResponseEntity<List<DadosPessoais>> listarDadosPessoais() 
	{
		return new ResponseEntity<>(dadosPessoaisRepository.findAll(), HttpStatus.OK);
	}
		
	@RequestMapping(value="/dados_pessoais", method= RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<DadosPessoais> salvarDadosPessoais(@RequestBody DadosPessoais dadosPessoais) 
	{
		try 
		{
			System.out.println(dadosPessoais);
			
			if(dadosPessoais.getCpf() != null && !dadosPessoais.getCpf().equals(""))
			{
				DadosPessoais dadosPessoaisConsulta = dadosPessoaisRepository.findByCpf(dadosPessoais.getCpf());
				if(dadosPessoaisConsulta != null)
				{
					dadosPessoais.setId(dadosPessoaisConsulta.getId());
				}
			}
			
			DadosPessoais idDadosPessoais = dadosPessoaisRepository.save(dadosPessoais);
			
			for(Integer idOcupacao : dadosPessoais.getOcupacao())
			{
				OcupacaoDadosPessoais ocupacaoDadosPessoais = new OcupacaoDadosPessoais();
				ocupacaoDadosPessoais.setDadosPessoais(idDadosPessoais.getId());
//				Ocupacao ocupacao = new Ocupacao();
//				ocupacao.setId(idOcupacao);
				ocupacaoDadosPessoais.setOcupacao(idOcupacao);
				
				ocupacaoDadosPessoaisRepository.save(ocupacaoDadosPessoais);
			}
			
			for(Integer idBeneficioSocial: dadosPessoais.getBeneficiosSociais() )
			{
				BeneficioSocialDadosPessoais beneficioSocialDadosPessoais = new BeneficioSocialDadosPessoais();
				beneficioSocialDadosPessoais.setDadosPessoais(idDadosPessoais.getId());
//				BeneficioSocial beneficioSocial= new BeneficioSocial();
//				beneficioSocial.setId(idBeneficioSocial);
				beneficioSocialDadosPessoais.setBeneficioSocial(idBeneficioSocial);
				
				beneficioSocialDadosPessoaisRepository.save(beneficioSocialDadosPessoais);
			}
			
			return new ResponseEntity<>(dadosPessoais, HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

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
