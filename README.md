# Validação de Cartão de Crédito

Este repositório contém uma função em JavaScript para validar números de cartões de crédito e identificar a bandeira (issuer) do cartão. A função utiliza o algoritmo de Luhn para verificar a validade do número do cartão e expressões regulares para determinar a bandeira.

## Como Executar.
1-Certifique-se de ter o Node.js instalado em sua máquina.
2-Clone este repositório.
3-Navegue até o diretório do projeto no terminal.
4-Execute o seguinte comando para rodar o arquivo index.js
#### Comando:
node src/index.js

## Função: `validateCreditCard`

### Descrição

A função `validateCreditCard` recebe um número de cartão de crédito como entrada, remove todos os caracteres não numéricos, verifica se o número tem até 16 dígitos, valida o número usando o algoritmo de Luhn e identifica a bandeira do cartão.

### Parâmetros

- `number` (string): O número do cartão de crédito a ser validado.

### Retorno

A função retorna um objeto com as seguintes propriedades:

- `isValid` (boolean): Indica se o número do cartão de crédito é válido.
- `bandeira` (string): A bandeira do cartão de crédito (Visa, MasterCard, American Express, Discover, etc.).
- `message` (string, opcional): Uma mensagem de erro, caso o número do cartão de crédito seja inválido.

### Exemplo de Uso

```javascript
const cardInfo = validateCreditCard('4111111111111111');
console.log(cardInfo); // { isValid: true, bandeira: 'Visa' }