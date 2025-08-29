# ToDo App - Front-end

Interface de usuário para gerenciar tarefas (ToDo) construída com Next.js, React e TypeScript.

## 🚀 Deploy

Você pode acessar a aplicação em produção no seguinte link:

**[https://todo-app-brown-eight-42.vercel.app](https://todo-app-brown-eight-42.vercel.app)**

---

## 🛠️ Tecnologias Utilizadas
* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**

---

## 💻 Como Rodar Localmente

### Pré-requisitos
* **Node.js** (versão 20.x ou superior)
* **npm** ou gerenciador de pacotes similar

### Passos

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/lucasbonadio/todo-app.git](https://github.com/lucasbonadio/todo-app.git)
    cd seu-repositorio/todo-app-frontend 
    ```
    *(Ajuste o caminho `todo-app-frontend` se necessário)*

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento**
    ```bash
    npm run dev
    ```

4.  **Acesse a aplicação**
    Abra seu navegador e acesse: `http://localhost:3000`

---

## 🔗 Conectando com a API

Para que o front-end funcione corretamente, a **API do back-end precisa estar em execução**.

A URL da API está configurada no arquivo:
`src/services/apiClient.ts`

Certifique-se de que a variável `API_BASE_URL` neste arquivo corresponde ao endereço onde sua API local está rodando (ex: `http://localhost:5123/api`).