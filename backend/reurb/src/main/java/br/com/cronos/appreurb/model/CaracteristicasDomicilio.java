package br.com.cronos.appreurb.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "TB_CARACTERISTICA_DOMICILIO")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class CaracteristicasDomicilio implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "estruturaEstavel")
	private String estruturaEstavel;			
	
	@Column(name = "necessidadeReconstrucao")
	private String necessidadeReconstrucao;
	
	@Column(name = "numeroComodos")
	private String numeroComodos;
	
	@Column(name = "numeroMoradoresPorComodo")
	private String numeroMoradoresPorComodo;
	
	@Column(name = "numeroBanheiros")
	private String numeroBanheiros;
	
	@Column(name = "materialParedeExterna")
	private String materialParedeExterna;
	
	@Column(name = "materialParedeExternaTexto")
	private String materialParedeExternaTexto;
	
	@Column(name = "condicoesParede")
	private String condicoesParede;
	
	@Column(name = "materialPiso")
	private String materialPiso;
	
	@Column(name = "materialPisoTexto")
	private String materialPisoTexto;
	
	@Column(name = "condicoesPiso")
	private String condicoesPiso;
	
	@Column(name = "materialInstalacaoEletrica")
	private String materialInstalacaoEletrica;
	
	@Column(name = "materialInstalacaoEletricaTexto")
	private String materialInstalacaoEletricaTexto;
	
	@Column(name = "condicoesInstalacaoEletrica")
	private String condicoesInstalacaoEletrica;
	
	@Column(name = "esgotoSanitario")
	private String esgotoSanitario;
	
	@Column(name = "esgotoSanitarioTexto")
	private String esgotoSanitarioTexto;
	
	@Column(name = "condicoesEsgotoSanitario")
	private String condicoesEsgotoSanitario;
	
