package br.com.cronos.appreurb.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TB_OCUPACAO_DADOS_PESSOAIS")
public class OcupacaoDadosPessoais implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@OneToOne
	@JoinColumn(name = "FK_OCUPACAO")
	private Ocupacao ocupacao;
	
	@Id
	@OneToOne
	@JoinColumn(name = "FK_DADOS_PESSOAIS")
	private DadosPessoais dadosPessoais;

	public Ocupacao getOcupacao() {
		return ocupacao;
	}

	public void setOcupacao(Ocupacao ocupacao) {
		this.ocupacao = ocupacao;
	}

	public DadosPessoais getDadosPessoais() {
		return dadosPessoais;
	}

	public void setDadosPessoais(DadosPessoais dadosPessoais) {
		this.dadosPessoais = dadosPessoais;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}		

}
