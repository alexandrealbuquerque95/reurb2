package br.com.cronos.appreurb.model;

import java.io.Serializable;

public class BeneficioSocialDadosPessoaisID implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	private Integer beneficioSocial;
	
	private Long dadosPessoais;

	public Integer getBeneficioSocial() {
		return beneficioSocial;
	}

	public void setBeneficioSocial(Integer beneficioSocial) {
		this.beneficioSocial = beneficioSocial;
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
