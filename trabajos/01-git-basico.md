# ⚠️ IMPORTANTE – Guía de Práctica Sugerida

Lo que vas a ver a continuación es una **guía paso a paso altamente sugerida** para que practiques el uso de Git.  
**Te recomendamos hacerla completa**, ya que te ayudará a adquirir los conocimientos necesarios.

---

## PERO: Esta guía **NO es el trabajo práctico** que tenés que entregar

El trabajo práctico será evaluado en base a:
- Tu capacidad para **organizar tu trabajo en Git con criterio técnico**.
- Tu capacidad para **explicar y justificar cada decisión que tomaste**.
- Una **defensa oral obligatoria** donde vas a tener que demostrar lo que sabés.

---

## ¿Dónde está el trabajo práctico?

El **TP real que debés entregar y defender** se encuentra al final de este archivo.  
No alcanza con copiar esta guía. **Si no podés defenderlo, no se aprueba.**

---

## Sobre esta guía

- Esta guía NO es exhaustiva.
- Git es una tecnología que requiere **investigación y práctica fuera de clase**.
- En 2 horas no vas a aprender Git completo. **Esto es solo el punto de partida.**

---

# Guía Paso a Paso – Git Básico (Práctica sugerida)

## 4- Desarrollo

### Introducción a Git

Git es un sistema de control de versiones distribuido ampliamente utilizado en el desarrollo de software y proyectos colaborativos. Fue creado por Linus Torvalds en 2005 y se basa en la eficiencia, flexibilidad y velocidad para rastrear cambios en archivos y coordinar el trabajo en equipo.

Es una herramienta poderosa y esencial para el desarrollo de software y proyectos colaborativos. Su enfoque distribuido y su conjunto de comandos permiten a los equipos trabajar de manera eficiente, mantener un historial claro de cambios y colaborar de forma efectiva en el desarrollo de software.

Opera en un entorno distribuido, lo que significa que cada usuario tiene una copia completa del repositorio en su sistema local. Esto permite que cada miembro del equipo trabaje de manera independiente y, al mismo tiempo, fusionar y sincronizar sus cambios con otros miembros.

### Estados de Git

- Working Directory
- Staging Area
- Repository
- Remote Repository (GitHub): Otro repo con sus tres estados internos

### Instalación

- Windows: https://git-for-windows.github.io/  
  Git Bash: `git version`

- Mac OS:  
  Terminal: `git version`

### Configuración de Editor

#### Windows: Notepad++

- Agregamos el path en las variables de entorno
- Ponemos un alias, por ejemplo npp:  
  Desde Git Bash: `npp ~/.bash_profile`  
  En el archivo escribimos:  
  `alias npp='notepad++.exe -multiInst -nosession'`  
  Guardamos, reiniciamos git bash y ahora cuando escribamos `npp` se abrirá Notepad++

- Configurar como editor predeterminado de git:  
  `git config --global core.editor "notepad++.exe -multiInst -nosession"`

#### Mac: TextMate https://macromates.com/

- En las Preferencias de TextMate le damos Install  
- Terminal: `mate` abre el editor  
- Configurar como editor predeterminado:  
  ```bash
  git config --global core.editor "mate -w"
  git config --global -e
  ```

### Principales conceptos de Git

- **Repositorio**: Almacén de archivos e historial
- **Commit**: Conjunto de cambios
- **Rama (Branch)**: Línea de desarrollo independiente
- **Fusión (Merge)**: Combinación de ramas
- **Clonación (Clone)**: Copia exacta de un repositorio remoto

### Comandos básicos de Git

```bash
git init               # Inicializa un repositorio
git clone [URL]        # Clona remoto
git add [archivo]      # Prepara archivo
git commit -m "msg"    # Commit
git status             # Estado
git log                # Historial
git push               # Envía al remoto
git pull               # Trae cambios remotos
git branch             # Muestra ramas
git merge [rama]       # Fusiona rama
```

---

## Creación de Repos 1: Crearlo en GitHub, clonarlo localmente y subir cambios

1. Crear una cuenta en https://github.com
2. Crear un nuevo repositorio en dicha página con el Readme.md por defecto

3. Clonar el repo remoto en un nuevo directorio local
   ```bash
   git clone URL
   git status
   ```

4. Editar archivo Readme.md, agregar algunas líneas con texto a dicho archivo.
   ```bash
   git status
   ```

5. Editar (crearlo si no existe) el archivo .gitignore
   - Agregar *.bak

6. Crear un commit y proveer un mensaje descriptivo.
   ```bash
   git add .
   git commit –m "Texto"
   git status
   ```

7. Hacer un push al repositorio remoto.
   ```bash
   git push origin main
   ```

## Creación de Repos 2: Crearlo localmente y subirlo a GitHub

