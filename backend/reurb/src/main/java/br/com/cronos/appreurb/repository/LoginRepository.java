package br.com.cronos.appreurb.repository;

import java.util.List;

import br.com.cronos.appreurb.model.Login;

//public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
public interface LoginRepository {

  List<Login> findByPublished(boolean published);

  List<Login> findByTitleContaining(String title);
}
