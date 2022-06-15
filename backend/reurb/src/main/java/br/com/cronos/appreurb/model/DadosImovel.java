package br.com.cronos.appreurb.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_DADOS_IMOVEL")
public class DadosImovel implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "enderecoImovel")
	private String enderecoImovel;			
	
	@Column(name = "cepImovel")
	private Integer cepImovel;
	
	@Column(name = "ufImovel")
	private String ufImovel;
	
	@Column(name = "municipioImovel")
	private String municipioImovel;
	
	@Column(name = "bairroImovel")
	private String bairroImovel;
	
	@Column(name = "nucleoUrbanoImovel")
	private String nucleoUrbanoImovel;
	
	@Column(name = "imovelEh")
	private String imovelEh;
	
	@Column(name = "usoImovel")
	private String usoImovel;
	
	@Column(name = "tempoOcupacaoImovel")
	private String tempoOcupacaoImovel;
	
	@Column(name = "mais1DomicilioLote")
	private Integer mais1DomicilioLote;
	
	@Column(name = "quantidadeDomiciliosLote")
	private String quantidadeDomiciliosLote;
	
	@Column(name = "acessoIndependente")
	private Integer acessoIndependente;
	
	@Column(name = "atendidoEnergiaEletrica")
	private Integer atendidoEnergiaEletrica;
	
	@Column(name = "atendidoAgua")
	private Integer atendidoAgua;
	
	@Column(name = "atendidoEsgoto")
	private Integer atendidoEsgoto;
	
	@Column(name = "atendidoAguasPluviais")
	private Integer atendidoAguasPluviais;
	
	@Column(name = "atendidoPavimentacao")
	private Integer atendidoPavimentacao;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEnderecoImovel() {
		return enderecoImovel;
	}

	public void setEnderecoImovel(String enderecoImovel) {
		this.enderecoImovel = enderecoImovel;
	}

	public Integer getCepImovel() {
		return cepImovel;
	}

	public void setCepImovel(Integer cepImovel) {
		this.cepImovel = cepImovel;
	}

	public String getUfImovel() {
		return ufImovel;
	}

	public void setUfImovel(String ufImovel) {
		this.ufImovel = ufImovel;
	}

	public String getMunicipioImovel() {
		return municipioImovel;
	}

	public void setMunicipioImovel(String municipioImovel) {
		this.municipioImovel = municipioImovel;
	}

	public String getBairroImovel() {
		return bairroImovel;
	}

	public void setBairroImovel(String bairroImovel) {
		this.bairroImovel = bairroImovel;
	}

	public String getNucleoUrbanoImovel() {
		return nucleoUrbanoImovel;
	}

	public void setNucleoUrbanoImovel(String nucleoUrbanoImovel) {
		this.nucleoUrbanoImovel = nucleoUrbanoImovel;
	}

	public String getImovelEh() {
		return imovelEh;
	}

	public void setImovelEh(String imovelEh) {
		this.imovelEh = imovelEh;
	}

	public String getUsoImovel() {
		return usoImovel;
	}

	public void setUsoImovel(String usoImovel) {
		this.usoImovel = usoImovel;
	}

	public String getTempoOcupacaoImovel() {
		return tempoOcupacaoImovel;
	}

	public void setTempoOcupacaoImovel(String tempoOcupacaoImovel) {
		this.tempoOcupacaoImovel = tempoOcupacaoImovel;
	}

	public Integer getMais1DomicilioLote() {
		return mais1DomicilioLote;
	}

	public void setMais1DomicilioLote(Integer mais1DomicilioLote) {
		this.mais1DomicilioLote = mais1DomicilioLote;
	}

	public String getQuantidadeDomiciliosLote() {
		return quantidadeDomiciliosLote;
	}

	public void setQuantidadeDomiciliosLote(String quantidadeDomiciliosLote) {
		this.quantidadeDomiciliosLote = quantidadeDomiciliosLote;
	}

	public Integer getAcessoIndependente() {
		return acessoIndependente;
	}

	public void setAcessoIndependente(Integer acessoIndependente) {
		this.acessoIndependente = acessoIndependente;
	}

	public Integer getAtendidoEnergiaEletrica() {
		return atendidoEnergiaEletrica;
	}

	public void setAtendidoEnergiaEletrica(Integer atendidoEnergiaEletrica) {
		this.atendidoEnergiaEletrica = atendidoEnergiaEletrica;
	}

	public Integer getAtendidoAgua() {
		return atendidoAgua;
	}

	public void setAtendidoAgua(Integer atendidoAgua) {
		this.atendidoAgua = atendidoAgua;
	}

	public Integer getAtendidoEsgoto() {
		return atendidoEsgoto;
	}

	public void setAtendidoEsgoto(Integer atendidoEsgoto) {
		this.atendidoEsgoto = atendidoEsgoto;
	}

	public Integer getAtendidoAguasPluviais() {
		return atendidoAguasPluviais;
	}

	public void setAtendidoAguasPluviais(Integer atendidoAguasPluviais) {
		this.atendidoAguasPluviais = atendidoAguasPluviais;
	}

	public Integer getAtendidoPavimentacao() {
		return atendidoPavimentacao;
	}

	public void setAtendidoPavimentacao(Integer atendidoPavimentacao) {
		this.atendidoPavimentacao = atendidoPavimentacao;
	}
}
