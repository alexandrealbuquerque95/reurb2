package br.com.cronos.appreurb.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "TB_INTEGRANTE_IMOVEL")
public class IntegranteImovel implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "nome")
	private String nome;			
	
	@Column(name = "documento")
	private String documento;
	
	@Column(name = "sexo")
	private Integer sexo;
	
	@Column(name = "relacaoComTitular")
	private String relacaoComTitular;
	
	@Column(name = "dataNascimento")
	private String dataNascimento;
	
	@Column(name = "valorRenda")
	private String valorRenda;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "FK_DADOS_PESSOAIS")
	private DadosPessoais dadosPessoais;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	public Integer getSexo() {
		return sexo;
	}

	public void setSexo(Integer sexo) {
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

	public DadosPessoais getDadosPessoais() {
		return dadosPessoais;
	}

	public void setDadosPessoais(DadosPessoais dadosPessoais) {
		this.dadosPessoais = dadosPessoais;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dadosPessoais == null) ? 0 : dadosPessoais.hashCode());
		result = prime * result + ((dataNascimento == null) ? 0 : dataNascimento.hashCode());
		result = prime * result + ((documento == null) ? 0 : documento.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		result = prime * result + ((relacaoComTitular == null) ? 0 : relacaoComTitular.hashCode());
		result = prime * result + ((sexo == null) ? 0 : sexo.hashCode());
		result = prime * result + ((valorRenda == null) ? 0 : valorRenda.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		IntegranteImovel other = (IntegranteImovel) obj;
		if (dadosPessoais == null) {
			if (other.dadosPessoais != null)
				return false;
		} else if (!dadosPessoais.equals(other.dadosPessoais))
			return false;
		if (dataNascimento == null) {
			if (other.dataNascimento != null)
				return false;
		} else if (!dataNascimento.equals(other.dataNascimento))
			return false;
		if (documento == null) {
			if (other.documento != null)
				return false;
		} else if (!documento.equals(other.documento))
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		if (relacaoComTitular == null) {
			if (other.relacaoComTitular != null)
				return false;
		} else if (!relacaoComTitular.equals(other.relacaoComTitular))
			return false;
		if (sexo == null) {
			if (other.sexo != null)
				return false;
		} else if (!sexo.equals(other.sexo))
			return false;
		if (valorRenda == null) {
			if (other.valorRenda != null)
				return false;
		} else if (!valorRenda.equals(other.valorRenda))
			return false;
		return true;
	}
	
	
}
