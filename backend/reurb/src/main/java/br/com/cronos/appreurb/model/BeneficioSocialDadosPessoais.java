package br.com.cronos.appreurb.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "TB_BENFICIO_SOCIAL_DADOS_PESSOAIS")
@IdClass(BeneficioSocialDadosPessoaisID.class)
public class BeneficioSocialDadosPessoais implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	private Integer beneficioSocial;
	
	@Id
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
