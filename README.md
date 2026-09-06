# Eduardo Felipe — Desenvolvimento Web

Site profissional e portfólio de Eduardo Felipe de Oliveira. Apresenta criação de sites para pequenos negócios, empresas locais e profissionais autônomos, com atendimento pessoal e comunicação clara.

## Objetivo

Apresentar os serviços de Eduardo e permitir que um possível cliente explore quatro sites demonstrativos completos. Não há clientes, resultados ou depoimentos reais inventados. As demonstrações identificam suas informações fictícias.

## Tecnologias

HTML5, CSS3 e JavaScript puro. Sem frameworks, backend, banco de dados, npm ou etapa de build. As imagens são locais. Não há fontes externas, rastreamento ou dependência de APIs.

## Abrir no computador

Extraia o ZIP e abra `index.html` com dois cliques. Mantenha as pastas juntas. Os links relativos, imagens e estilos funcionam diretamente no navegador. Não é necessário instalar nada ou iniciar servidor. Um editor como VS Code é opcional.

## Estrutura da pasta para download

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Home, serviços, projetos e como funciona |
| `servicos.html` | Landing page, site institucional e presença digital |
| `portfolio.html` | Quatro demonstrações completas |
| `sobre.html` | Apresentação profissional e formação |
| `contato.html` | Canais de contato e formulário |
| `obrigado.html` | Página de confirmação do Netlify Forms |
| `assets/css/style.css` | Identidade principal e responsividade |
| `assets/css/demo.css` | Estrutura compartilhada das demonstrações |
| `assets/js/config.js` | WhatsApp, e-mail, LinkedIn, GitHub e configuração do formulário |
| `assets/js/main.js` | Menu mobile, links, ano e tratamento do formulário |
| `assets/images/` | Fotografias locais, ícone e registro das fontes |
| `projetos/barbearia/` | Barber House, identidade escura e dourada |
| `projetos/clinica/` | Clínica Sorriso, identidade clara e verde |
| `projetos/oficina/` | Auto Prime, identidade grafite e laranja |
| `projetos/solar/` | Solar Prime Energia, identidade verde |

Cada demonstração tem `index.html`, `style.css` e `script.js`. O CSS comum evita repetição; o CSS da própria pasta define sua identidade. O código HTML de cada página é independente: pode ser editado diretamente, sem gerador.

## Personalizar os contatos

Abra `assets/js/config.js`.

- **WhatsApp:** substitua `SEU_NUMERO_WHATSAPP` pelo número completo, com `55`, DDD e número, somente dígitos. Não use espaços, sinal de mais, parênteses ou traços. Os botões passam a abrir `https://wa.me/` com mensagem pronta.
- **E-mail:** preencha `email` com seu endereço. Isso atualiza o link e o texto da página Contato.
- **LinkedIn:** confirme ou substitua a URL em `linkedin`. O endereço informado no seu contexto já está incluído. Para atualizar também a alternativa sem JavaScript, procure a URL antiga nos HTMLs principais.
- **GitHub:** preencha `github` com a URL completa do perfil. Enquanto vazio, o site informa que o perfil está em preparação e leva à página de contato.
- **Texto da mensagem:** edite `greeting` em `assets/js/main.js`.

Nenhum número ou e-mail pessoal foi inventado. Enquanto não existe WhatsApp configurado, os botões principais levam ao contato e o visitante pode acessar o LinkedIn.

## Personalizar textos e aparência

- Altere sua apresentação em `sobre.html` e na seção de apresentação de `index.html`.
- Altere os serviços em `servicos.html` e nos resumos de `index.html`.
- Ajuste as cores nas variáveis `:root`, no começo de `assets/css/style.css`.
- Os cabeçalhos e rodapés são HTML estático: ao mudar o menu, repita a alteração nas seis páginas principais.
- Cada demonstração tem suas próprias variáveis de cor em `projetos/NOME/style.css`.
- Mantenha títulos, descrições e `alt` de imagens coerentes ao trocar conteúdo.

## Imagens

Substitua os arquivos de `assets/images/` mantendo o nome, ou atualize `src` nos HTMLs. Prefira JPG/WebP leves, com qualidade suficiente para a tela. O arquivo `sources.json` registra as fotos do Unsplash usadas e suas fontes. As fotos são ilustrativas e não representam clientes de Eduardo. As galerias também deixam isso claro.

Não há retrato fictício de Eduardo: a apresentação usa suas iniciais. Para usar sua foto, substitua o bloco `initials-panel` por uma imagem local com descrição adequada.

## Adicionar um projeto

