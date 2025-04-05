# Calculadora de IMC

Projeto simples em JavaScript para calcular o **IMC (Índice de Massa Corporal)** de um usuário com base nos dados inseridos (peso e altura).

## 🚀 Como funciona

1. O usuário informa o **peso** (em kg) e a **altura** (em metros).
2. Ao clicar no botão de calcular, o script:
   - Valida os dados.
   - Realiza o cálculo do IMC.
   - Exibe o resultado com uma mensagem e uma imagem correspondente à classificação.

## 🧠 Fórmula do IMC

```
IMC = peso / (altura * altura)
```

## 📊 Classificações implementadas

| IMC                | Classificação         | Imagem                   |
|--------------------|-----------------------|--------------------------|
| ≤ 18.5             | Abaixo do peso        | `img/abaixo.jpg`         |
| 18.5 < IMC ≤ 24.9  | Peso ideal            | `img/pessoanormal.jpg`   |

> ⚠️ Outros intervalos de IMC ainda **não estão implementados**.

## 📁 Estrutura esperada

```
/seu-projeto/
│
├── index.html
├── script.js
└── /img/
    ├── abaixo.jpg
    └── pessoanormal.jpg
```

## 🛠 Tecnologias usadas

- HTML
- CSS 
- JavaScript puro (sem libs)

## ✅ Melhorias futuras (sugestões)

- Cobrir mais faixas de IMC (sobrepeso, obesidade, etc).
- Validar altura/peso negativos.
- Estilizar o layout com CSS moderno.
- Adicionar responsividade.
