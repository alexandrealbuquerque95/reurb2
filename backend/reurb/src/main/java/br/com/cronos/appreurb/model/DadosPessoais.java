package br.com.cronos.appreurb.model;

import java.io.File;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "TB_DADOS_PESSOAIS")
public class DadosPessoais implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "nome")
	private String nome;			
	
	@Column(name = "sexo")
	private Integer sexo;
	
	@Column(name = "celular")
	private String celular;
	
	@Column(name = "telefone")
	private String telefone;
	
	@Column(name = "pessoaComDeficiencia")
	private String pessoaComDeficiencia;
	
	@Column(name = "nomeMae")
	private String nomeMae;
	
	@Column(name = "nomePai")
	private String nomePai;
	
	@Column(name = "municipioNascimento")
	private String municipioNascimento;
	
	@Column(name = "ufNascimento")
	private String ufNascimento;
	
	@Column(name = "dataNascimento")
	private Date dataNascimento;
	
	@Column(name = "emancipado")
	private Integer emancipado;
	
	@Column(name = "rg")
	private String rg;
	
	@Column(name = "orgaoEmissorRG")
	private String orgaoEmissorRG;
	
	@Column(name = "ufEmissorRG")
	private String ufEmissorRG;
	
	@Column(name = "cpf")
	private String cpf;
	
	@Column(name = "nis")
	private String nis;
	
	@Column(name = "escolaridade")
	private Integer escolaridade;
	
	@Column(name = "escolaridadeTexto")
	private String escolaridadeTexto;
	
	@ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JoinTable(name = "TB_DADOS_PESSOAIS_OCUPACOES",
           joinColumns = { @JoinColumn(name = "FK_DADOS_PESSOAIS") },
           inverseJoinColumns = { @JoinColumn(name = "FK_OCUPACAO") })
    private List<Ocupacao> listaOcupacoes;
	
	@Transient
	private List<Integer> ocupacao;

	@Column(name = "ocupacaoTexto")
	private String ocupacaoTexto;
	
	@ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JoinTable(name = "TB_DADOS_PESSOAIS_BENEFICIOS_SOCIAIS",
           joinColumns = { @JoinColumn(name = "FK_Dados_Pessoais") },
           inverseJoinColumns = { @JoinColumn(name = "FK_Beneficio_Social") })
    private List<BeneficioSocial> listaBeneficiosSocial;
	
	@Transient
	private List<Integer> beneficiosSociais;
	
	@Column(name = "beneficiosSociaisDadosPessoaisTexto")
	private String beneficiosSociaisTexto;
	
	@Column(name = "estadoCivil")
	private Integer estadoCivil;
	
	@Column(name = "nomeConjuge")
	private String nomeConjuge;
	
	@Column(name = "dataCasamento")
	private Date dataCasamento;
	
	@Column(name = "regimeBens")
	private Integer regimeBens;
	
	@Column(name = "valorRenda")
	private Double valorRenda;
	
	@Column(name = "anexoDocumentoIdentidade")
	private File anexoDocumentoIdentidade;
	
	@OneToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "FK_DADOS_IMOVEL")
	private DadosImovel dadosImovel;
	