1. Copie uma pasta em `projetos/` para um novo nome sem espaços.
2. Edite o HTML, textos, identidade, imagens e os dados da demonstração.
3. Duplique um `article` com classe `project-card` em `portfolio.html` e atualize título, descrição, imagem e os links.
4. Adicione o mesmo card em `index.html` se desejar destacá-lo na Home.
5. Preserve `../../portfolio.html` no link de retorno.
6. Abra o novo projeto pelo portfólio e confira a ida e a volta.

## Formulário: comportamento real

O formulário contém `method="POST"`, `data-netlify="true"`, campo `form-name` e honeypot. Não há backend próprio.

- **Arquivo local e Sites:** com `netlifyForms: false`, o envio não é simulado. Se o WhatsApp estiver configurado, o formulário prepara a mensagem e abre a conversa para o visitante confirmar o envio. Caso contrário, informa que nada foi enviado e permite copiar o texto para conversar pelo LinkedIn.
- **Netlify:** ative a detecção de formulários em **Forms → Enable form detection**. Depois mude `netlifyForms` para `true` em `config.js` e publique novamente. Envie um teste e confirme a chegada no painel Forms antes de divulgar. A confirmação usa `obrigado.html`.
- **Domínio próprio no Netlify:** a mesma configuração funciona; não depende do nome do domínio.
- Não use `netlifyForms: true` na versão Sites, em outro provedor ou antes de configurar o serviço: essa opção faz um POST nativo ao provedor.
- O formulário exige nome, contato, tipo de site e mensagem. Ajuste as notificações no painel Netlify para acompanhar os pedidos. Confirme as condições e limites do seu plano antes de usar.

Documentação oficial: [configuração do Netlify Forms](https://docs.netlify.com/manage/forms/setup/).

## Publicar no GitHub pelo navegador

1. Entre na sua conta GitHub e crie um repositório chamado `portfolio-eduardo`.
2. Abra o repositório e selecione **Add file → Upload files**.
3. Arraste o conteúdo da pasta extraída: HTMLs, `assets`, `projetos`, `README.md` e `netlify.toml`. Envie os arquivos extraídos, não o ZIP.
4. Escreva uma mensagem como `Adiciona site profissional e demonstrações` e confirme em **Commit changes**.
5. Confira se `index.html` aparece na raiz. As pastas precisam manter sua estrutura.

O projeto foi preparado para esse envio. Não foi criado um repositório na sua conta GitHub.

Referências: [criar um repositório](https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github) e [enviar arquivos](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

## Publicar no Netlify

1. Entre no Netlify e escolha adicionar/importar um projeto existente a partir do GitHub.
2. Autorize o acesso ao repositório `portfolio-eduardo` e selecione a branch principal.
3. Este projeto não usa framework. Deixe o comando de build vazio e use `.` como diretório de publicação quando os HTMLs estiverem na raiz.
4. O `netlify.toml` incluído no download já configura a publicação da raiz. Não é necessário npm.
5. Publique e abra o endereço fornecido pelo Netlify.
6. Configure e teste Forms conforme a seção anterior; os arquivos sozinhos não ativam o recebimento.
7. Para atualizar, envie suas alterações ao GitHub. A integração deve publicar os novos commits da branch configurada.

Alternativa: o upload manual de uma pasta estática também serve; a integração GitHub facilita atualizações.

Referência: [documentação de deploy do Netlify](https://docs.netlify.com/deploy/create-deploys/).

## Conectar seu domínio

No projeto Netlify, abra **Domain management → Add a domain → Add a domain you already own**. Informe o domínio e siga a configuração indicada para Netlify DNS ou para o provedor atual. Use os registros específicos mostrados no painel do seu projeto; não há valores fixos neste README. Aguarde a verificação e confira o HTTPS antes de divulgar.

Referências: [associar um domínio](https://docs.netlify.com/manage/domains/manage-domains/assign-a-domain-to-your-site-app/) e [configurar DNS externo](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/).

## Notas sobre esta entrega

São cinco páginas principais, quatro demonstrações e uma página adicional de confirmação. O site inclui menu mobile, estados de foco, link para pular navegação, imagens com descrição, redução de movimento, formulários rotulados, metadados e layouts responsivos.

Foram conferidos arquivos locais, links e âncoras, sintaxe JavaScript e estrutura HTML/CSS. Não foi executada inspeção visual em navegador nesta entrega. Antes da divulgação, revise o visual no seu celular e faça um envio real depois de cadastrar os contatos e ativar o serviço escolhido.

Na cópia mantida pelo Sites, os mesmos arquivos ficam em `dist/` e o diretório publicado é `dist`. No ZIP para GitHub/Netlify, o conteúdo já foi organizado na raiz para facilitar o uso. A versão Sites é privada e não ativa o Netlify Forms. O código não exige o Sites para funcionar.
