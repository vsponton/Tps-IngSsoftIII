# TP3 – Introducción a Azure DevOps

## 1. Creación del proyecto
Se creó el proyecto **TP3-AzureDevOps** en Azure DevOps.  
Para el *Work item process* se eligió **Agile**, ya que permite trabajar con **Features, User Stories, Tasks y Bugs**, lo cual se ajusta mejor a los objetivos del TP.

**Justificación:**  
- Más completo que Basic y más flexible que Scrum para un trabajo individual.  
- Permite trazabilidad desde funcionalidades grandes (Features) hasta tareas concretas (Tasks).  
- Es ampliamente utilizado en proyectos académicos y profesionales, lo que facilita la defensa oral.

---

## 2. Configuración del Sprint y Work Items
- Se configuró un **Sprint inicial de 2 semanas** (24/09/2025 – 08/10/2025).  
- Dentro de este Sprint se organizaron:  
  - **Feature principal:** Gestión de Usuarios.  
  - **User Stories (AB#):**  
    1. AB#4 – Registrar usuario  
    2. AB#5 – Login de usuario  
    3. AB#6 – Editar perfil  
  - **Tasks** (para cada US):  
    - Diseñar UI correspondiente.  
    - Verificación funcional (prueba básica de navegación y formulario).  
  - **Bugs de ejemplo (si aparecen):**  
    - Validación de email.  
    - Error en login con caracteres especiales.

**Justificación:**  
Esta estructura descompone funcionalidades grandes en entregables chicos y medibles. Además, asegura un objetivo claro por Sprint y habilita detectar errores temprano.

---

## 3. Control de versiones con Azure Repos – Intentos y decisiones
La idea fue trabajar **directamente en Azure Repos** y luego **espejar** (publicar) en GitHub para la entrega.

- Se creó la rama de trabajo `feature/initial-import` en Azure Repos.  
- Se cargó el sitio estático (HTML/CSS) y se preparó el PR hacia `main`.  
- Para la publicación en GitHub, en local se agregó un **segundo remoto** (`github`) apuntando a `vsponton/TP3-AzureDevOps` y se hizo `push`.

**Decisión:**  
Mantener Azure DevOps para **Boards + PRs** y usar GitHub como **evidencia pública** del TP (README y decisiones).

---

## 4. Control de versiones con Azure Repos – Solución aplicada
- Rama principal: **main**.  
- Rama de trabajo: **feature/initial-import**.  
- **Políticas en `main`:** PR obligatorio, **Work Items linkeados** y **1 aprobación mínima**.  
- **Pull Request:** desde `feature/initial-import` hacia `main`.  
- **Auto-complete** configurado con:  
  - **Merge strategy:** *Merge (no fast forward)*.  
  - **Complete associated work items**.  
  - **Delete branch `feature/initial-import` after merging*.  
- **Aprobación propia:** se habilitó (según permisos) **Allow requestors to approve their own changes** para no depender de un tercero.

---

## 5. Documentación en GitHub
Se creó el repositorio **vsponton/TP3-AzureDevOps**.  
Allí se cargaron:  
- `README.md` con resumen del TP, estructura y cómo reproducir.  
- `decisiones.md` (este documento) con decisiones y justificaciones.  
- Los archivos del sitio: `index.html`, `product.html`, `sales.html`, `estilo.css`.

> Estrategia de subida: primero el **código (HTML/CSS)** y luego la **documentación (README y decisiones)** en un segundo commit.

---

## 6. Problemas encontrados y soluciones
- **“Work items must be linked”** en el PR y no encontraba la sección de Work Items.  
  Se ubicó la caja en el panel derecho del PR y se **linkearon AB#4, AB#5, AB#6** (alternativa: desde *Boards → Work Item → Links → Add link → Pull request*).

- **“At least 1 reviewer must approve”** y necesitaba hacerlo sola.  
  Se habilitó (si el proyecto lo permite) **Allow requestors to approve their own changes** en **Branch policies**; con eso el PR quedó aprobado por la autora y en verde.

-  Duda sobre **a qué remoto** se estaba haciendo `push` (Azure DevOps vs GitHub).  
   Se verificó con `git remote -v` y se configuró un **segundo remoto** llamado `github` para subir a `vsponton/TP3-AzureDevOps`.

-  Mensaje **“nothing to commit, working tree clean”** al intentar subir docs.  
  Se confirmó que el código ya estaba commiteado; luego se agregaron **README.md** y **decisiones.md** en un **segundo commit** y se hizo `push`.

---

## 7. Conclusión
El TP permitió practicar **Azure Boards, Sprints, Work Items, Repos y Pull Requests** con políticas reales (link de WIs y aprobación), resolviendo obstáculos típicos (ubicación de Work Items, aprobación mínima, remotos Git).  
Se cumplió con los objetivos del trabajo y se dejó evidencia pública en GitHub, con un flujo de merge **no fast-forward**, cierre automático de WIs y borrado de rama de feature.