//	@OneToOne
//	@JoinColumn(name = "FK_INTEGRANTE_IMOVEL")
//	private IntegranteImovel integranteImovel;
//	
//	@OneToOne
//	@JoinColumn(name = "FK_CARACTERISTICAS_DOMICILIO")
//	private CaracteristicasDomicilio caracteristicasDomicilio;
//	
//	@OneToOne
//	@JoinColumn(name = "FK_DADOS_CONJUGE")
//	private DadosPessoais dadosConjuge;

	@Override
	public String toString() {
		return "DadosPessoais [id=" + id + ", nome=" + nome + ", sexo=" + sexo + ", celular=" + celular + ", telefone="
				+ telefone + ", pessoaComDeficiencia=" + pessoaComDeficiencia + ", nomeMae=" + nomeMae + ", nomePai="
				+ nomePai + ", municipioNascimento=" + municipioNascimento + ", ufNascimento=" + ufNascimento
				+ ", dataNascimento=" + dataNascimento + ", emancipado=" + emancipado + ", rg=" + rg
				+ ", orgaoEmissorRG=" + orgaoEmissorRG + ", ufEmissorRG=" + ufEmissorRG + ", cpf=" + cpf + ", nis="
				+ nis + ", escolaridade=" + escolaridade + ", escolaridadeTexto=" + escolaridadeTexto + ", ocupacao="
				+ ocupacao + ", ocupacaoTexto=" + ocupacaoTexto + ", listaBeneficiosSocial=" + listaBeneficiosSocial
				+ ", beneficiosSociaisTexto=" + beneficiosSociaisTexto + ", estadoCivil=" + estadoCivil
				+ ", nomeConjuge=" + nomeConjuge + ", dataCasamento=" + dataCasamento + ", regimeBens=" + regimeBens
				+ ", valorRenda=" + valorRenda + ", anexoDocumentoIdentidade=" + anexoDocumentoIdentidade + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getSexo() {
		return sexo;
	}

	public void setSexo(Integer sexo) {
		this.sexo = sexo;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getPessoaComDeficiencia() {
		return pessoaComDeficiencia;
	}

	public void setPessoaComDeficiencia(String pessoaComDeficiencia) {
		this.pessoaComDeficiencia = pessoaComDeficiencia;
	}

	public String getNomeMae() {
		return nomeMae;
	}

	public void setNomeMae(String nomeMae) {
		this.nomeMae = nomeMae;
	}

	public String getNomePai() {
		return nomePai;
	}

	public void setNomePai(String nomePai) {
		this.nomePai = nomePai;
	}

	public String getMunicipioNascimento() {
		return municipioNascimento;
	}

	public void setMunicipioNascimento(String municipioNascimento) {
		this.municipioNascimento = municipioNascimento;
	}

	public String getUfNascimento() {
		return ufNascimento;
	}

	public void setUfNascimento(String ufNascimento) {
		this.ufNascimento = ufNascimento;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public Integer getEmancipado() {
		return emancipado;
	}

	public void setEmancipado(Integer emancipado) {
		this.emancipado = emancipado;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public String getOrgaoEmissorRG() {
		return orgaoEmissorRG;
	}

	public void setOrgaoEmissorRG(String orgaoEmissorRG) {
		this.orgaoEmissorRG = orgaoEmissorRG;
	}

	public String getUfEmissorRG() {
		return ufEmissorRG;
	}

	public void setUfEmissorRG(String ufEmissorRG) {
		this.ufEmissorRG = ufEmissorRG;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getNis() {
		return nis;
	}

	public void setNis(String nis) {
		this.nis = nis;
	}

	public Integer getEscolaridade() {
		return escolaridade;
	}

	public void setEscolaridade(Integer escolaridade) {
		this.escolaridade = escolaridade;
	}

	public String getEscolaridadeTexto() {
		return escolaridadeTexto;
	}

	public void setEscolaridadeTexto(String escolaridadeTexto) {
		this.escolaridadeTexto = escolaridadeTexto;
	}

	public List<Integer> getOcupacao() {
		return ocupacao;
	}

	public void setOcupacao(List<Integer> ocupacao) {
		this.ocupacao = ocupacao;
	}

	public String getOcupacaoTexto() {
		return ocupacaoTexto;
	}

	public void setOcupacaoTexto(String ocupacaoTexto) {
		this.ocupacaoTexto = ocupacaoTexto;
	}

	public String getBeneficiosSociaisTexto() {
		return beneficiosSociaisTexto;
	}

	public void setBeneficiosSociaisTexto(String beneficiosSociaisTexto) {
		this.beneficiosSociaisTexto = beneficiosSociaisTexto;
	}

	public Integer getEstadoCivil() {
		return estadoCivil;
	}

	public void setEstadoCivil(Integer estadoCivil) {
		this.estadoCivil = estadoCivil;
	}

	public String getNomeConjuge() {
		return nomeConjuge;
	}

	public void setNomeConjuge(String nomeConjuge) {
		this.nomeConjuge = nomeConjuge;
	}

	public Date getDataCasamento() {
		return dataCasamento;
	}

	public void setDataCasamento(Date dataCasamento) {
		this.dataCasamento = dataCasamento;
	}

	public Integer getRegimeBens() {
		return regimeBens;
	}

	public void setRegimeBens(Integer regimeBens) {
		this.regimeBens = regimeBens;
	}

	public Double getValorRenda() {
		return valorRenda;
	}

	public void setValorRenda(Double valorRenda) {
		this.valorRenda = valorRenda;
	}

	public File getAnexoDocumentoIdentidade() {
		return anexoDocumentoIdentidade;
	}

	public void setAnexoDocumentoIdentidade(File anexoDocumentoIdentidade) {
		this.anexoDocumentoIdentidade = anexoDocumentoIdentidade;
	}

	public DadosImovel getDadosImovel() {
		return dadosImovel;
	}

	public void setDadosImovel(DadosImovel dadosImovel) {
		this.dadosImovel = dadosImovel;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public List<Integer> getBeneficiosSociais() {
		return beneficiosSociais;
	}
	
	public List<BeneficioSocial> getListaBeneficiosSocial() {
		return listaBeneficiosSocial;
	}

	public void setListaBeneficiosSocial(List<BeneficioSocial> listaBeneficiosSocial) {
		this.listaBeneficiosSocial = listaBeneficiosSocial;
	}

	public void setBeneficiosSociais(List<Integer> beneficiosSociais) {
		this.beneficiosSociais = beneficiosSociais;
	}

	public List<Ocupacao> getListaOcupacoes() {
		return listaOcupacoes;
	}

	public void setListaOcupacoes(List<Ocupacao> listaOcupacoes) {
		this.listaOcupacoes = listaOcupacoes;
	}
	
}
