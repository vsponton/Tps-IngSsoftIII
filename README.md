# Ingeniería del Software 3 - Práctico

Repositorio Git de Ingeniería de Software 3 - 2025

# Agenda

Durante este curso, exploraremos una variedad de herramientas y conceptos esenciales que son fundamentales para el desarrollo y la gestión de sistemas modernos

* **Git Básico:** Comenzaremos con una introducción a Git, la herramienta de control de versiones más utilizada. Aprenderemos los conceptos fundamentales y las operaciones básicas para gestionar y colaborar en proyectos de software de manera eficiente.

* **Docker**: Nos adentraremos en Docker, una plataforma que permite desarrollar, enviar y ejecutar aplicaciones en contenedores. Veremos cómo crear y gestionar contenedores, así como las mejores prácticas para su uso en entornos de desarrollo y producción.

* **Azure y Azure DevOps**: Exploraremos los servicios de Microsoft Azure y Azure DevOps, enfocándonos en cómo desplegar y gestionar aplicaciones en la nube. Aprenderemos a utilizar herramientas de integración continua y entrega continua para automatizar procesos de desarrollo y despliegue.

* **Introducción a Sistemas Distribuidos y Arquitectura de Microservicios**: Exploraremos cómo utilizar los servicios de Azure para implementar soluciones distribuidas y contenerizadas aprovechando sus capacidades para crear aplicaciones escalables y resilientes.

* **Pipelines de Build y Deploy**: Aprenderemos a configurar y gestionar pipelines de construcción y despliegue, los cuales son esenciales para mantener la calidad y la consistencia en el desarrollo de software. Veremos cómo automatizar estos procesos para mejorar la eficiencia y reducir errores humanos.

* **Pruebas Unitarias y Pruebas de Integración:** Finalizaremos con una exploración de las pruebas unitarias y de integración, dos tipos cruciales de pruebas en el desarrollo de software. Aprenderemos a escribir y ejecutar pruebas automatizadas para asegurar que nuestro código sea robusto y funcione según lo esperado.

Estos temas nos proporcionarán una base sólida en las prácticas modernas de desarrollo y operaciones en ingeniería de sistemas, preparándonos para enfrentar los desafíos del mundo real con confianza y habilidad. 

**¡Esperamos que disfruten y aprovechen al máximo este semestre!**

# Enfoque de la materia 
La importancia de esta cátedra radica en adquirir conceptos fundamentales sobre integración y entrega continua (CI/CD), automatización y despliegue, así como en ejemplificar cómo llevarlos a la práctica. El objetivo no es dominar en profundidad una herramienta específica, sino comprender el enfoque, los beneficios y las mejores prácticas, para luego poder aplicarlos en distintas plataformas y contextos reales.

Los detalles finos de configuración e implementación específicos de cada herramienta no forman parte del alcance central de la materia, y se espera que el estudiante pueda complementarlos con recursos externos, documentación oficial o soporte de las plataformas que elija.
Además, el uso de herramientas de inteligencia artificial **está no solo permitido, sino que se alienta activamente**. La IA puede facilitar la redacción de scripts, la configuración de pipelines, la comprensión de errores y la optimización de tareas repetitivas, siempre y cuando el estudiante comprenda lo que está implementando y pueda justificar sus decisiones técnicas.

Tanto en los trabajos prácticos como en el Trabajo Práctico Integrador de la materia, podrán utilizar cualquier herramienta de CI/CD y cualquier nube pública.
Durante el cursado, abordaremos los conceptos clave implementándolos específicamente en Azure DevOps y la nube de Microsoft Azure, aunque su uso no es obligatorio.
Para quienes deseen utilizar Azure, pueden crear una cuenta gratuita para estudiantes en el siguiente enlace:👉 https://azure.microsoft.com/es-es/free/students

En caso de no poder acceder a la cuenta gratuita para estudiantes, también pueden crear una cuenta estándar. En ese caso, se solicitará una tarjeta de crédito únicamente con fines de validación. Todos los trabajos prácticos se realizarán exclusivamente con servicios gratuitos disponibles en la plataforma Azure, por lo que no tendrán costos asociados.

⚠️ Importante: si optan por utilizar una cuenta estándar, será responsabilidad del alumno verificar que los servicios configurados estén dentro del plan gratuito para evitar cargos.

Asimismo, pueden utilizar cualquier otra herramienta de CI/CD y/o cualquier otra nube pública, pero no se brindarán instrucciones ni soporte para plataformas que no sean Azure DevOps y Azure.


# Condiciones para la Presentación de Trabajos Prácticos

