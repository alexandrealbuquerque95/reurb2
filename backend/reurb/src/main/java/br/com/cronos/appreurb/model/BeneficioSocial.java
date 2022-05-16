package br.com.cronos.appreurb.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_BENFICIO_SOCIAL")
public class BeneficioSocial implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "nomeBeneficioSocial")
	private String nomeBeneficioSocial;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNomeBeneficioSocial() {
		return nomeBeneficioSocial;
	}

	public void setNomeBeneficioSocial(String nomeBeneficioSocial) {
		this.nomeBeneficioSocial = nomeBeneficioSocial;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}			

}
