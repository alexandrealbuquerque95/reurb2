package br.com.cronos.appreurb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cronos.appreurb.model.DadosPessoais;

public interface DadosPessoaisRepository extends JpaRepository<DadosPessoais, Long>
{	
	DadosPessoais findByCpf(String cpf);

}
