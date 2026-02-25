# Teste Certificação - Cypress

Projeto de automação E2E utilizando Cypress para validação da landing page de certificação da APPRBS.

## 🎯 Objetivo

Automatizar cenários críticos da página:
- Validação de carregamento
- Testes de formulário
- Validação de redirecionamento
- Validação de links externos
- Verificação de inconsistências de conteúdo

## 🛠 Tecnologias utilizadas

- Cypress 15
- Node.js
- JavaScript

## 🧪 Cenários Automatizados

Total: 11 testes

✔ 4 passaram  
❌ 7 falharam  

## 🐞 Bugs Identificados

- Formulário não redireciona após envio válido
- Botão superior "Saiba mais" não redireciona
- Link direcionando para google.com.br incorretamente
- Elementos sem atributo href
- Texto com erro ortográfico ("Salba mais")

## 📸 Evidências

Screenshots automáticos gerados pelo Cypress para todos os testes falhos.

## 🚀 Como executar

```bash
npm install
npx cypress run