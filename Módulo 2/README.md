
# Aplicação: CyanBooks

## Resumo
Esta aplicação, implementada com React Native, faz uma requisição GET quando o ícone de busca é clicado e o campo de pesquisa é preenchido com algum valor. Ao acessar os dados, eles são armazenados em um vetor. Quando uma nova pesquisa é realizada, a requisição anterior não é perdida; os resultados anteriores continuam listados e armazenados no vetor. Cada livro retornado contém quatro atributos: Autor, Título, URL e uma classificação em estrelas.

## Instalação

Considerando que o node já esteja instalado, basta que execute os seguintes comandos: 
```
npm install
```
O comando instala os pacotes do node que estão faltando.


Após abrir o projeto, abra o terminal na pasta dele e insira o seguinte comando:

```
npm start
```
O projeto será iniciado e a aplicação ficará disponível para que dispositivos na rede acessem, basta apenas que os mesmos tenham o app Expo Go em seus smartphones.

## Funcionalidades
- Pesquisar livros por palavra-chave.
- Exibir resultados da pesquisa em uma lista.
- Atribuir uma classificação de 1 a 4 a cada livro pesquisado.
- Visualizar a classificação de cada livro em forma de estrelas.

## Capturas de tela
<img src="https://github.com/fernandopassoss/react-native/blob/458a30768c5c7fd62101ad2355ff5e151fb231de/M%C3%B3dulo%202/img1.png">

<img src="https://github.com/fernandopassoss/react-native/blob/458a30768c5c7fd62101ad2355ff5e151fb231de/M%C3%B3dulo%202/img2.png">
