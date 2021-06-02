# Alura Pic

<p>
    Projeto desenvolvido no curso "Formação Angular Alura": Projeto Alura PIC
</p>

<h3>
    Capturando token
</h3>

```
return this.http.post(`${API_URL}/user/login`, {
      userName,
      password
    }, {observe: 'response'})
    .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
    }))
  }
```
### Explicação do código 
<p>
    <ul>
        <li> No código acima é feita uma função para obtenção do token JWT. Ela inicia no momento que é realizada a requisoção do método
        POST, ao efetuar o login no sistema
         </li> 
         <li> 
            Após isso são passados 3 parâmetros na função POST ('url da api e rota',{dados a serem passados, parâmetros},'OPCIONAL: configuração da resposta da requisição')
         </li>
         <li>
            A opção passada na configuração resposta serve para tornar o parâmetro `x-access-token` acessível
         </li>
    </ul>
</p>
