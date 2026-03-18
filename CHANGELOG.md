# Changelog

## [Unreleased]

### ✨ Features (Adicionado)
- [Planos] Adicionado o link `wa.me//5562981939260` aos 4 botões de planos (Start, Growth, Scale e Custom).
- [siteData] Atualização completa dos planos de preços para refletir a nova estrutura da SharkLab (Shark Start, Growth, Scale e Custom).
- [PricingSection] Layout ajustado para 4 colunas e botões dinâmicos baseados no `siteData`.
- [Botões] Redirecionamento do botão "FALAR COM A SHARKLAB" para o link `wa.me//5562981939260`.
- [Botões] Redirecionamento do botão "Agendar Diagnóstico" para o link `wa.me//5562981939260`.
- [HeroSection] Texto do botão principal atualizado para "Agendar Diagnóstico" (capitalizado) e link configurado com formato de barra dupla.
- [Setup] Atualização do script de patch no `index.html` para suportar a nova capitalização e formato de link do WhatsApp.
- [Botoes] Alteração dos links dos botões de planos, contato e diagnóstico para o WhatsApp da SharkLab.
- [HeroSection] Texto do botão principal alterado para "Agendar diagnóstico".
- [ContactSection] Texto do botão de WhatsApp alterado para "Falar com a SharkLab".
- [siteData] WhatsApp atualizado para redirecionar diretamente para o link sem mensagem padrão.
- [Footer] Atualização dos links sociais: mantido apenas Instagram e adicionado WhatsApp utilizando o SVG oficial fornecido, com escalas e cores corrigidas para o tema.
- [Footer] Atualização das informações de contato (e-mail, telefone, localização) realizada via "DOM Patching" no `index.html`, garantindo que os dados sejam alterados sem modificar o layout e o design original dos assets pré-compilados.
- [siteData] Atualização do número de WhatsApp para (62) 98193-9260.

### ♻️ Refactor (Alterado/Melhorado)
- [Design] Restauração definitiva do `index.html` para utilizar os assets compilados originais, garantindo a integridade visual do site. As alterações de texto e links foram movidas para scripts de "patching" em tempo de execução para não afetar o design.
- [Setup] Correção do `index.html` para carregar o código React (`src/main.tsx`) em vez de assets estáticos antigos (Revertido para manter design).

### 🛠️ Chore (Ferramentas/Setup)

- [Setup] Instalação de dependências e ativação do servidor de desenvolvimento (localhost:8080).
- [Git] Alteração do repositório remoto para https://github.com/dayvidlourhan/sharklab.git e push da branch `main`.
- [Git] Atualização da URL remota definitiva para o novo nome: https://github.com/dayvidlourhan/landing-page-sharklab.git.
