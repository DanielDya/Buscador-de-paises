# Buscador de Países 🌍

Este projeto é um buscador de países que permite pesquisar e filtrar países por região, exibindo informações básicas como nome e bandeira. Além disso, possui uma página de detalhes funcional para exibir informações mais completas sobre cada país.

## Funcionalidades ✅

- [x] Pesquisar países pelo nome.
- [x] Filtrar países por região (América, Europa, Oceania, África, Ásia).
- [x] Exibir o total de países encontrados.
- [x] Mostrar informações básicas, como nome e bandeira do país.
- [x] Página de detalhes funcional com informações completas sobre o país selecionado.
- [x] Modo escuro (Dark Mode) para melhorar a experiência do usuário.

## Modo Escuro 🌙

O projeto possui um **Dark Mode** que pode ser ativado clicando no botão de alternância no canto superior direito da página. Este modo altera o esquema de cores para tons mais escuros, proporcionando uma experiência mais confortável em ambientes com pouca luz.

### Como funciona:
- O botão de alternância adiciona ou remove a classe `dark-mode` no elemento `<body>` e em outros elementos relevantes.
- Os estilos do modo escuro são definidos no arquivo `style.css`.

### Exemplo de Código:
```javascript
const toggleDarkModeButton = document.getElementById("toggleDarkMode");

toggleDarkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  const countryDetails = document.querySelector(".country-details");
  if (countryDetails) {
    countryDetails.classList.toggle("dark-mode");
  }
});
```

## Design do Projeto 🎨

O design é simples, responsivo e focado na usabilidade, com uma interface intuitiva para facilitar a navegação e a busca por países.

## Como Usar 🚀

1. Digite o nome do país no campo de pesquisa para buscar.
2. Use os filtros para selecionar uma região específica.
3. O total de países encontrados será exibido abaixo do cabeçalho.
4. Os países serão listados com suas bandeiras e nomes.
5. Clique em um país para acessar a página de detalhes e visualizar informações completas.

## Página de Detalhes 🗺️

A página de detalhes exibe informações adicionais sobre o país selecionado, como:
- Nome oficial.
- População.
- Região e sub-região.
- Capital.
- Bandeira em alta resolução.

Para acessar a página de detalhes, basta clicar no nome ou na bandeira de um país listado na página principal.

## Tecnologias Utilizadas 🛠️

- **HTML**: Estrutura da página.
- **CSS**: Estilos para o layout e design.
- **JavaScript**: Lógica para busca, filtros e navegação.
- **API REST Countries**: Fonte de dados sobre os países ([https://restcountries.com/](https://restcountries.com/)).

## Estrutura do Projeto 📂

- **index.html**: Estrutura principal da página.
- **style.css**: Estilos para o layout e design.
- **script.js**: Lógica para busca, filtros e renderização dos países.
- **country.html**: Página de detalhes para exibir informações completas sobre um país.
- **country.js**: Lógica para carregar e exibir os detalhes de um país específico na página `country.html`.

## Sobre o `country.js` 📜

O arquivo `country.js` é responsável por:
- Capturar o código do país (CCA3) da URL.
- Fazer uma requisição à API REST Countries para obter os detalhes do país selecionado.
- Renderizar as informações detalhadas na página `country.html`.

### Exemplo de Uso:
```javascript
// Captura o código do país da URL
const countryCode = new URLSearchParams(window.location.search).get('code');

// Faz a requisição para obter os detalhes do país
fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
  .then(response => response.json())
  .then(data => {
    // Renderiza os detalhes do país na página
    renderCountryDetails(data[0]);
  });
```

## Melhorias Futuras 🔮
- Adicionar modo escuro(Dark Mode) para a pagina de detalhes
- Melhorar a experiência do usuário com animações e transições.
- Adicionar suporte para múltiplos idiomas.
- Permitir a comparação entre países.

## Observações ℹ️

- Este projeto foi desenvolvido na disciplina de Web 1 no curso de ADS do IFCE de Jaguaruana.
- Certifique-se de estar conectado à internet para carregar as bandeiras e informações dos países.

## Contato 📧

- **Email**: joaodanielbernardin@gmail.com
- **GitHub**: [https://github.com/DanielDya](#)

---

> **Nota:** Este projeto é apenas para fins educacionais e demonstração de habilidades em desenvolvimento web.