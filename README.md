## Guia: Criando CLIs com Node.js

### 1. Introdução

CLIs (Command Line Interfaces) são programas que permitem aos usuários interagir com o software através do terminal. Em
Node.js, é possível criar CLIs que aceitam parâmetros e executam comandos diretamente do terminal.

### 2. Criando um Script CLI

Para começar, vamos criar um arquivo `teste.js` que poderá ser executado via terminal.

### 3. Acessando Parâmetros do Terminal

Node.js fornece o array `process.argv` que contém todos os argumentos passados ao script no terminal.

```javascript
// teste.js
// Mostra todos os argumentos passados ao script
console.log(process.argv);
```

### 4. Executando o Script

Se você executar o script acima da seguinte forma:

```bash
node teste.js --var=10
```

A saída será um array contendo o caminho do Node.js, o caminho do script, e os argumentos:

```bash
[
  '/usr/local/bin/node',
  '/caminho/para/seu/script/teste.js',
  '--var=10'
]
```

### 5. Extraindo Parâmetros

Agora, vamos criar uma função para extrair os valores dos parâmetros passados.

```javascript
// teste.js

function getArgValue(argName) {
    const arg = process.argv.find(arg => arg.startsWith(`--${argName}=`));
    if (arg) {
        return arg.split('=')[1];
    }
    return null;
}

const valor = getArgValue('var');
console.log(`Valor da variável: ${valor}`);
```

### 6. Executando o Script com Parâmetros

Execute o script novamente:

```bash
node teste.js --var=10
```

Saída:

```bash
Valor da variável: 10
```

### 7. Suporte a Vários Parâmetros

Para suportar múltiplos parâmetros, você pode chamar `getArgValue` com diferentes nomes de parâmetros.

```javascript
// teste.js

const var1 = getArgValue('var1');
const var2 = getArgValue('var2');

console.log(`Valor da var1: ${var1}`);
console.log(`Valor da var2: ${var2}`);
```

E execute o script:

```bash
node teste.js --var1=10 --var2=20
```

Saída:

```bash
Valor da var1: 10
Valor da var2: 20
```

### 8. Lidando com Parâmetros sem Valor

Você pode criar parâmetros que funcionam como flags, sem a necessidade de valores atribuídos.

```javascript
// teste.js

function hasFlag(flagName) {
    return process.argv.includes(`--${flagName}`);
}

if (hasFlag('help')) {
    console.log('Este é um script de exemplo que aceita parâmetros.');
    console.log('--var1=<valor> Passa um valor para var1');
    console.log('--var2=<valor> Passa um valor para var2');
}
```

Execute com:

```bash
node teste.js --help
```

Saída:

```bash
Este é um script de exemplo que aceita parâmetros.
--var1=<valor> Passa um valor para var1
--var2=<valor> Passa um valor para var2
```

### 9. Tornando o Script Executável (Opcional)

Se você quer rodar o script sem precisar usar o `node` antes, pode fazer o seguinte:

1. Adicione `#!/usr/bin/env node` no início do arquivo `teste.js`:

    ```javascript
    #!/usr/bin/env node
    ```

2. Dê permissão de execução ao script:

    ```bash
    chmod +x teste.js
    ```

3. Agora você pode rodar o script diretamente:

    ```bash
    ./teste.js --var1=10
    ```

---

Esse guia fornece uma introdução básica para a criação de CLIs usando Node.js. Você pode expandir o script para
adicionar mais funcionalidades e usar bibliotecas como `yargs` ou `commander` para uma gestão de parâmetros mais
avançada, se necessário.