A continuación, se detallan las condiciones para la presentación de los trabajos prácticos:

* **Formato de Entrega:**  La entrega del trabajo se realizará en un repositorio de Git generado por cada alumno, que debe incluir:
  - Todas las ramas, commits y tags solicitados
  - Un archivo decisiones.md con las justificaciones técnicas
  - El repositorio debe estar correctamente configurado y accesible

* **Tiempo de Entrega:** Habra dos revisiones semestrales cada 4 semanas. Los trabajos del 1 al 4 deben ser presentados en la semana 5 y los del 5 al 8 en la semana 9. En la presentación deberán realizar una una defensa oral de sus entregas. Los trabajos presentados con posterioridad a la fecha de revision no serán evaluados.
  
* **Criterios de Evaluación:** 

  - Organización técnica del repositorio (30%): Estructura de ramas, calidad de commits, uso correcto de Git
  - Claridad y justificación en decisiones.md (30%): Explicación de decisiones técnicas y flujo de trabajo
  - Defensa oral obligatoria (40%): Comprensión, argumentación y capacidad de explicar el trabajo realizado. Es obligatoria para aprobar. El alumno deberá demostrar comprensión profunda y defender todas la decisiones tomadas. Si no puede defender su trabajono se aprueba, independientemente de la calidad del repositorio.

* **Parciales:** No habrá parciales prácticos, el promedio final de notas de cada Trabajo Práctico se considerará como nota de Parcial.

# Condiciones para la regularidad

* Asistencia a un mínimo del 70% de las clases prácticas

* Promedio de Notas de Parcial mayor a 4 (60% del contenido)

* No se promociona, se debe presentar un TP Integrador al momento de rendir el final.

# Trabajo Práctico Integrador: Requisitos y Validación

* **Requisitos del Proyecto Integrador**:

  * **Aplicación Completa:** Utilicen una aplicación, ya sea desarrollada por ustedes o un proyecto existente en GitHub, que incluya:
    - Un servicio de frontend.
    - Un servicio de backend.
    - Interacción con base(s) de datos.
    - Repositorio en Git: La aplicación debe estar alojada en un repositorio público Git.

  * **Build y Deploy Automatizados:** Configuren la construcción y el deploy de la aplicación de manera automatizada utilizando herramientas vistas en clase, como Azure Devops Pipelines o GitHub Actions
    - Cada pull request aprobado a la rama master debe construir la aplicación automáticamente.
    - Deben ejecutar los tests de unidad, recolectar y mostrar los resultados.
    - Superados los test de unidad, el pipeline debe realizar el deploy automáticamente al entorno de QA ejecutando además pruebas de integración.
    - Debe existir una aprobación manual para aprobar el pase al entorno de Producción
    - Test Cases: Presenten los test cases escritos, incluyendo los tests de integración.
   
  * **Validación**

    Para validar su proyecto, se realizará lo siguiente:

   * El profesor pedirá un pequeño cambio en el código para validar que:
     - Se corren las pruebas unitarias, se deberá visualizar un informe/reporte
     - Se corre correctamente el proceso automatizado de Build
     - Se corre correctamente el proceso automatizado de Deploy
     - La versión en QA refleja dicha modificación.
     - Se corren las pruebas de integración, se deberá visualizar un informe/reporte
     - Se realiza la aprobación manual para el pase al entorno de PROD.

  * El profesor pedirá un pedirá un pequeño cambio en un test unitario para validar que:
    - El fallo de un test unitario aborta el proceso automatizado de Build y pasos subsiguientes.

Asegúrense de cumplir con todos los requisitos y procedimientos establecidos para asegurar una evaluación satisfactoria. Cualquier mejora o agregado se tendrá en cuenta para la nota final del proyecto.


# Tabla de contenidos


  * [Trabajo Práctico 1 - Git Básico](trabajos/01-git-basico.md)
  * [Trabajo Práctico 2 - Introducción a Docker](trabajos/02-introduccion-docker.md)
  * [Trabajo Práctico 3 - Introducción a Azure DevOps](trabajos/03-introduccion-azuredevops.md)
  * [Trabajo Práctico 4 - Azure DevOps Build Pipelines]
  * [Trabajo Práctico 5 - Azure DevOps Release Pipelines]
  * [Trabajo Práctico 6 - Pruebas Unitarias]
  * [Trabajo Práctico 7 - Code Coverage, Análisis Estático de Código y Pruebas de Integración]
  * [Trabajo Práctico 8 - Implementación de Contenedores en Azure y Automatización con Azure CLI]