1. Crear un repo local en un nuevo directorio
   ```bash
   mkdir demo2tp01
   cd demo2tp01
   git init
   ```

2. Agregar archivo Readme.md, agregar algunas líneas con texto a dicho archivo.

3. Crear archivo .gitignore

4. Crear un commit y proveer un mensaje descriptivo.
   ```bash
   git add .
   git commit -m "Texto"
   ```

5. Crear repo en GitHub y asociar
   ```bash
   git remote add origin <URL>
   git branch -M main
   git push -u origin main
   ```

## Ramas

Una rama en Git es una línea independiente de desarrollo que permite a los desarrolladores crear, editar y probar cambios sin afectar directamente la rama principal o "master". Cada rama representa una versión del repositorio con su propio conjunto de cambios.

- Ver ramas:
  ```bash
  git branch –a
  ```

- Crear rama:
  ```bash
  git branch newFeature
  ```

- Cambiarnos a la nueva rama
  ```bash
  git checkout newFeature
  ```

- Hacemos un cambio en un archivo, comiteamos y vemos la diferencia
  ```bash
  git add .
  git commit –m "Cambio en el Branch"
  git diff main newFeature
  ```

## Merges

### Fast-Forward Merge (FF)

Este tipo de fusión ocurre cuando no ha habido cambios en la rama principal (master) desde que se creó la rama secundaria (feature). 

En este caso, Git simplemente mueve el puntero de la rama principal hacia adelante para incluir los commits de la rama secundaria.

- Hacemos el merge:
  ```bash
  git checkout main
  git merge newFeature
  ```

- Pusheamos 
  ```bash
  git push origin main
  ```

- Borramos la rama y vemos el log
  ```bash
  git branch –d newFeature
  git log --oneline
  ```

### No Fast-Forward Merge (No-FF)

Este tipo de fusión ocurre cuando se han realizado commits tanto en la rama principal como en la rama secundaria desde que se bifurcaron. Git crea un nuevo commit de fusión que combina los cambios de ambas ramas.

1. Creamos nueva rama
2. Hacemos un cambio en archivo en rama main, hacemos commit
3. Modificamos un archivo y hacemos commit
4. Vemos la diferencia entre ramas
5. Hacemos el merge:
   ```bash
   git checkout main
   git merge newFeature2 --no-ff –m "merge con no ff"
   ```

6. Borramos la rama y vemos el log
   ```bash
   git branch –d newFeature2
   git log –oneline –graph --decorate
   ```

### AutoMerge

Git puede auto-fusionar cambios sin conflictos.

## Resolución de Conflictos

En casos en los que no hay conflictos entre los cambios en las ramas, Git realiza un "auto-merge". Esto significa que Git es capaz de combinar automáticamente los cambios sin intervención del usuario.

Supongamos que dos usuarios trabajan en la misma rama "feature" y realizan cambios diferentes en archivos no conflictivos.

Después de que ambos usuarios envían sus cambios y uno de ellos realiza un merge con `git merge feature`, Git realizará un auto-merge sin problemas.

1. Creamos una nueva rama conflictBranch
2. Realizamos una modificación en la linea 1 del Readme.md desde main y commiteamos
3. En la conflictBranch modificamos la misma línea del Readme.md y commiteamos
4. Vemos las diferencias con `git difftool main conflictBranch`
5. Me cambio a main e intento un `git merge conflictBranch`
6. Me indicará que no pudo hacer el automerge
7. Veo como quedo el Readme.md 
8. Veo que estoy en un estado MERGING dentro de main
9. Resuelvo el conflicto con `git mergetool`
10. Agrego .orig al .gitignore
11. Hago commit
12. Hago push

## Pull Request

En el contexto del desarrollo de software y los sistemas de control de versiones distribuidos, un Pull Request (PR) o solicitud de extracción es una funcionalidad clave que permite a los desarrolladores colaborar y revisar los cambios antes de fusionarlos en la rama principal del repositorio. Es una característica fundamental en plataformas como GitHub y GitLab.

El Pull Request se utiliza principalmente cuando un desarrollador ha trabajado en una rama secundaria (por ejemplo, una rama de funcionalidad) y desea incorporar esos cambios en la rama principal del proyecto (generalmente llamada "master" o "main"). En lugar de realizar una fusión directa, el desarrollador crea un Pull Request para notificar a otros miembros del equipo sobre los cambios y solicitar su revisión antes de la fusión.

1. Creo una rama local, creo un nuevo archivo y la subo al repo remoto:
   ```bash
   git branch pullReqBranch
   git push origin pullReqBranch
   ```

2. Desde github hago un PullRequest

3. Ver opciones de seguridad de la rama

### Beneficios de PRs:

Los PRs ofrecen una serie de beneficios que mejoran la calidad del código, la colaboración del equipo y la gestión del proyecto:

