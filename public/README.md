## Hello world

### Instalação do http-server
Necessário instalar o http-server, para instalar digite:
```js
npm install http-server -g
```
O http-server cria um servidor local para arquivos estáticos.


Para executar a aplicação, digite:
```js
http-server -c1
```

### Informações do projeto
Para inserir informações do projeto, digite:
```js
npm init
```

### Instalação do Bower
Para instalar o bower, digite:
```js
npm install bower -g
```

Para verificar a instalação do bower, digite:
```js
bower --version
```

Para inserir informações do projeto via bower, digite:
```js
bower init
```

### Configuração firebase-tools
Para instalar o firebase-tools, digite:
```js
npm install firebase-tools -g
```

### Deploy firebase
Para logar no firebase, digite:
```js
firebase login
```
Abrirá uma página de autenticação no navegador, permita e abra novamente o terminal.

Para iniciar o firebase-tools, digite:
```js
firebase init
```

Selecione a atividade a ser realizada. Nesse caso foi aplicado o **hosting**.

Configurações como: a pasta que será iniciada o deploy, o banco que essa aplicação utilizará, regras que serão aplicadas, diretório público, configuração de SPAs aparecerão.

Após realizar essas configurações, digite:
```js
firebase deploy
```