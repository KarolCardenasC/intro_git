# Introduction to git

# Basics Commands

- git init
- <strong>git add .</strong> <i>or</i> <strong>git add nombre-archivo</strong> (adicionar los archivos al staging area)
- <strong>git commit -m " "</strong> (guardar los archivos que están en el stage area con un comentario)
- <strong>git push origin main</strong> (subir los cambios al repositorio github/gitlab)
- <strong>git status</strong> (verificar los archivos que están dentro y fuera del stage area)
- <strong>git branch</strong> (visualizar las ramas del proyecto)
- <strong>git log --oneline</strong> (ejecutar commits y ramas del proyecto)
- <strong>git branch nombre-rama</strong> (Crear una nueva rama)
- <strong>git checkout nombre-rama</strong> (Cambiar de rama)
- <strong>git merge nombre-rama</strong> (Unir commits de 2 ramas)
- <strong>git branch -d nombre-rama</strong> (elimiar Rama)
- <strong> git pull origin nombre-rama</strong> (traer actualización del git)

# Config

- start-ssh-agent (Habilitar agente ssh en windows)
- git config --local user.name "Tu nombre aquí"
- git config --local user.email "Tu@email.aqui”

### Tools

- Fig -> autoComplete (Linux o Mac)
- oh-my-zsh (Linux o Mac)