1. **Facilita la revisión del código**: Proporcionan una forma estructurada para que los miembros del equipo revisen y discutan los cambios propuestos antes de que se fusionen en la rama principal. Esto ayuda a identificar errores, mejorar el diseño y asegurar que el código cumpla con los estándares de calidad del proyecto.

2. **Fomenta la colaboración**: Al utilizar PRs, los miembros del equipo pueden compartir sus conocimientos y experiencia, ofrecer sugerencias y trabajar juntos para mejorar el código

3. **Mejora la transparencia**: Proporcionan un registro claro y completo de los cambios propuestos, las discusiones y las revisiones realizadas por el equipo.

4. **Permite pruebas y validaciones**: Antes de que los cambios se fusionen en la rama principal, los PRs pueden someterse a pruebas automatizadas, integración continua y validaciones por parte de otros miembros del equipo.

5. **Evita conflictos y errores en la rama principal**: Al utilizar PRs, se minimiza el riesgo de conflictos y errores en la rama principal del repositorio. Los cambios se revisan cuidadosamente antes de la fusión, lo que reduce la probabilidad de introducir problemas en el código base.

6. **Flexibilidad y control**: Los PRs ofrecen flexibilidad al desarrollador, ya que permiten continuar trabajando en la rama de funcionalidad sin necesidad de fusionarla de inmediato. El desarrollador puede recibir comentarios y realizar mejoras antes de completar la fusión.

Es una práctica altamente beneficiosa en el desarrollo de software colaborativo, ya que mejora la calidad del código, fomenta la colaboración y brinda un mayor control sobre los cambios que se incorporan en el proyecto.

---

# Trabajo Práctico 01 – Git Básico (2025)

## 🎯 Objetivo

Aplicar y demostrar el uso práctico de Git mediante un caso simulado de trabajo en equipo.  
Este trabajo se aprueba **solo si podés explicar qué hiciste, por qué lo hiciste y cómo lo resolviste**.

---

## 🧩 Escenario

Recibiste tres tareas clave como parte de un equipo de desarrollo:
1. Agregar una nueva funcionalidad.
2. Corregir un error en producción.
3. Preparar una versión estable del sistema.

Debés organizarte con Git para realizar estas tareas de forma **ordenada, trazable y profesional**.

---

## 📋 Tareas que debés cumplir

### 1. Configurar tu entorno y preparar tu repositorio
- Cloná o forkeá el repositorio base https://github.com/ingsoft3ucc/2025_TP01_RepoBase
- Configurá tu identidad y dejá constancia en el archivo `decisiones.md` de cómo lo hiciste.

### 2. Desarrollar una funcionalidad
- Trabajá en una rama separada de `main`.
- Hacé al menos **2 commits atómicos** con mensajes claros.
- Justificá la estrategia que usaste (¿por qué esa rama? ¿por qué esos commits?).

### 3. Corregir un error (simulado) y aplicar el fix
- Simulá un error en `main` y resolvelo en una rama `hotfix`.
- Aplicá el fix a `main` y también a tu rama de desarrollo.
- **Elegí cómo lo integrás** (`merge`, `cherry-pick`, etc.) y **explicalo en `decisiones.md`**.

### 4. Crear una versión etiquetada
- Marcá una versión estable con el tag `v1.0`.
- Explicá en `decisiones.md` qué convenciones usaste y por qué.

---

## 📄 Entregables

1. **Repositorio en GitHub** con todas las ramas, commits y el tag.
2. Archivo `decisiones.md` explicando:
   - Qué flujo de trabajo usaste y por qué.
   - Cómo integraste el fix.
   - Qué problemas tuviste y cómo los resolviste.
   - Cómo asegurarías calidad y trazabilidad en un equipo real.

---

## 🗣️ Defensa Oral Obligatoria

Vas a tener que mostrar tu trabajo y responder preguntas como:
- ¿Qué hace `git rebase`? ¿Lo usaste o no? ¿Por qué?
- ¿Cómo revertís un commit ya push?
- ¿Qué significa que Git es distribuido?
- Mostrame tu log y explicame qué hiciste en cada parte.

---

## ✅ Evaluación

| Criterio                                   | Peso |
|-------------------------------------------|------|
| Organización técnica del repositorio      | 30%  |
| Claridad y justificación en `decisiones.md` | 30%  |
| Defensa oral: comprensión y argumentación | 40%  |

---

## ⚠️ Uso de IA

Podés usar IA (ChatGPT, Copilot), pero **deberás declarar qué parte fue generada con IA** y justificar cómo la verificaste.  
Si no podés defenderlo, **no se aprueba**.

---

## 💥 Desafíos opcionales (para destacar)

- Mostrá un ejemplo de `git revert` sobre un commit innecesario.
- Resolvé un conflicto entre ramas.
- Usá `git stash` en una situación simulada y explicalo.
