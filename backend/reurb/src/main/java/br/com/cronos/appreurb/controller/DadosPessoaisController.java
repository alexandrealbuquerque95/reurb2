package br.com.cronos.appreurb.controller;

import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
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
import org.springframework.web.multipart.MultipartFile;

import br.com.cronos.appreurb.model.ArquivoDocumentoPessoal;
import br.com.cronos.appreurb.model.DadosConjuge;
import br.com.cronos.appreurb.model.DadosPessoais;
import br.com.cronos.appreurb.model.IntegranteImovel;
import br.com.cronos.appreurb.repository.ArquivoDocumentoPessoalRepository;
import br.com.cronos.appreurb.repository.DadosConjugeRepository;
import br.com.cronos.appreurb.repository.DadosPessoaisRepository;
import br.com.cronos.appreurb.repository.IntegranteImovelRepository;

//@CrossOrigin(origins = "*")
@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "http://reurb.s3-website-sa-east-1.amazonaws.com")
@RestController
@RequestMapping("/api")
public class DadosPessoaisController 
{
    private final String pathArquivos = "anexos/documento_pessoal/";
    private final String pathFotosImovel= "anexos/fotos_imovel/";
    private final String pathComprovanteRenda= "anexos/comprovante_renda/";


	@Autowired
	DadosPessoaisRepository dadosPessoaisRepository;
	
	@Autowired
	DadosConjugeRepository dadosConjugeRepository;
	
	@Autowired
	IntegranteImovelRepository integranteImovelRepository;
	
	@Autowired
	ArquivoDocumentoPessoalRepository arquivoDocumentoPessoalRepository;
		
