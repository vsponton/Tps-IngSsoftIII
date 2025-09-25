
# Decisiones del TP01 — Git Básico (2025)

### Antes de empezar  (repo y remotos)
- `cd ~/OneDrive/Desktop`
- `git clone https://github.com/vsponton/TPs_2025.git`
- `cd TPs_2025`
- `git remote add upstream https://github.com/ingsoft3ucc/TPs_2025.git`
- `git remote -v`

**(Caso especial que me pasó)**  
Al sincronizar con el repo original apareció *“refusing to merge unrelated histories”*. Lo resolví así:
- `git checkout -b backup/pre-sync-TPs_2025`     # respaldo
- `git checkout main`
- `git fetch upstream`
- `git reset --hard upstream/main`
- `git push -u origin main --force`               # alinear mi fork con upstream

> Nota Windows/OneDrive: si `git clean -fdx` no borra carpetas por permisos, usé PowerShell:  
> `powershell -NoProfile -Command "Remove-Item -LiteralPath './carpeta' -Recurse -Force"`

---
# Pasos Realizados

---

## 1. Forkeamos el repo
![Fork](./imagenes/01-fork.png)

---

## 2. Clone al repo
![Clone](./imagenes/02-clone.png)

---

## 3. Realizamos la configuración inicial
![Configuración inicial](./imagenes/03-configuracion.png)

---

## 4. Creamos la rama secundaria y el primer commit atómico
![Feature branch 1](./imagenes/04-feature-commit1.png)

---

## 5. Segundo commit atómico
![Feature branch 2](./imagenes/05-feature-commit2.png)

---

## 6. Simulamos un error y creamos la rama hotfix para corregirlo
![Hotfix creación](./imagenes/06-hotfix-creacion.png)

---

## 7. Solucionamos el error en la rama hotfix
![Hotfix fix](./imagenes/07-hotfix-fix.png)

---

## 8. Integramos la rama hotfix y la feature a main
![Merge](./imagenes/08-merge.png)

---

## 9. Creación y push del tag
![Tag](./imagenes/09-tag.png)


## Comandos de chequeo
- `git log --oneline --graph --decorate -n 20`
- `git log --oneline origin/main..origin/feature/nueva-funcionalidad`
- `git tag -l -n1`
- `git show --no-patch --oneline v1.0`

