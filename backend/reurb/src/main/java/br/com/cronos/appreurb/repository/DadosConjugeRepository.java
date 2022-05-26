package br.com.cronos.appreurb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cronos.appreurb.model.DadosConjuge;

public interface DadosConjugeRepository extends JpaRepository<DadosConjuge, Long>
{	
	DadosConjuge findByCpf(String cpf);

}
