package br.com.cronos.appreurb.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_INTEGRANTE_IMOVEL")
public class IntegranteImovel implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "nome")
	private String nome;			
	
	@Column(name = "documento")
	private String documento;
	
	@Column(name = "sexo")
	private String sexo;
	
	@Column(name = "relacaoComTitular")
	private String relacaoComTitular;
	
	@Column(name = "dataNascimento")
	private String dataNascimento;
	
	@Column(name = "valorRenda")
	private String valorRenda;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDocumento() {
		return documento;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public String getRelacaoComTitular() {
		return relacaoComTitular;
	}

	public void setRelacaoComTitular(String relacaoComTitular) {
		this.relacaoComTitular = relacaoComTitular;
	}

	public String getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getValorRenda() {
		return valorRenda;
	}

	public void setValorRenda(String valorRenda) {
		this.valorRenda = valorRenda;
	}
}
