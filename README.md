# Caravan Cost Calculator

Pequena utility web para calcular rapidamente o custo estimado de combustível de uma viagem.

## Funcionalidade

O utilizador introduz:

- Quilómetros
- Consumo médio em L/100 km
- Preço do combustível em €/L

A aplicação calcula o combustível necessário e o custo estimado. Os últimos valores utilizados são guardados localmente no browser.

## Stack

- React 19
- TypeScript
- Vite
- Material UI (MUI)
- Vitest

A aplicação é 100% client-side, sem backend, API, base de dados ou autenticação.

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Testes

```bash
npm run test
```

## Lint

```bash
npm run lint
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Fórmula

```text
Litros = km × consumo / 100

Custo = litros × preço/litro
```

## Arquitetura

A lógica de cálculo está isolada em `src/utils/fuelCalculator.ts`, permitindo testes unitários sem depender do React.

A UI está dividida em formulário, resultado e calculadora principal. A persistência local é encapsulada no hook `useLocalStorage`.
