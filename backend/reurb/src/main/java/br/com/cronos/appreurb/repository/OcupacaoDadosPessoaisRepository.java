package br.com.cronos.appreurb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cronos.appreurb.model.DadosPessoais;
import br.com.cronos.appreurb.model.OcupacaoDadosPessoais;
import br.com.cronos.appreurb.model.OcupacaoDadosPessoaisID;

public interface OcupacaoDadosPessoaisRepository extends JpaRepository<OcupacaoDadosPessoais, OcupacaoDadosPessoaisID>
{	
	List<OcupacaoDadosPessoais> findByDadosPessoais(Long dadosPessoais);

}
