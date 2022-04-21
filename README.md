
# Song Lyrics

Site para pesquisa de letra músicas


## Funcionalidades

- Retorno de letra de musicas para consulta


## Stack utilizada

**Front-end:** HTML, CSS e Javascript

**Back-end:** API 


## Autores

- [@Matheus Ribeiro](https://github.com/eu)
- [@Gabriel Rodrigues](https://github.com/Gabrirodri) 


## Documentação da API

#### Retorna todos os itens do artista pesquisado

```http
  GET https://api.lyrics.ovh/suggest/artist
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `artist` | `string` | **Obrigatório**. Nome do artista,exemplo:Coldplay |

#### Retorna um item

```http
  GET https://api.lyrics.ovh/v1/artist/title
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `artist`      | `string` | **Obrigatório**. Nome do artista,exemplo:Coldplay |
| `title`      | `string` | **Obrigatório**. Titulo de uma musica,exemplo:Adventure of a Lifetime. |

**Referencia:** https://lyricsovh.docs.apiary.io/#




## Referência

 - [Aplicação com JavaScript puro](https://www.youtube.com/watch?v=sgiTuXGin2I&t=309s)
 - [Rob--W/cors-anywhere](https://github.com/Rob--W/cors-anywhere)
 - [Arquivos iniciais](https://github.com/Roger-Melo/lyrics-search)

