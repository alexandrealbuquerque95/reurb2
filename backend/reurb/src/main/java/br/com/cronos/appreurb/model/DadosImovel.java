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
	@GeneratedValue(strategy = GenerationType.AUTO)
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
	
	@Column(name = "ImovelEh")
	private String ImovelEh;
	
	@Column(name = "usoImovel")
	private String usoImovel;
	
	@Column(name = "tempoOcupacaoImovel")
	private String tempoOcupacaoImovel;
	
	@Column(name = "mais1DomicilioLote")
	private String mais1DomicilioLote;
	
	@Column(name = "quantidadeDomiciliosLote")
	private String quantidadeDomiciliosLote;
	
	@Column(name = "acessoIndependente")
	private String acessoIndependente;
	
	@Column(name = "atendidoEnergiaEletrica")
	private String atendidoEnergiaEletrica;
	
	@Column(name = "atendidoAgua")
	private String atendidoAgua;
	
	@Column(name = "atendidoEsgoto")
	private String atendidoEsgoto;
	
	@Column(name = "atendidoAguasPluviais")
	private String atendidoAguasPluviais;
	
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
		return ImovelEh;
	}

	public void setImovelEh(String imovelEh) {
		ImovelEh = imovelEh;
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

	public String getMais1DomicilioLote() {
		return mais1DomicilioLote;
	}

	public void setMais1DomicilioLote(String mais1DomicilioLote) {
		this.mais1DomicilioLote = mais1DomicilioLote;
	}

	public String getQuantidadeDomiciliosLote() {
		return quantidadeDomiciliosLote;
	}

	public void setQuantidadeDomiciliosLote(String quantidadeDomiciliosLote) {
		this.quantidadeDomiciliosLote = quantidadeDomiciliosLote;
	}

	public String getAcessoIndependente() {
		return acessoIndependente;
	}

	public void setAcessoIndependente(String acessoIndependente) {
		this.acessoIndependente = acessoIndependente;
	}

	public String getAtendidoEnergiaEletrica() {
		return atendidoEnergiaEletrica;
	}

	public void setAtendidoEnergiaEletrica(String atendidoEnergiaEletrica) {
		this.atendidoEnergiaEletrica = atendidoEnergiaEletrica;
	}

	public String getAtendidoAgua() {
		return atendidoAgua;
	}

	public void setAtendidoAgua(String atendidoAgua) {
		this.atendidoAgua = atendidoAgua;
	}

	public String getAtendidoEsgoto() {
		return atendidoEsgoto;
	}

	public void setAtendidoEsgoto(String atendidoEsgoto) {
		this.atendidoEsgoto = atendidoEsgoto;
	}

	public String getAtendidoAguasPluviais() {
		return atendidoAguasPluviais;
	}

	public void setAtendidoAguasPluviais(String atendidoAguasPluviais) {
		this.atendidoAguasPluviais = atendidoAguasPluviais;
	}

	public Integer getAtendidoPavimentacao() {
		return atendidoPavimentacao;
	}

	public void setAtendidoPavimentacao(Integer atendidoPavimentacao) {
		this.atendidoPavimentacao = atendidoPavimentacao;
	}
}
