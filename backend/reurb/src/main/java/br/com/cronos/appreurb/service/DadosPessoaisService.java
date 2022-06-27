package br.com.cronos.appreurb.service;
import br.com.cronos.appreurb.model.DadosPessoais;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Service;

@Service
public class DadosPessoaisService 
{
	@PersistenceContext
    private EntityManager entityManager;
	
	public List<DadosPessoais> pesquisarDadosPessoais(String cpf, String nome, Integer situacaoCadastro, String enderecoImovel, 
			Integer cep, String bairro, String municipio, String uf) 
	{
		List<DadosPessoais> dadosPessoais = null;
		
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<DadosPessoais> query = builder.createQuery(DadosPessoais.class);
        Root<DadosPessoais> root = query.from(DadosPessoais.class);

        List<Predicate> predicates = new ArrayList<>();
        
        if(cpf != null && !cpf.equals(""))
        {
        	predicates.add(builder.like(root.get("cpf"), "%"+cpf + "%"));
        }
        
        if(nome != null && !nome.equals(""))
        {
        	predicates.add(builder.like(builder.lower(root.get("nome")), "%" + nome.toLowerCase() + "%"));
        }
        if(situacaoCadastro != null && situacaoCadastro != 0)
        {
            predicates.add(builder.equal(root.get("situacaoCadastro"), situacaoCadastro));
        }
        if(enderecoImovel != null && !enderecoImovel.equals(""))
        {
        	predicates.add(builder.like(builder.lower(root.get("dadosImovel.enderecoImovel")), "%" + enderecoImovel.toLowerCase() + "%"));
        }
        
        query.select(root).where(predicates.toArray(new Predicate[] {}));
        TypedQuery<DadosPessoais> createQuery = entityManager.createQuery(query);
        dadosPessoais = createQuery.getResultList();

		return dadosPessoais;
	}
	


}
