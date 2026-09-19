# Project context

## Visão geral

Este repositório contém uma aplicação frontend para calcular o custo estimado de combustível de uma viagem em caravan/trip. O objetivo é permitir ao utilizador introduzir distância, consumo e preço do combustível e obter imediatamente:

- quantidade de combustível necessária em litros
- custo total estimado em euros

## Fluxo funcional

1. O utilizador abre a aplicação.
2. Os campos de entrada aparecem com valores iniciais predefinidos.
3. A cada alteração, o formulário valida os valores.
4. Se todos os campos forem válidos, o cálculo é executado.
5. O resultado é exibido em destaque.
6. Os valores atuais são guardados automaticamente em localStorage.
7. O botão "Limpar" repõe os valores iniciais.

## Arquitetura

### UI e componentes

- App.tsx: envolve a aplicação em ThemeProvider e CssBaseline.
- Home.tsx: renderiza a página principal com layout centralizado.
- FuelCalculator.tsx: componente principal de domínio. É responsável por:
  - ler e guardar valores em localStorage
  - gerar o resultado inicial
  - recalcular sempre que os dados mudam
  - limpar os valores para os defaults
- CalculatorForm.tsx: formulário controlado com validação por campo.
- CalculationResult.tsx: mostra os números em UI amigável com formatação em euros e litros.

### Estado e persistência

- useLocalStorage.ts encapsula leitura e escrita em localStorage.
- A chave usada é: caravan-cost-calculator:values
- Os valores persistidos seguem a interface CalculatorValues:
  - kilometers: string
  - consumption: string
  - pricePerLiter: string

### Lógica de cálculo

- src/utils/fuelCalculator.ts exporta calculateFuelCost.
- Recebe um objeto com kilometers, consumption, pricePerLiter.
- Valida se todos os valores são > 0.
- Retorna { litersRequired, fuelCost }.
- Não depende de React nem de browser.

### Tipos

O ficheiro src/types/calculator.ts define:

- FuelCalculationInput
- FuelCalculationResult
- CalculatorValues

### Tema visual

- src/theme/theme.ts usa createTheme do MUI.
- Paleta principal azul em tons moderados.
- Layout base com card central, botões e inputs responsivos.

## Testes

Os testes residem em src/test/fuelCalculator.test.ts e cobrem:

- caso normal
- valores decimais
- valores pequenos
- valores grandes
- rejeição de input inválido

## Convenções do projeto

- preferir manter a lógica de cálculo fora do React
- manter labels e mensagens em português
- não introduzir backend ou estado global desnecessário
- priorizar simplicidade, clareza e testes unitários
- manter o código em TypeScript com tipagem explícita

## Ficheiros de configuração

- package.json: scripts e dependências
- vite.config.ts: configuração do Vite e PWA
- eslint.config.js: regras de lint
- tsconfig*.json: tipos e build

## Resumo do comportamento esperado

Quando o utilizador entra valores válidos, a aplicação calcula o combustível necessário e o custo estimado. Quando valores inválidos ou vazios são inseridos, a UI mostra erros e o botão de cálculo fica desativado. A lógica principal deve ser estável, testável e independente de renderização.
