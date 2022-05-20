package br.com.cronos.appreurb.model;

import java.io.Serializable;

public class OcupacaoDadosPessoaisID implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	private Integer ocupacao;
	
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
