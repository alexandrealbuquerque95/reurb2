package br.com.cronos.appreurb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cronos.appreurb.model.Teste;

//public interface TesteRepository extends JpaRepository<Teste, Long> {
public interface TesteRepository {

  List<Teste> findByPublished(boolean published);

  List<Teste> findByTitleContaining(String title);
}