	@Transactional
	@RequestMapping(value="/dados_pessoais", method= RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<DadosPessoais> salvarDadosPessoais(@RequestBody DadosPessoais dadosPessoais) 
	{
		try 
		{
			System.out.println(dadosPessoais);
			DadosPessoais dadosPessoaisConsulta = null;
			
			if(dadosPessoais.getCpf() != null && !dadosPessoais.getCpf().equals(""))
			{
				dadosPessoaisConsulta = dadosPessoaisRepository.findByCpf(dadosPessoais.getCpf());
				if(dadosPessoaisConsulta != null)
				{
					dadosPessoais.setId(dadosPessoaisConsulta.getId());
					
					if(dadosPessoaisConsulta.getDadosImovel() != null)
					{
						if(dadosPessoais.getDadosImovel() != null)
						{
							dadosPessoais.getDadosImovel().setId(dadosPessoaisConsulta.getDadosImovel().getId());
						}
					}
					
					if(dadosPessoaisConsulta.getDadosConjuge() != null)
					{
						if(dadosPessoais.getDadosConjuge() != null)
						{
							dadosPessoais.getDadosConjuge().setId(dadosPessoaisConsulta.getDadosConjuge().getId());
						}
					}
					
					if(dadosPessoaisConsulta.getCaracteristicasDomicilio() != null)
					{
						if(dadosPessoais.getCaracteristicasDomicilio() != null)
						{
							dadosPessoais.getCaracteristicasDomicilio().setId(dadosPessoaisConsulta.getCaracteristicasDomicilio().getId());
						}
					}
				}
				
			}
			
			if(dadosPessoais.getDadosConjuge() != null)
			{
				salvarDadosConjuge(dadosPessoais.getDadosConjuge());
			}
			
			if(dadosPessoais.getListaIntegranteImovel() != null)
			{
				if(dadosPessoaisConsulta != null && !dadosPessoaisConsulta.getListaIntegranteImovel().isEmpty())
				{
					for(IntegranteImovel integranteSalvo : dadosPessoaisConsulta.getListaIntegranteImovel())
					{
						boolean apagar = true;
						for(IntegranteImovel integranteImovel : dadosPessoais.getListaIntegranteImovel())
						{
							if(integranteImovel.getId() != null && 
								integranteImovel.getId().equals(integranteSalvo.getId()) )
							{
								apagar = false;
								break;
							}
						}
						
						if(apagar)
						{
							integranteImovelRepository.deleteIntegranteImovelById(integranteSalvo.getId());
							integranteImovelRepository.flush();
						}
					}
				}
			}
			
			dadosPessoais = dadosPessoaisRepository.save(dadosPessoais);
						
			return new ResponseEntity<>(dadosPessoais, HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	public void salvarDadosConjuge(@RequestBody DadosConjuge dadosConjuge) 
	{
		try 
		{
			System.out.println(dadosConjuge);
			
			if(dadosConjuge.getCpf() != null && !dadosConjuge.getCpf().equals(""))
			{
				DadosConjuge dadosConjugeConsulta = dadosConjugeRepository.findByCpf(dadosConjuge.getCpf());
				if(dadosConjugeConsulta != null)
				{
					dadosConjuge.setId(dadosConjugeConsulta.getId());
				}
			}
			
			dadosConjugeRepository.save(dadosConjuge);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@PostMapping("dados_pessoais/arquivo_pessoal/{id}")
    public ResponseEntity<String> salvarArquivoPessoal(@PathVariable("id") Long id, @RequestParam("file") MultipartFile file) 
	{
		//System.out.println("Recebendo o arquivo: " + file.getOriginalFilename());
		
//		String caminho = pathArquivos + UUID.randomUUID() + "-" + file.getOriginalFilename();
		String novoNomeArquivo = id + " --- " + file.getOriginalFilename();
		String caminho = pathArquivos + novoNomeArquivo;

		System.out.println("Novo nome do arquivo: " + novoNomeArquivo);
		System.out.println("Caminho pro arquivo: " + caminho);
		
		Path path = FileSystems.getDefault().getPath(caminho);

        try 
        {
        	System.out.println(Files.exists(path));
        	if(!Files.exists(path))
        	{
        		Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
                
                ArquivoDocumentoPessoal arquivoDocumentoPessoal = new ArquivoDocumentoPessoal();
                arquivoDocumentoPessoal.setNomeArquivo(novoNomeArquivo);
                DadosPessoais dadosPessoais = new DadosPessoais();
                dadosPessoais.setId(id);
                arquivoDocumentoPessoal.setDadosPessoais(dadosPessoais);
                arquivoDocumentoPessoalRepository.save(arquivoDocumentoPessoal);
        	}
        	
            return new ResponseEntity<>("{ \"mensagem\": \"Arquivo carregado com sucesso!\"}", HttpStatus.OK);
        } catch (Exception e) {
        	e.printStackTrace();
            return new ResponseEntity<>("{ \"mensagem\": \"Erro ao carregar o arquivo!\"}", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	@PostMapping("dados_pessoais/foto_Imovel/{id}")
    public ResponseEntity<String> salvarFotoImovel(@PathVariable("id") Long id, @RequestParam("file") MultipartFile file) 
	{
		//System.out.println("Recebendo o arquivo: " + file.getOriginalFilename());
		
//		String caminho = pathArquivos + UUID.randomUUID() + "-" + file.getOriginalFilename();
		String novoNomeArquivo = id + " --- " + file.getOriginalFilename();
		String caminho = pathFotosImovel + novoNomeArquivo;

		System.out.println("Novo nome do arquivo: " + novoNomeArquivo);
		System.out.println("Caminho pro arquivo: " + caminho);
		
		Path path = FileSystems.getDefault().getPath(caminho);

        try 
        {
        	System.out.println(Files.exists(path));
        	if(!Files.exists(path))
        	{
        		Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
                
                ArquivoDocumentoPessoal arquivoDocumentoPessoal = new ArquivoDocumentoPessoal();
                arquivoDocumentoPessoal.setNomeArquivo(novoNomeArquivo);
                DadosPessoais dadosPessoais = new DadosPessoais();
                dadosPessoais.setId(id);
                arquivoDocumentoPessoal.setDadosPessoais(dadosPessoais);
                arquivoDocumentoPessoalRepository.save(arquivoDocumentoPessoal);
        	}
        	
            return new ResponseEntity<>("{ \"mensagem\": \"Foto carregada com sucesso!\"}", HttpStatus.OK);
        } catch (Exception e) {
        	e.printStackTrace();
            return new ResponseEntity<>("{ \"mensagem\": \"Erro ao carregar foto!\"}", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	@PostMapping("dados_pessoais/comprovante_renda/{id}")
    public ResponseEntity<String> salvarComprovanteRenda(@PathVariable("id") Long id, @RequestParam("file") MultipartFile file) 
	{
		//System.out.println("Recebendo o arquivo: " + file.getOriginalFilename());
		
//		String caminho = pathArquivos + UUID.randomUUID() + "-" + file.getOriginalFilename();
		String novoNomeArquivo = id + " --- " + file.getOriginalFilename();
		String caminho = pathComprovanteRenda + novoNomeArquivo;

		System.out.println("Novo nome do arquivo: " + novoNomeArquivo);
		System.out.println("Caminho pro arquivo: " + caminho);
		
		Path path = FileSystems.getDefault().getPath(caminho);

        try 
        {
        	System.out.println(Files.exists(path));
        	if(!Files.exists(path))
        	{
        		Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
                
                ArquivoDocumentoPessoal arquivoDocumentoPessoal = new ArquivoDocumentoPessoal();
                arquivoDocumentoPessoal.setNomeArquivo(novoNomeArquivo);
                DadosPessoais dadosPessoais = new DadosPessoais();
                dadosPessoais.setId(id);
                arquivoDocumentoPessoal.setDadosPessoais(dadosPessoais);
                arquivoDocumentoPessoalRepository.save(arquivoDocumentoPessoal);
        	}
        	
            return new ResponseEntity<>("{ \"mensagem\": \"Comprovante de renda carregado com sucesso!\"}", HttpStatus.OK);
        } catch (Exception e) {
        	e.printStackTrace();
            return new ResponseEntity<>("{ \"mensagem\": \"Erro ao carregar o Comprovante de renda!\"}", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	@GetMapping("/dados_pessoais/pesquisar/{cpf}/{nome}")
	public ResponseEntity<List<DadosPessoais>> listarTodos() 
	{
		try 
		{
			List<DadosPessoais> dadosPessoais = dadosPessoaisRepository.findAll();

			if (dadosPessoais.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(dadosPessoais, HttpStatus.OK);
			
		} 
		catch (Exception e) 
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
			
	@GetMapping("/dados_pessoais/pesquisar/{cpf}/{nome}")
	public ResponseEntity<List<DadosPessoais>> pesquisar(@PathVariable("cpf") String cpf, @PathVariable("nome") String nome, String situacao, String localizacao,
			Integer cep, String bairro, String municipio, String uf) 
	{
		try 
		{
			List<DadosPessoais> dadosPessoais = dadosPessoaisRepository.consultarDadosPessoais(cpf, nome);

			if (dadosPessoais.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(dadosPessoais, HttpStatus.OK);
			
		} 
		catch (Exception e) 
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
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


}
