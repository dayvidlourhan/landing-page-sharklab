# Changelog

## [Unreleased]

### ✨ Features (Adicionado)
- [Setup] Implementado script de injeção de IDs e scroll suave no `index.html` para restaurar a funcionalidade da navbar nos assets pré-compilados.
- [Header] Corrigida a navegação do link "Início" para realizar rolagem suave até o topo da página.

### 🐛 Fix (Corrigido)
- [Setup] Correção do `index.html` para apontar para o código fonte (`src/main.tsx`) em vez de arquivos de build estáticos, resolvendo o problema de sincronização de código no ambiente de desenvolvimento.

### ♻️ Refactor (Alterado/Melhorado)
- [Index] Integração do `SiteHeader` na página principal e centralização da lógica de scroll.

### 🛠️ Chore (Ferramentas/Setup)

- [Setup] Instalação de dependências e ativação do servidor de desenvolvimento (localhost:8080).
- [Git] Alteração do repositório remoto para https://github.com/dayvidlourhan/sharklab.git e push da branch `main`.
- [Git] Atualização da URL remota definitiva para o novo nome: https://github.com/dayvidlourhan/landing-page-sharklab.git.
