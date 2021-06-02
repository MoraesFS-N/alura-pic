# Alura Pic

<p>
    Projeto desenvolvido no curso "Formação Angular Alura"
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