package br.com.cronos.appreurb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cronos.appreurb.model.BeneficioSocialDadosPessoais;
import br.com.cronos.appreurb.model.BeneficioSocialDadosPessoaisID;

public interface BeneficioSocialDadosPessoaisRepository extends JpaRepository<BeneficioSocialDadosPessoais, BeneficioSocialDadosPessoaisID>
{	
	List<BeneficioSocialDadosPessoais> findByDadosPessoais(Long dadosPessoais);

}
