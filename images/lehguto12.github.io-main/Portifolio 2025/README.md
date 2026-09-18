# Portfólio de Programador

Este é um portfólio pessoal de programador criado com HTML, CSS e JavaScript, otimizado para performance, interatividade e design moderno. O projeto é hospedável no GitHub Pages e Vercel.

## Funcionalidades

- **Header**: Nome estilizado, navegação com scroll suave, toggle de tema claro/escuro.
- **Hero Section**: Frase de impacto, animação de digitação e partículas, links para CV e redes sociais.
- **Sobre Mim**: Biografia detalhada, galeria com efeito parallax.
- **Habilidades**: Grade de habilidades com ícones animados, descrições ao passar o mouse, incluindo dashboard Power BI embutido.
- **Projetos**: Galeria com filtro por tecnologia, cartões com pré-visualização, descrição e links.
- **Contato**: Formulário funcional com validação JS, ícones de redes sociais.

## Estrutura do Projeto

```
/portfolio
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos principais
├── js/
│   ├── script.js       # Interatividade geral
│   ├── form.js         # Validação do formulário
│   └── theme.js        # Toggle de tema
├── images/             # Imagens do portfólio
├── assets/             # Recursos adicionais
└── README.md           # Este arquivo
```

## Como Rodar Localmente

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/portfolio.git
   cd portfolio
   ```

2. Abra o arquivo `index.html` no navegador.

## Deploy

### GitHub Pages

1. Faça push do código para um repositório no GitHub.
2. Vá para Settings > Pages.
3. Selecione a branch main e a pasta / (root).
4. O site será hospedado em `https://seu-usuario.github.io/portfolio`.

### Vercel

1. Conecte o repositório no Vercel.
2. Configure o build command como vazio (já que é estático).
3. O site será hospedado automaticamente.

## Otimizações

- Código limpo e comentado.
- Design responsivo com breakpoints.
- Animações e transições suaves.
- Compressão de imagens recomendada.
- Uso de CDN para bibliotecas externas (Font Awesome, Particles.js).

## Tecnologias Usadas

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (ES6+)
- Font Awesome (ícones)
- Particles.js (animação)

## Personalização

Edite os arquivos conforme necessário:
- `index.html`: Conteúdo das seções.
- `css/style.css`: Estilos e responsividade.
- `js/`: Lógica de interatividade.
- Substitua placeholders em `images/` por suas próprias imagens.

## Licença

Este projeto é open-source. Sinta-se à vontade para usar e modificar.
