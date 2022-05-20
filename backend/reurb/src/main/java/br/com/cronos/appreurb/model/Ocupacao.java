package br.com.cronos.appreurb.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_OCUPACAO")
public class Ocupacao implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(name = "nomeOcupacao")
	private String nomeOcupacao;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNomeOcupacao() {
		return nomeOcupacao;
	}

	public void setNomeOcupacao(String nomeOcupacao) {
		this.nomeOcupacao = nomeOcupacao;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}			
}
