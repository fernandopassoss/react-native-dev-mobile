
# Aplicação de Contador

Esta é uma simples aplicação de contador desenvolvida em React Native. A aplicação exibe um botão e um texto que mostra quantas vezes o botão foi clicado. Quando o botão é clicado, o contador é incrementado em uma unidade.


## Instalação e Utilização

Considerando que o node já esteja instalado, basta que execute o seguinte comando: 
```
npm install -g expo-cli
```
O Expo é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo.

Após abrir o projeto e instalar o Expo, abra o terminal na pasta dele e insira o seguinte comando:

```
npm start
```
O projeto será iniciado e a aplicação ficará disponível para que dispositivos na rede acessarem, basta apenas que os mesmos tenham o app Expo Go em seus smartphones.

## O que o código faz ?
**Importações**: Importa as bibliotecas necessárias do React Native.

**Classe App**: Define a classe principal da aplicação.

**Estado Inicial**: Inicializa o estado com um contador (count) começando em 0.

**Renderização da Interface**: Define como a interface da aplicação é mostrada. 
1. Um componente View é usado como um contêiner principal.
2. Um texto exibe quantas vezes o botão foi clicado, baseado no estado count.
3. Um botão sensível ao toque (TouchableOpacity) é usado para incrementar o contador quando pressionado.


**Exportação do Componente**: Exporta o componente App para uso em outros lugares.

## Conclusão
Esta aplicação React Native é uma demonstração simples de como criar uma interface de usuário básica com um contador que aumenta a cada vez que um botão é pressionado. Embora seja um exemplo mínimo, ele ilustra conceitos fundamentais de desenvolvimento com React Native, como a definição de estados, renderização de componentes e manipulação de eventos

