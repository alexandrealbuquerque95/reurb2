package br.com.cronos.appreurb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.cronos.appreurb.model.DadosPessoais;

public interface DadosPessoaisRepository extends JpaRepository<DadosPessoais, Long>
{	
	DadosPessoais findByCpf(String cpf);
	
	@Query(value = "select dp from DadosPessoais dp where dp.cpf like %:cpf% and dp.nome like %:nome%")
	public List<DadosPessoais> consultarDadosPessoais(@Param("cpf") String cpf, @Param("nome") String nome);
	
	@Query(value = "select dp from DadosPessoais dp where dp.cpf like %:cpf%")
	public List<DadosPessoais> consultarDadosPessoais(@Param("cpf") String cpf);
	

}
