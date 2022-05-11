package br.com.cronos.appreurb.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cronos.appreurb.model.ERole;
import br.com.cronos.appreurb.model.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