//	@Column(name = "mostrarOutrosMaterialParedeExterna")
//	private Boolean mostrarOutrosMaterialParedeExterna;
//	
//	@Column(name = "mostrarOutrosMaterialPiso")
//	private Boolean mostrarOutrosMaterialPiso;
//	
//	@Column(name = "mostrarOutrosMaterialInstalacaoEletrica")
//	private Boolean mostrarOutrosMaterialInstalacaoEletrica;
//	
//	@Column(name = "mostrarOutrosEsgotoSanitario")
//	private Boolean mostrarOutrosEsgotoSanitario;
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEstruturaEstavel() {
		return estruturaEstavel;
	}

	public void setEstruturaEstavel(String estruturaEstavel) {
		this.estruturaEstavel = estruturaEstavel;
	}

	public String getNecessidadeReconstrucao() {
		return necessidadeReconstrucao;
	}

	public void setNecessidadeReconstrucao(String necessidadeReconstrucao) {
		this.necessidadeReconstrucao = necessidadeReconstrucao;
	}

	public String getNumeroComodos() {
		return numeroComodos;
	}

	public void setNumeroComodos(String numeroComodos) {
		this.numeroComodos = numeroComodos;
	}

	public String getNumeroMoradoresPorComodo() {
		return numeroMoradoresPorComodo;
	}

	public void setNumeroMoradoresPorComodo(String numeroMoradoresPorComodo) {
		this.numeroMoradoresPorComodo = numeroMoradoresPorComodo;
	}

	public String getNumeroBanheiros() {
		return numeroBanheiros;
	}

	public void setNumeroBanheiros(String numeroBanheiros) {
		this.numeroBanheiros = numeroBanheiros;
	}

	public String getMaterialParedeExterna() {
		return materialParedeExterna;
	}

	public void setMaterialParedeExterna(String materialParedeExterna) {
		this.materialParedeExterna = materialParedeExterna;
	}

	public String getMaterialParedeExternaTexto() {
		return materialParedeExternaTexto;
	}

	public void setMaterialParedeExternaTexto(String materialParedeExternaTexto) {
		this.materialParedeExternaTexto = materialParedeExternaTexto;
	}

	public String getCondicoesParede() {
		return condicoesParede;
	}

	public void setCondicoesParede(String condicoesParede) {
		this.condicoesParede = condicoesParede;
	}

	public String getMaterialPiso() {
		return materialPiso;
	}

	public void setMaterialPiso(String materialPiso) {
		this.materialPiso = materialPiso;
	}

	public String getMaterialPisoTexto() {
		return materialPisoTexto;
	}

	public void setMaterialPisoTexto(String materialPisoTexto) {
		this.materialPisoTexto = materialPisoTexto;
	}

	public String getCondicoesPiso() {
		return condicoesPiso;
	}

	public void setCondicoesPiso(String condicoesPiso) {
		this.condicoesPiso = condicoesPiso;
	}

	public String getMaterialInstalacaoEletrica() {
		return materialInstalacaoEletrica;
	}

	public void setMaterialInstalacaoEletrica(String materialInstalacaoEletrica) {
		this.materialInstalacaoEletrica = materialInstalacaoEletrica;
	}

	public String getMaterialInstalacaoEletricaTexto() {
		return materialInstalacaoEletricaTexto;
	}

	public void setMaterialInstalacaoEletricaTexto(String materialInstalacaoEletricaTexto) {
		this.materialInstalacaoEletricaTexto = materialInstalacaoEletricaTexto;
	}

	public String getCondicoesInstalacaoEletrica() {
		return condicoesInstalacaoEletrica;
	}

	public void setCondicoesInstalacaoEletrica(String condicoesInstalacaoEletrica) {
		this.condicoesInstalacaoEletrica = condicoesInstalacaoEletrica;
	}

	public String getEsgotoSanitario() {
		return esgotoSanitario;
	}

	public void setEsgotoSanitario(String esgotoSanitario) {
		this.esgotoSanitario = esgotoSanitario;
	}

	public String getEsgotoSanitarioTexto() {
		return esgotoSanitarioTexto;
	}

	public void setEsgotoSanitarioTexto(String esgotoSanitarioTexto) {
		this.esgotoSanitarioTexto = esgotoSanitarioTexto;
	}

	public String getCondicoesEsgotoSanitario() {
		return condicoesEsgotoSanitario;
	}

	public void setCondicoesEsgotoSanitario(String condicoesEsgotoSanitario) {
		this.condicoesEsgotoSanitario = condicoesEsgotoSanitario;
	}

//	public Boolean getMostrarOutrosMaterialParedeExterna() {
//		return mostrarOutrosMaterialParedeExterna;
//	}
//
//	public void setMostrarOutrosMaterialParedeExterna(Boolean mostrarOutrosMaterialParedeExterna) {
//		this.mostrarOutrosMaterialParedeExterna = mostrarOutrosMaterialParedeExterna;
//	}
//
//	public Boolean getMostrarOutrosMaterialPiso() {
//		return mostrarOutrosMaterialPiso;
//	}
//
//	public void setMostrarOutrosMaterialPiso(Boolean mostrarOutrosMaterialPiso) {
//		this.mostrarOutrosMaterialPiso = mostrarOutrosMaterialPiso;
//	}
//
//	public Boolean getMostrarOutrosMaterialInstalacaoEletrica() {
//		return mostrarOutrosMaterialInstalacaoEletrica;
//	}
//
//	public void setMostrarOutrosMaterialInstalacaoEletrica(Boolean mostrarOutrosMaterialInstalacaoEletrica) {
//		this.mostrarOutrosMaterialInstalacaoEletrica = mostrarOutrosMaterialInstalacaoEletrica;
//	}
//
//	public Boolean getMostrarOutrosEsgotoSanitario() {
//		return mostrarOutrosEsgotoSanitario;
//	}
//
//	public void setMostrarOutrosEsgotoSanitario(Boolean mostrarOutrosEsgotoSanitario) {
//		this.mostrarOutrosEsgotoSanitario = mostrarOutrosEsgotoSanitario;
//	}
}
