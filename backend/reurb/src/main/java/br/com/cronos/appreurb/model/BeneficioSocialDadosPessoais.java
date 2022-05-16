package br.com.cronos.appreurb.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TB_BENFICIO_SOCIAL_DADOS_PESSOAIS")
public class BeneficioSocialDadosPessoais implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@OneToOne
	@JoinColumn(name = "FK_BENEFICIO_SOCIAL")
	private BeneficioSocial beneficiosSociais;
	
	@Id
	@OneToOne
	@JoinColumn(name = "FK_DADOS_PESSOAIS")
	private DadosPessoais dadosPessoais;

	public BeneficioSocial getBeneficiosSociais() {
		return beneficiosSociais;
	}

	public void setBeneficiosSociais(BeneficioSocial beneficiosSociais) {
		this.beneficiosSociais = beneficiosSociais;
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
