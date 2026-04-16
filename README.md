# UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS

![UPC Logo](https://upload.wikimedia.org/wikipedia/commons/f/fc/UPC_logo_transparente.png)

## "Informe de Trabajo Final"

**1ASI0657-2610-17949 - Fundamentos de Arquitectura de Software - Ciclo 7**

**Profesor:** Jorge Luis Delgado Vite  
**Sección:** 17949  
**Startup:** ParkTeam          
**Producto:** ParkLink       

-------------------------------

### Integrantes:

| Nombre                                | Código       |
|---------------------------------------|--------------|
|Javier Masaru Nikaido Vargas           |U20221G099    |
|Fabian Alejandro Oliva Lopez           |U202312013    |
|Pietro Osores Marchese                 |U202310971    |
|Percy Alonso Muñiz Huayanca            |U202319563    |
|Matias Rodolfo Salcedo Champi          |U202319698    |

**Abril 2026**

## Registro de Versiones del Informe

| Version | Fecha      | Autor                                          | Descripción de modificación                                                |
| ------- | ---------- | ---------------------------------------------- | -------------------------------------------------------------------------- |
| 1ra     | 15/04/2026 | Javier Masaru Nikaido Vargas,Fabian Alejandro Oliva Lopez,Pietro Osores Marchese,Percy Alonso Muñiz Huayanca,Matias Rodolfo Salcedo Champi | Avance1: En esta primera entrega se avanzo con el capitulo 1,2 y 3 de forma organizada para empezar con el pryecto de ParkLink estbleciedo la idea y un estudio del contaxto y las features. |                                                                                                                                                                                        |

## Student Outcome
| Criterio específico | Acciones realizadas | Conclusiones |
|---------------------|---------------------|--------------|
| **CO1:** Actualiza conceptos y conocimientos necesarios para su desarrollo profesional y en especial para su proyecto en soluciones de software. | **TB1 - Fabian Alejandro Oliva López:** Definí el ADN de la startup, estableciendo la visión, misión y valores como fundamento estratégico del proyecto. Supervisé el proceso Lean UX para garantizar la alineación con los objetivos del curso. Identifiqué y definí los segmentos objetivo, aplicando conocimientos de estrategia de producto. **TB1 - Javier Masaru Nikaido Vargas:** Realicé investigación de competidores mediante benchmarking para entender el mercado. Ejecuté entrevistas y needfinding para validar el problema con usuarios reales, aplicando técnicas de UX Research. **TB1 - Matias Rodolfo Salcedo Champi:** Diseñé el Solution Profile y nombre del producto, aplicando conceptos de product design. Creé User Personas y Empathy Maps para comprender las necesidades de los usuarios, integrando conocimientos de diseño centrado en el usuario. **TB1 - Percy Alonso Muñiz Huayanca:** Desarrollé Lean UX Assumptions e Hypothesis Statements, aplicando metodologías de diseño ágil. Construí User Task Matrix, As-is y To-Be Scenario Mapping para analizar procesos actuales y futuros, integrando conocimientos de análisis de procesos. **TB1 - Pietro Osores Marchese:** Elaboré el Lean UX Canvas para consolidar la propuesta de valor. Creé User Stories, Impact Map y Product Backlog para especificar requerimientos del proyecto, aplicando conocimientos de gestión de proyectos ágiles. | El equipo ha demostrado capacidad para integrar y aplicar conocimientos de arquitectura de software en un proyecto real de solución tecnológica. Cada integrante actualizó sus conocimientos en las áreas de UX, diseño de producto, análisis de procesos y gestión de requerimientos, aplicando metodologías ágiles y herramientas de elicitación de requisitos. |
| **CO2:** Reconoce la necesidad del aprendizaje permanente para el desempeño profesional y el desarrollo de proyectos en soluciones de software. | **TB1 - Fabian Alejandro Oliva López:** Al definir la visión y estrategia de la startup, reconocí la importancia de actualizar constantemente los conocimientos en estrategia de producto y liderazgo de proyectos. **TB1 - Javier Masaru Nikaido Vargas:** Al realizar entrevistas y needfinding, identifiqué la necesidad de mejorar continuamente las técnicas de investigación de usuarios y comunicación con stakeholders. **TB1 - Matias Rodolfo Salcedo Champi:** Al crear User Personas y Empathy Maps, comprendí la relevancia del aprendizaje continuo en metodologías de diseño centrado en el usuario. **TB1 - Percy Alonso Muñiz Huayanca:** Al desarrollar escenarios y mappings de procesos, reconocí la necesidad de actualizarse en herramientas de análisis y modelado de procesos de negocio. **TB1 - Pietro Osores Marchese:** Al crear el Product Backlog y User Stories, entendí la importancia del aprendizaje continuo en gestión de requerimientos y priorización de funcionalidades en entornos ágiles. | El equipo reconoce que el desarrollo de soluciones de software requiere aprendizaje continuo. La aplicación de metodologías como Lean UX, Needfinding, User Stories e Impact Mapping evidencia el compromiso de cada miembro por adquirir nuevas competencias y adaptarse a las tendencias tecnológicas del mercado de movilidad urbana. |

## Contenido 

- [Capítulo I: Introducción](#capítulo-i-introducción)
    - [1.1. Startup Profile](#11-startup-profile)
    - [1.1.1. Descripción de la Startup](#111-descripción-de-la-startup)
    - [1.1.2. Perfiles de integrantes del equipo](#112-perfiles-de-integrantes-del-equipo)
    - [1.2. Solution Profile](#12-solution-profile)
    - [1.2.1. Nombre del Producto](#121-nombre-del-producto)
    - [1.2.2. Antecedentes y problemática](#122-antecedentes-y-problemática)
    - [1.2.3. Lean UX Process](#123-lean-ux-process)
    - [1.2.3.1. Lean UX Problem Statements](#1221-lean-ux-problem-statements)
    - [1.2.3.2. Lean UX Assumptions](#1222-lean-ux-assumptions)
    - [1.2.3.3. Lean UX Hypothesis Statements](#1223-lean-ux-hypothesis-statements)
    - [1.2.3.4. Lean UX Canvas](#1224-lean-ux-canvas)
    - [1.3. Segmentos objetivo](#13-segmentos-objetivo)
- [Capítulo II: Requirements Elicitation \& Analysis](#capítulo-ii-requirements-elicitation--analysis)
    - [2.1. Competidores](#21-competidores)
    - [2.2. Entrevistas](#22-entrevistas)
    - [2.3. Needfinding](#23-needfinding)
    - [2.3.1. User Personas](#231-user-personas)
    - [2.3.2. User Task Matrix](#232-user-task-matrix)
    - [2.3.3. Empathy Mapping](#233-empathy-mapping)
    - [2.3.4. As-is Scenario Mapping](#234-as-is-scenario-mapping)
 - [Capítulo III: Requirements Specification](#capítulo-iii-requirements-specification)
   - [3.1. To-Be Scenario Mapping](#31-to-be-scenario-mapping)
   - [3.2. User Stories](#32-user-stories)
   - [3.3. Impact Mapping](#33-impact-mapping)
   - [3.4. Product Backlog](#34-product-backlog)
  
# Capítulo I: Introducción

## 1.1. Startup Profile

### 1.1.1. Descripción del Startup

En las ciudades modernas, uno de los principales problemas que enfrentan los conductores es la dificultad para encontrar estacionamiento disponible. Esta situación genera congestión vehicular, pérdida de tiempo, estrés y un impacto ambiental negativo debido al aumento de emisiones contaminantes producto de la circulación innecesaria de vehículos.

**Misión:**
Brindar una plataforma eficiente y confiable que permita a los conductores encontrar y reservar estacionamientos fácilmente, mientras se genera valor para los propietarios mediante la monetización de sus espacios.

**Visión:**
Ser la plataforma líder en reserva de estacionamientos en Latinoamérica, contribuyendo al desarrollo de ciudades más organizadas, sostenibles y tecnológicamente conectadas.

**Valores:**

Innovación tecnológica
Eficiencia operativa
Confianza y seguridad
Sostenibilidad urbana

#### 1.1.2. Perfiles de integrantes del equipo
| Nombre                          | Descripción                                                                                                                                                                                                                                                                                                                                 | Foto |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| Fabian Alejandro Oliva Lopez     | Me considero una persona activa en los proyectos, impulsando al equipo a realizar buenos trabajos. Mi objetivo es brindar apoyo y dar lo mejor de mí para fomentar un ambiente colaborativo y de respeto.                                                                                                                                 | <img width="250" alt="Image" src="https://github.com/user-attachments/assets/27855fbd-50e4-4f2f-a1a4-55f9f6f6e174" /> |
| Javier Masaru Nikaido Vargas     | Estudiante de Ingeniería de Software con enfoque en el desarrollo organizado y eficiente de soluciones. Me caracterizo por trabajar de manera estructurada, priorizando la planificación y el cumplimiento de plazos, manteniendo un ambiente de trabajo tranquilo y productivo.                                                      | <img width="250" alt="Image" src="https://github.com/user-attachments/assets/5c822b03-b836-4b76-aa38-f2920ab5ae96" /> |
| Pietro Osores Marchese           | Soy Pietro Osores Marchese, estudiante de Ingeniería de Sistemas con interés en el desarrollo de software y la innovación tecnológica. Mi perfil combina habilidades en programación frontend, diseño de interfaces y gestión de proyectos ágiles, con un enfoque en la creación de soluciones digitales funcionales y escalables. Me caracterizo por el trabajo en equipo, la adaptabilidad y la búsqueda constante de nuevas herramientas para optimizar procesos y experiencias de usuario. | <img width="250" alt="Image" src="https://github.com/user-attachments/assets/3299f6b1-3924-4222-af63-bf12555d01b0" /> |
| Matias Rodolfo Salcedo Champi    | Soy un estudiante de Ingeniería de Software con experiencia en el desarrollo de aplicaciones móviles y web. He participado en proyectos de investigación y desarrollo, y manejo tecnologías como Flutter, Dart, Node.js, Express.js, MongoDB, PostgreSQL, Git y GitHub.                                                             | <img width="250" alt="Image" src="https://github.com/user-attachments/assets/bd1cd1ed-4754-4abc-95f0-10e3bcea3027" /> |
| Percy Alonso Muñiz Huayanca      | Me considero una persona activa en los proyectos, impulsando al equipo a realizar buenos trabajos. Mi objetivo es brindar apoyo y dar lo mejor de mí para fomentar un ambiente colaborativo y de respeto.                                                                                                                                 |      |                                                                                                                                                                                                                                                                                                                               |
| Matias Rodolfo Salcedo Champi|                                                                                                                                                                                                                                                                                                                                             |
## 1.2. Solution Profile

### 1.2.1. Nombre del producto

El producto desarrollado lleva por nombre ParkLink, una plataforma digital orientada a la gestión y reserva de estacionamientos.

### 1.2.2 Antecedentes y problemática

En entornos urbanos, encontrar estacionamiento se ha convertido en una tarea compleja debido al crecimiento exponencial del parque automotor y la limitada disponibilidad de espacios. Esta situación obliga a los conductores a recorrer largas distancias en busca de un lugar donde estacionar, generando efectos adversos en múltiples dimensiones de la vida cotidiana.

El crecimiento sostenido de la circulación vehicular en las ciudades ha superado significativamente la capacidad de infraestructura disponible. Los espacios de estacionamiento públicos y privados no han aumentado en la misma proporción que el número de vehículos, creando un desequilibrio crónico entre la demanda y la oferta. Este problema se agrava especialmente en zonas comerciales, centros empresariales, instituciones educativas y áreas residenciales densamente pobladas.

Para analizar esta problemática de manera integral, se aplica la técnica de las **5W's + 2H's**:

#### 🟩 What (¿Qué sucede?)
Los conductores no cuentan con información en tiempo real sobre la disponibilidad de estacionamientos, lo que los obliga a buscar manualmente. La falta de visibilidad sobre dónde hay espacios disponibles genera una búsqueda constante e ineficiente, donde los conductores circulan repetidamente por las mismas calles esperando encontrar un lugar libre.

#### 🟩 Why (¿Por qué es un problema?)
- **Tráfico innecesario**: La búsqueda de estacionamiento genera viajes adicionales que congestionan las vías urbanas
- **Consumo de combustible**: Se desperdicia combustible buscando un espacio que podría evitarse con información previa
- **Estrés en los conductores**: La incertidumbre y el tiempo de búsqueda prolongado generan ansiedad y frustración
- **Eficiencia del tiempo**: El tiempo invertido en buscar estacionamiento representa una pérdida significativa de productividad
- **Contaminación ambiental**: Los vehículos en búsqueda constante de estacionamiento contribuyen a la emisión de gases contaminantes
- **Accidentes**: El stress y la distracción aumentan el riesgo de incidentes viales menores

#### 🟩 Who (¿A quiénes afecta?)
- **Conductores urbanos**: Todos aquellos que utilizan vehículo para movilizarse daily en zonas de alta demanda
- **Propietarios de estacionamientos no utilizados**: Personas o empresas con espacios disponibles que no tienen forma de monetizarlos eficientemente
- **Ciudades en general**: El tráfico causedo por la búsqueda de estacionamiento afecta la movilidad urbana整体
- **Comercios locales**: Los clientes potenciales pueden evitar zonas donde es difícil estacionar
- **Medio ambiente**: El increase de emisiones afecta la calidad del aire urbano

#### 🟩 When (¿Cuándo ocurre?)
- Principalmente en horas pico de la mañana y tarde, cuando las personas se desplazan hacia sus centros de trabajo o estudio
- En eventos especiales, días de pago, o fechas comerciales importantes
- Durante horarios de lunch en zonas empresariales y comerciales
- Los fines de semana en zonas de entretenimiento, centros comerciales y áreas recreativas

#### 🟩 Where (¿Dónde ocurre?)
- En zonas urbanas, comerciales y residenciales con alta densidad vehicular
- Centros financieros y distritos empresariales
- Alrededores de universidades, hospitales y centros comerciales
- Calles y avenidas principales con alta circulación
- Espacios de estacionamiento subutilizados en residencial areas

#### 🟩 How (¿Cómo sucede?)
- **Falta de plataformas digitales centralizadas**: No existe una herramienta unificada que conecte oferta y demanda
- **Información desactualizada o inexistente**: Los sistemas existentes no reflejan la disponibilidad real en tiempo real
- **Procesos manuales**: tanto para propietarios como para usuarios, todo se maneja de forma tradicional
- **Desconexión entre partes**: Los propietarios no tienen cómo dar a conocer sus espacios disponibles
- **Ausencia de sistemas de reservas**: No hay forma de garantizar un espacio con anticipación

#### 🟩 How Much (¿Cuánto cuesta o impacta?)
- **Económico**: Gasto adicional de combustible estimado en porcentajes significativos del presupuesto familiar
- **Ambiental**: Aumento de emisiones de CO2 por vehículos circulando sin necesidad
- **Social**: Estrés, pérdida de tiempo familiar y reducción de la calidad de vida
- **Productividad**: Horas de trabajo perdidas en búsqueda de estacionamiento
- **Económico para propietarios**: Ingresos no percibidos por espacios subutilizados

### 1.2.3 Lean UX Process

El proceso de Lean UX se enfoca en crear productos digitales eficientes mediante la experimentación rápida y la validación constante de hipótesis, priorizando la colaboración y el aprendizaje continuo. En el caso de ParkLink, plataforma de reserva de estacionamientos, el proceso Lean UX se desarrolló en las siguientes fases:

#### Comprender 
En esta fase, se realizó una investigación cualitativa centrada en el comportamiento de los conductores en zonas urbanas, enfocándonos en entender cómo buscan actualmente estacionamiento y cuáles son las principales dificultades que enfrentan. A través de observaciones y supuestos iniciales del equipo, identificamos que la mayoría de los conductores pierde tiempo recorriendo calles sin tener información clara sobre la disponibilidad de espacios.

#### Esbozar
Con los hallazgos obtenidos, comenzamos a diseñar prototipos de baja fidelidad para la plataforma ParkLink. Estos prototipos se enfocaron en funcionalidades clave que respondieran directamente a las necesidades de los usuarios:
- **Mapa interactivo**: Que muestra estacionamientos disponibles según la ubicación del conductor.
- **Sistema de reservas anticipadas**: Para asegurar un espacio antes de llegar al destino.
- **Visualización de precios y horarios**: Facilitando la toma de decisiones.
- **Registro y gestión de espacios**: Permitiendo a los propietarios publicar y administrar sus cocheras.

#### Probar
Se realizaron pruebas de usabilidad con usuarios potenciales, simulando escenarios reales de búsqueda de estacionamiento en zonas de alta demanda. Durante las pruebas, observamos cómo los usuarios interactuaban con el mapa y el sistema de reservas, evaluando la facilidad de uso y la comprensión de la plataforma.

#### Medir 
Una vez implementados los prototipos mejorados, se definieron métricas clave para evaluar el rendimiento de la plataforma. Se analizaron indicadores como el tiempo promedio que tarda un usuario en encontrar estacionamiento, la cantidad de reservas realizadas y la frecuencia de uso de la aplicación.

#### 1.2.3.1 Lean UX Problem Statements

##### Problem Statement 1
Muchos conductores en zonas urbanas pierden tiempo buscando estacionamiento debido a la falta de información en tiempo real sobre espacios disponibles. Esta situación genera congestión vehicular, mayor consumo de combustible, estrés en los usuarios y una experiencia de movilidad ineficiente.

**¿Cómo podríamos diseñar una solución digital que permita a los conductores encontrar y reservar estacionamientos en tiempo real, reduciendo el tráfico y mejorando su experiencia de movilidad?**

---

##### Problem Statement 2

Actualmente, muchos propietarios de estacionamientos o espacios disponibles no cuentan con una plataforma que les permita ofrecer sus cocheras de manera sencilla, segura y organizada. Esto provoca que dichos espacios permanezcan desaprovechados, generando una pérdida de oportunidades económicas.

**¿Cómo podríamos diseñar una plataforma que permita a los propietarios publicar y gestionar sus espacios de estacionamiento de forma fácil, segura y rentable?**

#### 1.2.3.2 Lean UX Assumptions

### 1.2.3.2.1 Business Assumptions
- Existe una alta demanda de soluciones digitales que optimicen la búsqueda de estacionamientos en zonas urbanas.
- Los conductores están dispuestos a pagar por conveniencia, ahorro de tiempo y seguridad al estacionar.
- Los propietarios de espacios buscan generar ingresos adicionales mediante la monetización de sus cocheras.

### 1.2.3.2.2 Business Outcomes
- Generar ingresos a través de comisiones por reservas realizadas en la plataforma.
- Incrementar la base de usuarios activos (conductores y propietarios).
- Posicionar la plataforma como una solución confiable en el mercado de movilidad urbana.

### 1.2.3.2.3 User Assumptions
- Los conductores actualmente buscan estacionamiento de forma manual, sin herramientas digitales especializadas.
- Prefieren soluciones rápidas, intuitivas y que les permitan planificar con anticipación.
- Los propietarios desean una forma sencilla de publicar y gestionar sus espacios sin procesos complejos.

### 1.2.3.2.4 User Outcomes
- Los conductores reducen significativamente el tiempo de búsqueda de estacionamiento.
- Disminuye el estrés asociado a la conducción en zonas congestionadas.
- Los propietarios logran generar ingresos adicionales mediante el uso eficiente de sus espacios.

### 1.2.3.3 Lean UX Hypothesis Statements

#### Hypothesis Statement 1

Creemos que lograremos reducir el tiempo de búsqueda de estacionamiento y mejorar la experiencia de movilidad urbana.

Sabremos que si los conductores
pueden visualizar y reservar estacionamientos disponibles en tiempo real,
cuando implementemos una plataforma digital que centralice la información de espacios y permita reservas anticipadas.

---

#### Hypothesis Statement 2

Creemos que lograremos un aumento en la generación de ingresos para los propietarios de estacionamientos.

Sabremos que si los propietarios
pueden publicar y gestionar fácilmente sus espacios dentro de la plataforma,
cuando veamos que utilizan activamente la aplicación para ofrecer sus cocheras y recibir reservas.

#### Hypothesis Statement 3

Creemos que lograremos una mejora en la toma de decisiones de los usuarios al momento de estacionar.

Sabremos que si los conductores
tienen acceso a información clara sobre precios, ubicación y disponibilidad,
cuando implementemos una interfaz que muestre datos en tiempo real de forma sencilla y confiable.

### 1.2.3.4	Lean UX Canvas

<img width="894" height="637" alt="image" src="https://github.com/user-attachments/assets/1eabde7c-953c-4b4d-9982-7376ff9348e1" />

### 1.3. Segmentos objetivo

**Segmento 1: Conductores**
- **Características:**
  - Personas que conducen en zonas urbanas
  - Edades entre 20 y 60 años
  - Uso frecuente de apps móviles
    
- **Necesidades:**
  - Encontrar estacionamiento rápido
  - Reducir tiempo de búsqueda
  - Reservar anticipadamente
  - Pago seguro

**Segmento 2: Propietarios de estacionamientos**
- **Características:**
  - Personas o empresas con espacios disponibles
  - Interés en generar ingresos
    
- **Necesidades:**
  - Publicar espacios fácilmente
  - Gestionar reservas
  - Definir precios
  - Recibir pagos seguros
  
