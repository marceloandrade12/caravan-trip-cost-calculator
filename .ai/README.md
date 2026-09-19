# Contexto do projeto para agentes

Este diretório reúne o contexto essencial do projeto para que agentes de codificação possam compreender a arquitetura, as regras de negócio e os padrões do código sem necessidade de inspeção ad hoc.

## Objetivo do projeto

A aplicação é uma pequena web app para calcular rapidamente o custo estimado de combustível de uma viagem.

## Stack principal

- React 19
- TypeScript
- Vite
- Material UI (MUI)
- Vitest
- vite-plugin-pwa

## Estrutura relevante

- src/App.tsx: bootstrap da aplicação e provider do tema.
- src/pages/Home.tsx: página principal que renderiza o componente principal.
- src/components/FuelCalculator.tsx: orquestra o formulário, estado persistente e cálculo.
- src/components/CalculatorForm.tsx: campos de entrada e validação.
- src/components/CalculationResult.tsx: apresentação do resultado.
- src/hooks/useLocalStorage.ts: persistência em localStorage.
- src/utils/fuelCalculator.ts: lógica de cálculo e validação de input.
- src/types/calculator.ts: interfaces de domínio.
- src/test/fuelCalculator.test.ts: cobertura unitária da lógica de cálculo.
- src/theme/theme.ts: tema MUI global.

## Regras de negócio

A fórmula é:

- litros = distancia * consumo / 100
- custo = litros * precoPorLitro

Os valores devem ser maiores que zero. Qualquer input inválido deve ser rejeitado pela validação e pela função calculateFuelCost.

## Observações importantes

- O projeto é 100% client-side; não existe backend, auth, API ou base de dados.
- O estado dos últimos valores é persistido no browser com localStorage.

- Os textos e labels do UI estão em português.
- A lógica de negócio está desacoplada da UI para facilitar testes.

## Comandos úteis

```bash
npm install
npm run dev
npm run test
npm run lint
npm run build
npm run preview
```

## Documento principal

Para mais detalhes ver: .ai/PROJECT_CONTEXT.md
Para instruções específicas para agentes: .ai/AGENTS.md
