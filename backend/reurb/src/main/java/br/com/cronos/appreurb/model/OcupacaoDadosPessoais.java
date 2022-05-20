package br.com.cronos.appreurb.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "TB_OCUPACAO_DADOS_PESSOAIS")
@IdClass(OcupacaoDadosPessoaisID.class)
public class OcupacaoDadosPessoais implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	private Integer ocupacao;
	
	@Id
	private Long dadosPessoais;

	public Integer getOcupacao() {
		return ocupacao;
	}

	public void setOcupacao(Integer ocupacao) {
		this.ocupacao = ocupacao;
	}

	public Long getDadosPessoais() {
		return dadosPessoais;
	}

	public void setDadosPessoais(Long dadosPessoais) {
		this.dadosPessoais = dadosPessoais;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}		

}
