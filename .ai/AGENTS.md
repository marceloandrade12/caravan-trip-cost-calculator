# Instruções para agentes

## Contexto

Este projeto é uma aplicação React + TypeScript para estimar o custo de combustível de uma viagem. O objetivo é simples, estável e orientado para testes.

## Regras fundamentais

- Não introduzir backend, autenticação, APIs, banco de dados ou estado global complexo.
- Manter a lógica de negócio em src/utils e testes em src/test.
- Manter a UI em componentes React com MUI.
- Priorizar TypeScript seguro e tipagem explícita.
- Manter textos e feedbacks em português.
- Não adicionar dependências desnecessárias.

## Arquitetura recomendada

- Lógica de cálculo: src/utils/fuelCalculator.ts
- Tipos: src/types/calculator.ts
- Persistência local: src/hooks/useLocalStorage.ts
- Formulário: src/components/CalculatorForm.tsx
- Resultado: src/components/CalculationResult.tsx
- Componente principal: src/components/FuelCalculator.tsx

## Comandos obrigatórios para validação

Antes de concluir alterações relevantes, usar:

```bash
npm run test
npm run lint
npm run build
```

Se for uma alteração pequena e focada, pode ser suficiente executar os testes e/ou lint específicos, mas o ideal é manter a validação completa.

## Convenções de implementação

- A função calculateFuelCost deve rejeitar qualquer input <= 0.
- Os valores em UI são strings no formulário, mas a lógica deve converter para number antes do cálculo.
- O localStorage deve permanecer silencioso em caso de erro de acesso ao browser.
- Os resultados devem ser formatados com a moeda EUR em pt-PT.
- Os erros de validação devem ser específicos por campo.

## Padrões de teste

Os testes existentes em src/test/fuelCalculator.test.ts demonstram o que é esperado:

- resultados normais
- números decimais
- valores pequenos e grandes
- rejeição de valores inválidos

Quando adicionar nova lógica, preferir criar testes unitários antes da correção.

## Objetivo da contribuição

Contribuições devem manter a app simples, confiável e funcional para cálculo rápido de custo de viagem em contexto de uso local do browser.
