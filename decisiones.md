
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

### 1. Identidad + decisiones.md
- `git config --global user.name "vsponton"`
- `git config --global user.email "2146222@ucc.edu.ar"`
- `echo "Configuración: user.name = vsponton, user.email = 2146222@ucc.edu.ar" > decisiones.md`
- `git add decisiones.md`
- `git commit -m "Agrego archivo decisiones.md con configuración inicial"`
- `git push origin main`

---

### 2. Funcionalidad (2 commits atómicos)
- `git checkout -b feature/nueva-funcionalidad`
- `echo "Primeros cambios de la nueva funcionalidad" > funcionalidad.txt`
- `git add funcionalidad.txt`
- `git commit -m "Agrega archivo inicial de la nueva funcionalidad"`
- `echo "Segunda parte de la funcionalidad" >> funcionalidad.txt`
- `git add funcionalidad.txt`
- `git commit -m "Completo segunda parte de la funcionalidad"`
- `git push origin feature/nueva-funcionalidad`

---

### 3. — Hotfix (simulado)
**Simular error en `main`:**
- `git checkout main`
- `echo "ERROR: línea simulada para hotfix" >> decisiones.md`
- `git add decisiones.md`
- `git commit -m "simula error en producción para hotfix"`
- `git push origin main`

**3.1 Corregir el error en rama hotfix y subir:**
- `git checkout -b hotfix/error-simulacion`
- `sed -i '/ERROR: línea simulada para hotfix/d' decisiones.md`
- `git grep -n "ERROR: línea simulada para hotfix" || echo "línea eliminada"`
- `git add decisiones.md`
- `git commit -m "fix(hotfix): corrige error simulado en producción"`
- `git push -u origin hotfix/error-simulacion`

**3.2 Integrar fix en `main`:**
- `git checkout main`
- `git merge hotfix/error-simulacion`
- `git push origin main`

**3.3 Mantener sincronizada la feature:**
- `git checkout feature/nueva-funcionalidad`
- `git merge main`
- `git push origin feature/nueva-funcionalidad`

---

###  4. Pull Request y merge
En GitHub (mi fork):
- **base:** `main`  ←  **compare:** `feature/nueva-funcionalidad`
- Título: *“Integración de nueva funcionalidad”*
- Opción de integración: **Create a merge commit**
- Crear PR y **Merge pull request** → **Confirm merge**.

Actualizar local:
- `git checkout main`
- `git pull origin main`

---

### 5. Tag de versión estable
La versión estable es el commit de `main` que ya incluye **feature + hotfix** (`f13a5ee`).

- (si existía un tag previo) `git tag -d v1.0`
- (si existía en remoto) `git push origin :refs/tags/v1.0`
- `git tag -a v1.0 -m "v1.0: versión estable con feature + hotfix" f13a5ee`
- `git push origin v1.0`

**Verificación:**
- `git show --no-patch --oneline v1.0`  → debe mostrar `f13a5ee … nueva-funcionalidad`

---

## Mini bitácora (hashes reales)
- **feature**: `6fff6e7` (inicial), `46e1690` (segunda parte)  
- **hotfix**: `d322f4c` (fix) → merge FF a `main`  
- **merge main→feature**: `0b3c41d`  
- **commit estable en main**: `f13a5ee`  
- **tag**: `v1.0` → apunta a `f13a5ee`

---

## Comandos de chequeo
- `git log --oneline --graph --decorate -n 20`
- `git log --oneline origin/main..origin/feature/nueva-funcionalidad`
- `git tag -l -n1`
- `git show --no-patch --oneline v1.0`

