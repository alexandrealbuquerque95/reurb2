package br.com.cronos.appreurb.repository;

import java.util.List;

import br.com.cronos.appreurb.model.Teste;

//public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
public interface TesteRepository {

  List<Teste> findByPublished(boolean published);

  List<Teste> findByTitleContaining(String title);
}
