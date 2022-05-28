package br.com.cronos.appreurb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import br.com.cronos.appreurb.model.IntegranteImovel;

public interface IntegranteImovelRepository extends JpaRepository<IntegranteImovel, Long>
{
	@Modifying
    @Query("delete from IntegranteImovel ii where ii.id = ?1")
    void deleteIntegranteImovelById(Long id);

}
