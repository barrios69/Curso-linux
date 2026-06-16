// ========================================================
// 🐧 LinuxMaster — Curso Práctico de Linux
// ========================================================

// ===== MODULE DATA =====
const MODULES = [
  {
    id: 1,
    title: "Fundamentos y Preparación del Entorno",
    shortTitle: "Fundamentos",
    icon: "🏗️",
    objective: "Comprender la filosofía de Linux y preparar un sistema para practicar.",
    duration: "45 min",
    exerciseCount: 3,
    theory: [
      `Linux nació en <strong>1991</strong> como un proyecto personal de <strong>Linus Torvalds</strong>, un estudiante finlandés que quería crear un sistema operativo libre y abierto. Hoy, Linux es el sistema operativo más utilizado en servidores, supercomputadoras y dispositivos embebidos del mundo.`,
      `Se basa en las <strong>"cuatro libertades" del software libre</strong>: libertad de usar, estudiar, distribuir y mejorar el software. Esta filosofía de colaboración ha permitido que miles de desarrolladores contribuyan a su código, creando un ecosistema robusto y seguro.`,
      `Existen múltiples <strong>distribuciones (distros)</strong> según la necesidad: <strong>Ubuntu</strong> para principiantes, <strong>Debian</strong> para estabilidad, <strong>Fedora</strong> para estar a la vanguardia, <strong>RHEL/CentOS</strong> para entornos empresariales, <strong>Arch Linux</strong> para usuarios avanzados que quieren control total, y <strong>Kali Linux</strong> para seguridad informática.`,
      `El <strong>kernel</strong> es el corazón de Linux: gestiona el hardware, la memoria, los procesos y la comunicación entre programas. Las distribuciones empaquetan este kernel junto con herramientas, gestores de paquetes y entornos de escritorio para crear sistemas completos.`
    ],
    tips: [
      { type: "tip", title: "💡 Consejo para principiantes", text: "Si es tu primera vez con Linux, usa <strong>Ubuntu Desktop</strong> en una máquina virtual. Es la forma más segura de aprender sin riesgo de dañar tu sistema actual." },
      { type: "note", title: "📝 Nota importante", text: "Para seguir este curso no necesitas borrar tu sistema operativo actual. Puedes usar <strong>VirtualBox</strong> (gratuito), <strong>WSL2</strong> en Windows, o un servidor en la nube como <strong>AWS Free Tier</strong>." }
    ],
    commands: [
      { cmd: "cat", desc: "Muestra el contenido de un archivo en la terminal" },
      { cmd: "uname", desc: "Muestra información del sistema y kernel" },
      { cmd: "lsb_release", desc: "Muestra información de la distribución" },
      { cmd: "whoami", desc: "Muestra el nombre del usuario actual" },
      { cmd: "hostname", desc: "Muestra el nombre del equipo" }
    ],
    codeExamples: [
      {
        label: "Información del sistema",
        code: `<span class="comment"># Ver información de la distribución</span>
<span class="command-prompt">$ </span>cat /etc/os-release
<span class="output">NAME="Ubuntu"
VERSION="24.04 LTS (Noble Numbat)"
ID=ubuntu
ID_LIKE=debian</span>

<span class="comment"># Ver información del kernel</span>
<span class="command-prompt">$ </span>uname -a
<span class="output">Linux mi-pc 6.8.0-generic #1 SMP x86_64 GNU/Linux</span>

<span class="comment"># Ver el usuario actual</span>
<span class="command-prompt">$ </span>whoami
<span class="output">estudiante</span>

<span class="comment"># Ver cuánto tiempo lleva encendido el sistema</span>
<span class="command-prompt">$ </span>uptime
<span class="output"> 14:32:01 up 3 days, 2:15, 1 user, load average: 0.52, 0.48, 0.45</span>`
      }
    ],
    practices: [
      {
        title: "Instalar Ubuntu en VirtualBox",
        difficulty: "easy",
        description: "Descarga e instala <strong>VirtualBox</strong> desde virtualbox.org. Luego descarga la ISO de <strong>Ubuntu Desktop</strong> y crea una máquina virtual con al menos 2GB de RAM y 20GB de disco.",
        hint: "Asigna al menos 2 núcleos de CPU y habilita la virtualización (VT-x/AMD-V) en la BIOS de tu equipo si la máquina virtual es muy lenta."
      },
      {
        title: "Identificar tu sistema",
        difficulty: "easy",
        description: "Una vez dentro de tu sistema Linux, abre una terminal y ejecuta los comandos para identificar: la versión del sistema operativo, la versión del kernel, tu nombre de usuario y el nombre de tu equipo.",
        hint: "Usa: cat /etc/os-release, uname -a, whoami y hostname"
      },
      {
        title: "Explorar el sistema",
        difficulty: "medium",
        description: "Investiga cuánto espacio en disco tienes disponible con <code>df -h</code>, cuánta memoria RAM con <code>free -h</code>, y qué CPU tiene tu sistema con <code>lscpu</code>. Anota los resultados.",
        hint: "El flag -h significa 'human readable' y muestra los tamaños en KB, MB, GB en lugar de bytes."
      }
    ],
    quiz: [
      {
        question: "¿En qué año creó Linus Torvalds la primera versión de Linux?",
        options: ["1985", "1991", "1995", "2001"],
        correct: 1,
        explanation: "Linus Torvalds publicó la primera versión del kernel de Linux en 1991 cuando era estudiante de la Universidad de Helsinki."
      },
      {
        question: "¿Qué distribución es más recomendada para principiantes?",
        options: ["Arch Linux", "Gentoo", "Ubuntu", "Slackware"],
        correct: 2,
        explanation: "Ubuntu es la distribución más popular para principiantes por su facilidad de instalación, amplia documentación y gran comunidad de soporte."
      },
      {
        question: "¿Qué componente de Linux gestiona directamente el hardware?",
        options: ["El shell (Bash)", "El kernel", "El gestor de paquetes", "El entorno de escritorio"],
        correct: 1,
        explanation: "El kernel es el núcleo del sistema operativo que gestiona el hardware, la memoria, los procesos y la comunicación entre los programas."
      }
    ],
    terminalExercises: [
      { prompt: "Muestra la información del sistema operativo", expected: "cat /etc/os-release", output: 'NAME="Ubuntu"\nVERSION="24.04 LTS (Noble Numbat)"\nID=ubuntu\nID_LIKE=debian\nPRETTY_NAME="Ubuntu 24.04 LTS"' },
      { prompt: "Muestra la versión del kernel", expected: "uname -a", output: "Linux curso-linux 6.8.0-generic #1 SMP x86_64 GNU/Linux" },
      { prompt: "Muestra tu nombre de usuario", expected: "whoami", output: "estudiante" }
    ]
  },
  {
    id: 2,
    title: "La Terminal y el Sistema de Archivos",
    shortTitle: "Terminal y Archivos",
    icon: "📁",
    objective: "Aprender a navegar y gestionar archivos sin interfaz gráfica.",
    duration: "60 min",
    exerciseCount: 4,
    theory: [
      `La <strong>línea de comandos (CLI)</strong> es la herramienta más poderosa de Linux. Aunque pueda parecer intimidante al principio, es mucho más eficiente que la interfaz gráfica (GUI) para tareas de administración, automatización y manejo de servidores remotos.`,
      `El sistema de archivos de Linux se organiza como un <strong>árbol invertido</strong> que comienza en la raíz <code>/</code>. A diferencia de Windows, no existen letras de unidad (C:, D:). Todo es un archivo o un directorio dentro de esta jerarquía.`,
      `Carpetas clave del sistema: <strong>/etc</strong> (configuraciones), <strong>/bin</strong> y <strong>/usr/bin</strong> (ejecutables), <strong>/home</strong> (carpetas personales de usuarios), <strong>/var</strong> (datos variables y logs), <strong>/tmp</strong> (archivos temporales), <strong>/root</strong> (carpeta del superusuario).`,
      `Los <strong>enlaces simbólicos</strong> (soft links) son como accesos directos: apuntan a la ruta de otro archivo. Los <strong>enlaces duros</strong> (hard links) son referencias directas al contenido del archivo en disco. Si borras el archivo original, el enlace simbólico se rompe, pero el enlace duro sigue funcionando porque apunta al mismo bloque de datos.`
    ],
    tips: [
      { type: "tip", title: "💡 Atajos esenciales", text: "Usa <strong>Tab</strong> para autocompletar nombres de archivos y comandos. Usa <strong>↑/↓</strong> para navegar el historial de comandos. Usa <strong>Ctrl+C</strong> para cancelar un comando en ejecución." },
      { type: "warning", title: "⚠️ Cuidado con rm", text: "El comando <code>rm</code> borra archivos permanentemente — <strong>no hay papelera de reciclaje</strong> en la terminal. Usa <code>rm -i</code> para que te pida confirmación antes de borrar, especialmente cuando uses <code>rm -r</code> (borrado recursivo)." }
    ],
    commands: [
      { cmd: "ls", desc: "Lista los archivos y carpetas del directorio actual" },
      { cmd: "ls -la", desc: "Lista con detalles incluyendo archivos ocultos" },
      { cmd: "cd", desc: "Cambia de directorio (cd .. = subir un nivel)" },
      { cmd: "pwd", desc: "Muestra la ruta completa del directorio actual" },
      { cmd: "mkdir", desc: "Crea un directorio nuevo" },
      { cmd: "mkdir -p", desc: "Crea directorios anidados (crea los padres si no existen)" },
      { cmd: "touch", desc: "Crea un archivo vacío o actualiza su fecha" },
      { cmd: "cp", desc: "Copia archivos o directorios (usa -r para directorios)" },
      { cmd: "mv", desc: "Mueve o renombra archivos y directorios" },
      { cmd: "rm", desc: "Elimina archivos (usa -r para directorios)" },
      { cmd: "ln -s", desc: "Crea un enlace simbólico (acceso directo)" },
      { cmd: "ln", desc: "Crea un enlace duro" },
      { cmd: "tree", desc: "Muestra la estructura de directorios en forma de árbol" },
      { cmd: "cat", desc: "Muestra el contenido completo de un archivo" },
      { cmd: "less", desc: "Muestra contenido de un archivo paginado" }
    ],
    codeExamples: [
      {
        label: "Navegación y creación",
        code: `<span class="comment"># Crear estructura de carpetas para un proyecto</span>
<span class="command-prompt">$ </span>mkdir -p Curso/Modulo2/ejercicios
<span class="command-prompt">$ </span>mkdir -p Curso/Modulo2/notas

<span class="comment"># Navegar al directorio</span>
<span class="command-prompt">$ </span>cd Curso/Modulo2
<span class="command-prompt">$ </span>pwd
<span class="output">/home/estudiante/Curso/Modulo2</span>

<span class="comment"># Crear archivos</span>
<span class="command-prompt">$ </span>touch notas/apuntes.txt
<span class="command-prompt">$ </span>touch ejercicios/practica1.sh

<span class="comment"># Ver la estructura creada</span>
<span class="command-prompt">$ </span>tree
<span class="output">.
├── ejercicios
│   └── practica1.sh
└── notas
    └── apuntes.txt</span>

<span class="comment"># Crear enlaces</span>
<span class="command-prompt">$ </span>ln -s notas/apuntes.txt enlace_simbolico.txt
<span class="command-prompt">$ </span>ln notas/apuntes.txt enlace_duro.txt

<span class="comment"># Ver detalles (nota la "l" en el enlace simbólico)</span>
<span class="command-prompt">$ </span>ls -la
<span class="output">lrwxrwxrwx 1 user user   18 jun 14 enlace_simbolico.txt -> notas/apuntes.txt
-rw-r--r-- 2 user user    0 jun 14 enlace_duro.txt</span>`
      }
    ],
    practices: [
      {
        title: "Crea la estructura de un proyecto",
        difficulty: "easy",
        description: "Crea la siguiente estructura de carpetas: <code>Curso/Modulo2/ejercicios</code>, <code>Curso/Modulo2/notas</code> y <code>Curso/Modulo2/recursos</code>. Hazlo con un solo comando usando la opción <code>-p</code> de <code>mkdir</code>.",
        hint: "Puedes crear múltiples directorios a la vez: mkdir -p Curso/Modulo2/{ejercicios,notas,recursos}"
      },
      {
        title: "Crear y verificar archivos",
        difficulty: "easy",
        description: "Dentro de <code>Curso/Modulo2/notas</code>, crea un archivo llamado <code>apuntes.txt</code> y verifica tu ubicación exacta con <code>pwd</code>. Luego lista el contenido del directorio con <code>ls -la</code>.",
        hint: "Usa touch para crear el archivo y pwd para ver tu ruta actual."
      },
      {
        title: "Experimentar con enlaces",
        difficulty: "medium",
        description: "Crea un archivo con contenido usando <code>echo 'Hola Linux' > archivo.txt</code>. Luego crea un enlace simbólico y uno duro. Borra el archivo original y observa cuál enlace sigue funcionando con <code>cat</code>.",
        hint: "El enlace duro seguirá mostrando el contenido porque apunta directamente a los datos en disco. El enlace simbólico mostrará un error porque apunta a la ruta del archivo eliminado."
      },
      {
        title: "Copiar y mover archivos",
        difficulty: "medium",
        description: "Crea 3 archivos de texto en un directorio. Copia uno de ellos a otro directorio con <code>cp</code>. Mueve otro con <code>mv</code>. Renombra el tercero usando <code>mv</code>. Verifica todo con <code>ls</code> y <code>tree</code>.",
        hint: "Recuerda: cp copia, mv mueve O renombra. Para copiar directorios completos usa cp -r."
      }
    ],
    quiz: [
      {
        question: "¿Qué comando muestra la ruta completa del directorio actual?",
        options: ["cd", "ls", "pwd", "dir"],
        correct: 2,
        explanation: "pwd (print working directory) muestra la ruta absoluta del directorio en el que te encuentras."
      },
      {
        question: "¿Qué pasa con un enlace simbólico si borras el archivo original?",
        options: ["Se borra automáticamente", "Sigue funcionando normalmente", "Se rompe y deja de funcionar", "Se convierte en enlace duro"],
        correct: 2,
        explanation: "Un enlace simbólico apunta a la ruta del archivo original. Si este se borra, el enlace queda 'roto' y no puede acceder al contenido."
      },
      {
        question: "¿Qué opción de mkdir crea directorios padres automáticamente?",
        options: ["-r", "-f", "-p", "-a"],
        correct: 2,
        explanation: "La opción -p (parents) crea todos los directorios padre necesarios si no existen. Por ejemplo: mkdir -p a/b/c crea a, a/b y a/b/c."
      }
    ],
    terminalExercises: [
      { prompt: "Crea un directorio llamado 'proyecto'", expected: "mkdir proyecto", output: "" },
      { prompt: "Entra al directorio 'proyecto'", expected: "cd proyecto", output: "" },
      { prompt: "Muestra tu ubicación actual", expected: "pwd", output: "/home/estudiante/proyecto" },
      { prompt: "Crea un archivo vacío llamado 'notas.txt'", expected: "touch notas.txt", output: "" },
      { prompt: "Lista los archivos con detalles", expected: "ls -la", output: "total 0\ndrwxr-xr-x 2 estudiante estudiante 60 jun 14 14:30 .\ndrwxr-xr-x 3 estudiante estudiante 80 jun 14 14:30 ..\n-rw-r--r-- 1 estudiante estudiante  0 jun 14 14:30 notas.txt" }
    ]
  },
  {
    id: 3,
    title: "Usuarios y Seguridad (Permisos)",
    shortTitle: "Usuarios y Permisos",
    icon: "🔐",
    objective: "Gestionar quién puede acceder y modificar el sistema.",
    duration: "55 min",
    exerciseCount: 4,
    theory: [
      `Linux es un sistema <strong>multiusuario</strong>: múltiples personas pueden usar el mismo sistema simultáneamente. Cada usuario tiene un <strong>UID</strong> (identificador numérico), un directorio personal en <code>/home</code>, y pertenece a uno o más <strong>grupos</strong>.`,
      `El sistema de permisos se divide en tres niveles: <strong>Propietario (u)</strong>, <strong>Grupo (g)</strong> y <strong>Otros (o)</strong>. Cada archivo tiene tres tipos de permisos: <strong>Lectura (r=4)</strong>, <strong>Escritura (w=2)</strong> y <strong>Ejecución (x=1)</strong>.`,
      `Los permisos se representan de dos formas: <strong>simbólica</strong> (rwxr-xr--) y <strong>octal</strong> (754). En la forma octal, cada dígito es la suma de los permisos: r(4)+w(2)+x(1). Por ejemplo, 7=rwx, 5=r-x, 4=r--.`,
      `El usuario <strong>root</strong> (UID 0) tiene acceso total al sistema. Por seguridad, no se trabaja como root directamente; se usa <code>sudo</code> para ejecutar comandos específicos con privilegios elevados. El <strong>Sticky Bit</strong> en directorios (como /tmp) impide que los usuarios borren archivos de otros.`,
      `Los permisos especiales incluyen: <strong>SUID</strong> (el archivo se ejecuta con los permisos del propietario), <strong>SGID</strong> (se ejecuta con los permisos del grupo) y <strong>Sticky Bit</strong> (solo el propietario puede borrar sus archivos en directorios compartidos).`
    ],
    tips: [
      { type: "tip", title: "💡 Truco de permisos", text: "Para recordar los valores octales: <strong>r=4, w=2, x=1</strong>. Suma los que necesites: rwx=4+2+1=7, rw-=4+2=6, r--=4, r-x=4+1=5." },
      { type: "warning", title: "⚠️ Nunca uses chmod 777", text: "Dar permisos 777 significa que <strong>cualquier usuario</strong> puede leer, escribir y ejecutar el archivo. Esto es un riesgo de seguridad grave, especialmente en servidores web." }
    ],
    commands: [
      { cmd: "chmod", desc: "Cambia los permisos de un archivo o directorio" },
      { cmd: "chown", desc: "Cambia el propietario y/o grupo de un archivo" },
      { cmd: "useradd", desc: "Crea un nuevo usuario en el sistema" },
      { cmd: "usermod", desc: "Modifica las propiedades de un usuario existente" },
      { cmd: "passwd", desc: "Cambia la contraseña de un usuario" },
      { cmd: "groupadd", desc: "Crea un nuevo grupo" },
      { cmd: "groups", desc: "Muestra los grupos a los que pertenece un usuario" },
      { cmd: "id", desc: "Muestra el UID, GID y grupos del usuario" },
      { cmd: "sudo", desc: "Ejecuta un comando con privilegios de superusuario" },
      { cmd: "su", desc: "Cambia al usuario especificado (o a root)" }
    ],
    codeExamples: [
      {
        label: "Gestión de permisos",
        code: `<span class="comment"># Ver permisos actuales</span>
<span class="command-prompt">$ </span>ls -la script.sh
<span class="output">-rw-r--r-- 1 estudiante estudiante 256 jun 14 script.sh</span>

<span class="comment"># Dar permiso de ejecución solo al dueño (modo octal)</span>
<span class="command-prompt">$ </span>chmod 700 script.sh
<span class="command-prompt">$ </span>ls -la script.sh
<span class="output">-rwx------ 1 estudiante estudiante 256 jun 14 script.sh</span>

<span class="comment"># Modo simbólico: agregar ejecución al usuario</span>
<span class="command-prompt">$ </span>chmod u+x otro_script.sh

<span class="comment"># Crear un usuario nuevo</span>
<span class="command-prompt">$ </span>sudo useradd -m -s /bin/bash estudiante2
<span class="command-prompt">$ </span>sudo passwd estudiante2
<span class="output">Nueva contraseña: ****
Reescriba la nueva contraseña: ****
passwd: contraseña actualizada correctamente</span>

<span class="comment"># Ver la info del usuario</span>
<span class="command-prompt">$ </span>id estudiante2
<span class="output">uid=1001(estudiante2) gid=1001(estudiante2) grupos=1001(estudiante2)</span>

<span class="comment"># Aplicar Sticky Bit a una carpeta compartida</span>
<span class="command-prompt">$ </span>sudo chmod +t /carpeta_compartida
<span class="command-prompt">$ </span>ls -ld /carpeta_compartida
<span class="output">drwxrwxrw<span class="highlight">t</span> 2 root root 4096 jun 14 /carpeta_compartida</span>`
      }
    ],
    practices: [
      {
        title: "Crear y configurar un usuario",
        difficulty: "easy",
        description: "Crea un nuevo usuario llamado <code>estudiante</code> con <code>sudo useradd -m estudiante</code>. Asígnale una contraseña con <code>passwd</code> y verifica su información con <code>id</code>.",
        hint: "La opción -m crea el directorio home del usuario. Usa -s /bin/bash para asignarle el shell bash."
      },
      {
        title: "Proteger un script",
        difficulty: "easy",
        description: "Crea un archivo <code>script.sh</code> con <code>echo '#!/bin/bash' > script.sh</code>. Cambia sus permisos para que <strong>solo el dueño</strong> pueda leer, escribir y ejecutar: <code>chmod 700 script.sh</code>. Verifica con <code>ls -la</code>.",
        hint: "700 = rwx para el dueño, ningún permiso para grupo y otros."
      },
      {
        title: "Sticky Bit en carpeta compartida",
        difficulty: "hard",
        description: "Crea una carpeta <code>/tmp/compartida</code>, dale permisos 1777 (sticky bit + rwx para todos). Crea archivos como distintos usuarios y verifica que un usuario no puede borrar el archivo de otro.",
        hint: "chmod 1777 o chmod +t agrega el Sticky Bit. Verás una 't' al final de los permisos cuando uses ls -la."
      },
      {
        title: "Practicar notación octal",
        difficulty: "medium",
        description: "Crea 4 archivos y asígnales los permisos: 644, 755, 600 y 444. Verifica cada uno con <code>ls -la</code> y escribe a mano qué permisos tiene cada archivo antes de verificar.",
        hint: "644=rw-r--r--, 755=rwxr-xr-x, 600=rw-------, 444=r--r--r--"
      }
    ],
    quiz: [
      {
        question: "¿Qué permisos representa el valor octal 755?",
        options: ["rw-r--r--", "rwxr-xr-x", "rwx------", "rwxrwxrwx"],
        correct: 1,
        explanation: "7=rwx (4+2+1), 5=r-x (4+0+1), 5=r-x. El propietario puede todo, grupo y otros solo leer y ejecutar."
      },
      {
        question: "¿Para qué sirve el Sticky Bit en un directorio?",
        options: ["Hacer el directorio invisible", "Impedir que usuarios borren archivos de otros", "Cifrar el contenido del directorio", "Hacer el directorio de solo lectura"],
        correct: 1,
        explanation: "El Sticky Bit impide que un usuario borre o renombre archivos de otro usuario dentro de ese directorio, incluso si tiene permisos de escritura en el directorio."
      }
    ],
    terminalExercises: [
      { prompt: "Muestra tu ID de usuario y grupos", expected: "id", output: "uid=1000(estudiante) gid=1000(estudiante) grupos=1000(estudiante),27(sudo)" },
      { prompt: "Cambia los permisos de script.sh a 700", expected: "chmod 700 script.sh", output: "" },
      { prompt: "Lista los permisos de script.sh", expected: "ls -la script.sh", output: "-rwx------ 1 estudiante estudiante 45 jun 14 14:30 script.sh" }
    ]
  },
  {
    id: 4,
    title: "Gestión de Software y Compilación",
    shortTitle: "Software",
    icon: "📦",
    objective: "Instalar aplicaciones y entender cómo se construye el software.",
    duration: "50 min",
    exerciseCount: 4,
    theory: [
      `En Linux, el software se instala principalmente a través de <strong>gestores de paquetes</strong>. En distribuciones basadas en Debian/Ubuntu se usa <code>apt</code> (Advanced Package Tool), mientras que en Fedora/RHEL se usa <code>dnf</code> (antes <code>yum</code>).`,
      `<code>apt</code> es una herramienta de <strong>alto nivel</strong> que resuelve dependencias automáticamente: si instalas un programa que necesita una librería, apt la descarga e instala por ti. <code>dpkg</code> es de <strong>bajo nivel</strong> y trabaja con paquetes <code>.deb</code> locales sin resolver dependencias.`,
      `Los <strong>repositorios</strong> son servidores donde se almacenan los paquetes. El sistema tiene una lista de repositorios configurados en <code>/etc/apt/sources.list</code> y en archivos dentro de <code>/etc/apt/sources.list.d/</code>. Puedes añadir repositorios de terceros (PPA) para acceder a software adicional.`,
      `La compilación desde código fuente es el proceso de convertir el código legible por humanos en un programa ejecutable. Se usa cuando un programa no está disponible en los repositorios o necesitas una versión específica. El proceso típico es: <code>./configure</code> → <code>make</code> → <code>sudo make install</code>.`
    ],
    tips: [
      { type: "tip", title: "💡 Buena práctica", text: "Siempre ejecuta <code>sudo apt update</code> antes de instalar algo. Esto actualiza la lista de paquetes disponibles para que obtengas la versión más reciente." },
      { type: "warning", title: "⚠️ Repositorios de terceros", text: "Solo añade repositorios de <strong>fuentes confiables</strong>. Un repositorio malicioso podría instalar software dañino en tu sistema." }
    ],
    commands: [
      { cmd: "apt update", desc: "Actualiza la lista de paquetes disponibles" },
      { cmd: "apt upgrade", desc: "Actualiza todos los paquetes instalados" },
      { cmd: "apt install", desc: "Instala un paquete nuevo" },
      { cmd: "apt remove", desc: "Elimina un paquete (mantiene configuraciones)" },
      { cmd: "apt purge", desc: "Elimina un paquete y sus configuraciones" },
      { cmd: "apt search", desc: "Busca un paquete por nombre o descripción" },
      { cmd: "apt show", desc: "Muestra información detallada de un paquete" },
      { cmd: "dpkg -i", desc: "Instala un paquete .deb local" },
      { cmd: "dpkg -l", desc: "Lista todos los paquetes instalados" },
      { cmd: "gcc", desc: "Compilador de C (parte de build-essential)" },
      { cmd: "make", desc: "Ejecuta las instrucciones de compilación del Makefile" }
    ],
    codeExamples: [
      {
        label: "Gestión de paquetes con apt",
        code: `<span class="comment"># Actualizar lista de paquetes y sistema</span>
<span class="command-prompt">$ </span>sudo apt update && sudo apt upgrade -y

<span class="comment"># Buscar un paquete</span>
<span class="command-prompt">$ </span>apt search "text editor"
<span class="output">nano/noble 7.2-2 amd64 - small, friendly text editor
vim/noble 9.1.016-1 amd64 - Vi IMproved - enhanced vi editor</span>

<span class="comment"># Instalar herramientas de compilación</span>
<span class="command-prompt">$ </span>sudo apt install build-essential -y

<span class="comment"># Compilar un programa en C</span>
<span class="command-prompt">$ </span>echo '#include <stdio.h>
int main() { printf("¡Hola Linux!\\n"); return 0; }' > hola.c
<span class="command-prompt">$ </span>gcc hola.c -o hola
<span class="command-prompt">$ </span>./hola
<span class="output">¡Hola Linux!</span>`
      }
    ],
    practices: [
      {
        title: "Actualizar el sistema completo",
        difficulty: "easy",
        description: "Ejecuta el combo de actualización completa: <code>sudo apt update && sudo apt upgrade -y</code>. Observa qué paquetes se actualizan y cuánto espacio ocupa la actualización.",
        hint: "El && ejecuta el segundo comando solo si el primero fue exitoso. El -y responde 'sí' automáticamente a las confirmaciones."
      },
      {
        title: "Instalar y usar herramientas de compilación",
        difficulty: "medium",
        description: "Instala <code>build-essential</code> para tener gcc y make. Luego crea un archivo <code>hola.c</code> con un programa simple en C, compílalo con <code>gcc</code> y ejecútalo.",
        hint: "Crea el archivo con: echo '#include <stdio.h>\nint main() { printf(\"Hola\\n\"); return 0; }' > hola.c y compila con: gcc hola.c -o hola"
      },
      {
        title: "Explorar paquetes instalados",
        difficulty: "easy",
        description: "Usa <code>dpkg -l</code> para ver la lista de paquetes instalados. Filtra con <code>grep</code> para encontrar paquetes específicos, por ejemplo: <code>dpkg -l | grep python</code>.",
        hint: "dpkg -l muestra TODOS los paquetes. Combínalo con grep para filtrar por nombre."
      },
      {
        title: "Añadir un repositorio PPA",
        difficulty: "hard",
        description: "Investiga cómo añadir un PPA (Personal Package Archive) con <code>add-apt-repository</code>. Añade uno de prueba, actualiza la lista de paquetes, y luego elimínalo con <code>add-apt-repository --remove</code>.",
        hint: "Ejemplo: sudo add-apt-repository ppa:nombre/ppa && sudo apt update. Para eliminarlo: sudo add-apt-repository --remove ppa:nombre/ppa"
      }
    ],
    quiz: [
      {
        question: "¿Cuál es la diferencia principal entre apt y dpkg?",
        options: ["apt es más rápido", "apt resuelve dependencias automáticamente, dpkg no", "dpkg es más nuevo", "No hay diferencia, son lo mismo"],
        correct: 1,
        explanation: "apt es una herramienta de alto nivel que resuelve dependencias automáticamente, mientras que dpkg trabaja con paquetes individuales sin gestionar las dependencias."
      },
      {
        question: "¿Qué debes hacer SIEMPRE antes de instalar un paquete nuevo?",
        options: ["Reiniciar el sistema", "Ejecutar sudo apt update", "Borrar la caché", "Hacer una copia de seguridad completa"],
        correct: 1,
        explanation: "sudo apt update actualiza la lista de paquetes disponibles para asegurarte de obtener las versiones más recientes."
      }
    ],
    terminalExercises: [
      { prompt: "Actualiza la lista de paquetes", expected: "sudo apt update", output: "Hit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nReading package lists... Done\nAll packages are up to date." },
      { prompt: "Busca el paquete 'vim'", expected: "apt search vim", output: "vim/noble 9.1.016-1 amd64\n  Vi IMproved - enhanced vi editor\nvim-tiny/noble 9.1.016-1 amd64\n  Vi IMproved - enhanced vi editor (tiny version)" },
      { prompt: "Instala build-essential", expected: "sudo apt install build-essential", output: "Reading package lists... Done\nbuilding dependency tree... Done\nbuild-essential is already the newest version.\n0 upgraded, 0 newly installed." }
    ]
  },
  {
    id: 5,
    title: "Administración y Monitoreo del Sistema",
    shortTitle: "Monitoreo",
    icon: "📊",
    objective: "Controlar la salud del sistema y los programas en ejecución.",
    duration: "55 min",
    exerciseCount: 4,
    theory: [
      `Un <strong>proceso</strong> es un programa en ejecución. Cada proceso tiene un <strong>PID</strong> (Process ID) único. Los procesos pueden estar en primer plano (foreground) o en segundo plano (background). Puedes enviar un proceso al fondo con <code>&</code> al final del comando o con <code>Ctrl+Z</code> + <code>bg</code>.`,
      `Los <strong>servicios (daemons)</strong> son programas que se ejecutan en segundo plano continuamente, como servidores web, bases de datos o el servicio SSH. En distribuciones modernas se gestionan con <code>systemd</code> y el comando <code>systemctl</code>.`,
      `El monitoreo del sistema es esencial para detectar problemas de rendimiento. Las herramientas clave son: <code>top</code>/<code>htop</code> para procesos en tiempo real, <code>df</code> para espacio en disco, <code>free</code> para memoria RAM, <code>uptime</code> para carga del sistema, e <code>iostat</code> para rendimiento de disco.`,
      `Los <strong>logs del sistema</strong> se almacenan en <code>/var/log/</code>. Los más importantes son: <code>syslog</code> (mensajes generales), <code>auth.log</code> (autenticación y seguridad), <code>kern.log</code> (kernel), y <code>dmesg</code> (mensajes de arranque del hardware). Puedes usar <code>journalctl</code> en sistemas con systemd para consultar logs de forma estructurada.`
    ],
    tips: [
      { type: "tip", title: "💡 htop vs top", text: "Instala <code>htop</code> para una versión mucho más visual y fácil de usar que <code>top</code>. Permite ordenar por CPU/RAM, filtrar procesos y enviar señales directamente." },
      { type: "note", title: "📝 Señales de procesos", text: "Las señales más comunes: <strong>SIGTERM (15)</strong> pide al proceso que termine de forma limpia. <strong>SIGKILL (9)</strong> lo mata inmediatamente sin darle oportunidad de limpiar. Siempre intenta SIGTERM primero." }
    ],
    commands: [
      { cmd: "ps aux", desc: "Lista todos los procesos del sistema con detalles" },
      { cmd: "top", desc: "Monitor de procesos en tiempo real (básico)" },
      { cmd: "htop", desc: "Monitor de procesos interactivo y visual" },
      { cmd: "kill PID", desc: "Envía una señal a un proceso (por defecto SIGTERM)" },
      { cmd: "kill -9 PID", desc: "Fuerza la terminación inmediata de un proceso" },
      { cmd: "systemctl start", desc: "Inicia un servicio" },
      { cmd: "systemctl stop", desc: "Detiene un servicio" },
      { cmd: "systemctl enable", desc: "Habilita un servicio para que arranque con el sistema" },
      { cmd: "systemctl status", desc: "Muestra el estado actual de un servicio" },
      { cmd: "journalctl", desc: "Consulta los logs del sistema (systemd)" },
      { cmd: "tail -f", desc: "Muestra las últimas líneas de un archivo en tiempo real" },
      { cmd: "renice", desc: "Cambia la prioridad de un proceso en ejecución" },
      { cmd: "df -h", desc: "Muestra el espacio en disco de las particiones" },
      { cmd: "free -h", desc: "Muestra el uso de memoria RAM" }
    ],
    codeExamples: [
      {
        label: "Monitoreo y gestión de procesos",
        code: `<span class="comment"># Ver procesos ordenados por uso de CPU</span>
<span class="command-prompt">$ </span>ps aux --sort=-%cpu | head -5
<span class="output">USER       PID %CPU %MEM    VSZ   RSS TTY    STAT START TIME COMMAND
root         1  0.5  0.3 168436 12340 ?      Ss   09:00 0:15 /sbin/init
mysql      842  2.1  5.2 1245680 210440 ?     Sl   09:01 1:23 /usr/sbin/mysqld
www-data   901  1.3  1.8 345600  72380 ?      S    09:01 0:45 apache2</span>

<span class="comment"># Ver el estado de un servicio</span>
<span class="command-prompt">$ </span>sudo systemctl status ssh
<span class="output">● ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/systemd/system/ssh.service; enabled)
     Active: <span class="highlight">active (running)</span> since Sat 2026-06-14 09:00:15
   Main PID: 523 (sshd)
      Tasks: 1 (limit: 4567)</span>

<span class="comment"># Monitorear logs en tiempo real</span>
<span class="command-prompt">$ </span>sudo tail -f /var/log/auth.log
<span class="output">Jun 14 14:32:01 server sshd[1234]: Accepted publickey for admin
Jun 14 14:35:22 server sshd[1289]: Failed password for invalid user</span>

<span class="comment"># Ver uso de disco y memoria</span>
<span class="command-prompt">$ </span>df -h | head -3
<span class="output">Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        50G   12G   35G  26% /
tmpfs           3.9G  1.2M  3.9G   1% /dev/shm</span>

<span class="command-prompt">$ </span>free -h
<span class="output">              total  used  free  shared  buff/cache  available
Mem:           7.7G  2.1G  3.8G   120M       1.8G      5.2G
Swap:          2.0G     0B  2.0G</span>`
      }
    ],
    practices: [
      {
        title: "Explorar procesos con htop",
        difficulty: "easy",
        description: "Instala <code>htop</code> si no lo tienes (<code>sudo apt install htop</code>). Ejecútalo e identifica el proceso que consume más CPU y más RAM. Prueba a ordenar por diferentes columnas con F6.",
        hint: "En htop puedes usar F5 para vista de árbol, F9 para enviar señales, y q para salir."
      },
      {
        title: "Gestionar un servicio con systemctl",
        difficulty: "medium",
        description: "Verifica el estado del servicio SSH con <code>sudo systemctl status ssh</code>. Si está activo, detenlo y luego vuelve a iniciarlo. Habilítalo para que arranque automáticamente con <code>enable --now</code>.",
        hint: "systemctl stop ssh → systemctl start ssh → systemctl enable --now ssh"
      },
      {
        title: "Monitorear logs de seguridad",
        difficulty: "medium",
        description: "Usa <code>sudo tail -f /var/log/auth.log</code> para monitorear intentos de acceso en tiempo real. En otra terminal, intenta hacer login con un usuario incorrecto y observa cómo aparece en el log.",
        hint: "Puedes abrir otra terminal con Ctrl+Alt+T. Intenta: su usuario_falso y observa el log."
      },
      {
        title: "Cambiar prioridad de un proceso",
        difficulty: "hard",
        description: "Inicia un proceso largo (como <code>sleep 1000 &</code>), identifica su PID, y cambia su prioridad con <code>renice</code>. Los valores van de -20 (máxima prioridad) a 19 (mínima). Solo root puede dar prioridad negativa.",
        hint: "Usa: sleep 1000 & para crear un proceso. Luego ps aux | grep sleep para ver el PID. Finalmente: renice 10 -p PID"
      }
    ],
    quiz: [
      {
        question: "¿Qué señal debes usar primero para detener un proceso?",
        options: ["SIGKILL (9)", "SIGTERM (15)", "SIGSTOP (19)", "SIGHUP (1)"],
        correct: 1,
        explanation: "SIGTERM (15) pide al proceso que termine de forma limpia, permitiéndole guardar datos y cerrar archivos abiertos. Solo usa SIGKILL (9) si SIGTERM no funciona."
      },
      {
        question: "¿Qué archivo de log contiene los intentos de autenticación?",
        options: ["/var/log/syslog", "/var/log/auth.log", "/var/log/kern.log", "/var/log/boot.log"],
        correct: 1,
        explanation: "/var/log/auth.log registra todos los eventos de autenticación: logins exitosos, fallidos, uso de sudo, etc."
      }
    ],
    terminalExercises: [
      { prompt: "Muestra todos los procesos del sistema", expected: "ps aux", output: "USER       PID %CPU %MEM    VSZ   RSS TTY    STAT START TIME COMMAND\nroot         1  0.0  0.3 168436 12340 ?      Ss   09:00 0:15 /sbin/init\nroot         2  0.0  0.0      0     0 ?      S    09:00 0:00 [kthreadd]\nestudiante 1500 0.0  0.1  22600  5120 pts/0  Ss   14:30 0:00 bash" },
      { prompt: "Verifica el estado del servicio SSH", expected: "sudo systemctl status ssh", output: "● ssh.service - OpenBSD Secure Shell server\n     Active: active (running)" },
      { prompt: "Muestra el uso de memoria RAM", expected: "free -h", output: "              total  used  free  shared  buff/cache  available\nMem:           7.7G  2.1G  3.8G   120M       1.8G      5.2G\nSwap:          2.0G     0B  2.0G" }
    ]
  },
  {
    id: 6,
    title: "Redes y Conectividad Segura",
    shortTitle: "Redes y SSH",
    icon: "🌐",
    objective: "Configurar y diagnosticar la red y accesos remotos.",
    duration: "60 min",
    exerciseCount: 4,
    theory: [
      `Las herramientas de red modernas en Linux se centran en el comando <code>ip</code> (que reemplaza al antiguo <code>ifconfig</code>) y <code>ss</code> (que reemplaza a <code>netstat</code>). Con <code>ip a</code> puedes ver todas las interfaces de red y sus direcciones IP.`,
      `<strong>SSH (Secure Shell)</strong> es el protocolo estándar para conectarse de forma segura a servidores remotos. La autenticación por <strong>claves públicas/privadas</strong> es mucho más segura que usar contraseñas, ya que es prácticamente imposible de forzar por fuerza bruta.`,
      `El proceso de claves SSH: generas un par de claves (pública y privada) con <code>ssh-keygen</code>. La clave pública se copia al servidor remoto en <code>~/.ssh/authorized_keys</code>. La clave privada se queda en tu máquina local y <strong>nunca se comparte</strong>.`,
      `Los <strong>firewalls</strong> controlan qué tráfico de red puede entrar y salir de tu servidor. <code>ufw</code> (Uncomplicated Firewall) es una interfaz simplificada para <code>iptables</code>. Siempre debes permitir el puerto SSH (22) antes de activar el firewall, o podrías perder el acceso remoto.`,
      `Las herramientas de diagnóstico de red incluyen: <code>ping</code> (verificar conectividad), <code>traceroute</code> (ver la ruta de los paquetes), <code>dig</code>/<code>nslookup</code> (consultas DNS), <code>curl</code>/<code>wget</code> (descargar contenido web) y <code>nmap</code> (escaneo de puertos).`
    ],
    tips: [
      { type: "warning", title: "⚠️ Firewall y SSH", text: "Si estás conectado por SSH, <strong>SIEMPRE</strong> permite el puerto 22 antes de activar el firewall con <code>ufw enable</code>. De lo contrario, perderás tu conexión y no podrás reconectar." },
      { type: "tip", title: "💡 SSH Config", text: "Crea un archivo <code>~/.ssh/config</code> para guardar alias de tus servidores. Así en vez de escribir <code>ssh usuario@192.168.1.50 -p 2222</code>, puedes usar simplemente <code>ssh mi-server</code>." }
    ],
    commands: [
      { cmd: "ip a", desc: "Muestra todas las interfaces de red y sus IPs" },
      { cmd: "ip route", desc: "Muestra la tabla de rutas (gateway por defecto)" },
      { cmd: "ss -tunlp", desc: "Muestra puertos TCP/UDP abiertos y qué programa los usa" },
      { cmd: "ping", desc: "Verifica conectividad con otro host" },
      { cmd: "traceroute", desc: "Muestra la ruta que siguen los paquetes" },
      { cmd: "dig", desc: "Consulta registros DNS de un dominio" },
      { cmd: "ssh", desc: "Conecta de forma segura a un servidor remoto" },
      { cmd: "ssh-keygen", desc: "Genera un par de claves SSH (pública y privada)" },
      { cmd: "ssh-copy-id", desc: "Copia tu clave pública a un servidor remoto" },
      { cmd: "scp", desc: "Copia archivos entre máquinas vía SSH" },
      { cmd: "ufw allow", desc: "Permite tráfico en un puerto específico" },
      { cmd: "ufw enable", desc: "Activa el firewall" },
      { cmd: "ufw status", desc: "Muestra las reglas activas del firewall" },
      { cmd: "curl", desc: "Transfiere datos desde/hacia un servidor (HTTP, FTP)" }
    ],
    codeExamples: [
      {
        label: "Redes y SSH",
        code: `<span class="comment"># Ver interfaces de red y direcciones IP</span>
<span class="command-prompt">$ </span>ip a
<span class="output">1: lo: &lt;LOOPBACK,UP&gt; mtu 65536
    inet 127.0.0.1/8 scope host lo
2: eth0: &lt;BROADCAST,MULTICAST,UP&gt; mtu 1500
    inet <span class="highlight">192.168.1.100/24</span> brd 192.168.1.255 scope global eth0</span>

<span class="comment"># Ver puertos abiertos</span>
<span class="command-prompt">$ </span>ss -tunlp
<span class="output">State  Recv-Q  Send-Q  Local Address:Port  Process
LISTEN 0       128     0.0.0.0:22          sshd
LISTEN 0       511     0.0.0.0:80          apache2</span>

<span class="comment"># Generar claves SSH (sin contraseña para pruebas)</span>
<span class="command-prompt">$ </span>ssh-keygen -t ed25519 -C "mi@email.com"
<span class="output">Generating public/private ed25519 key pair.
Enter file: /home/estudiante/.ssh/id_ed25519
Your identification has been saved in /home/estudiante/.ssh/id_ed25519
Your public key has been saved in /home/estudiante/.ssh/id_ed25519.pub</span>

<span class="comment"># Configurar firewall básico</span>
<span class="command-prompt">$ </span>sudo ufw allow 22/tcp
<span class="command-prompt">$ </span>sudo ufw allow 80/tcp
<span class="command-prompt">$ </span>sudo ufw enable
<span class="output">Firewall is active and enabled on system startup</span>
<span class="command-prompt">$ </span>sudo ufw status
<span class="output">Status: active
To          Action      From
--          ------      ----
22/tcp      ALLOW       Anywhere
80/tcp      ALLOW       Anywhere</span>`
      }
    ],
    practices: [
      {
        title: "Explorar tu red",
        difficulty: "easy",
        description: "Verifica tu dirección IP con <code>ip a</code>, tu gateway con <code>ip route</code>, y los puertos abiertos con <code>ss -tunlp</code>. Anota los resultados.",
        hint: "Tu IP local suele estar en la interfaz eth0 o wlan0. El gateway es la IP de tu router."
      },
      {
        title: "Generar y usar claves SSH",
        difficulty: "medium",
        description: "Genera un par de claves SSH con <code>ssh-keygen -t ed25519</code>. Examina la clave pública con <code>cat ~/.ssh/id_ed25519.pub</code>. Si tienes otro servidor, copia la clave con <code>ssh-copy-id</code>.",
        hint: "ed25519 es el algoritmo más moderno y seguro. La clave pública es la que compartes, la privada NUNCA."
      },
      {
        title: "Configurar firewall con ufw",
        difficulty: "medium",
        description: "Instala ufw si no lo tienes. Permite los puertos 22 (SSH) y 80 (HTTP). Activa el firewall y verifica las reglas con <code>ufw status verbose</code>.",
        hint: "sudo ufw allow 22/tcp → sudo ufw allow 80/tcp → sudo ufw enable. IMPORTANTE: si estás conectado por SSH, primero permite el puerto 22."
      },
      {
        title: "Diagnóstico de red completo",
        difficulty: "hard",
        description: "Haz un diagnóstico completo: <code>ping google.com</code> (conectividad), <code>traceroute google.com</code> (ruta), <code>dig google.com</code> (DNS), <code>curl -I google.com</code> (cabeceras HTTP). Analiza cada resultado.",
        hint: "Si ping falla, revisa tu gateway (ip route). Si DNS falla, revisa /etc/resolv.conf. curl -I muestra solo las cabeceras HTTP."
      }
    ],
    quiz: [
      {
        question: "¿Qué comando reemplaza al antiguo ifconfig en distribuciones modernas?",
        options: ["netstat", "ip", "networkctl", "nmcli"],
        correct: 1,
        explanation: "El comando 'ip' (del paquete iproute2) reemplaza a ifconfig y ofrece mucha más funcionalidad para configurar interfaces, rutas y túneles."
      },
      {
        question: "¿Qué NUNCA debes hacer antes de activar un firewall en un servidor remoto?",
        options: ["Reiniciar la red", "Olvidar permitir el puerto SSH (22)", "Actualizar el sistema", "Revisar los logs"],
        correct: 1,
        explanation: "Si activas el firewall sin permitir SSH primero, te desconectarás del servidor y no podrás volver a entrar remotamente."
      }
    ],
    terminalExercises: [
      { prompt: "Muestra tus interfaces de red", expected: "ip a", output: "1: lo: <LOOPBACK,UP> mtu 65536\n    inet 127.0.0.1/8\n2: eth0: <BROADCAST,UP> mtu 1500\n    inet 192.168.1.100/24" },
      { prompt: "Verifica la conectividad con google.com", expected: "ping google.com", output: "PING google.com (142.250.80.46): 56 bytes\n64 bytes from 142.250.80.46: icmp_seq=1 ttl=118 time=12.3 ms\n--- google.com ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss" },
      { prompt: "Permite el puerto SSH en el firewall", expected: "sudo ufw allow 22", output: "Rule added\nRule added (v6)" }
    ]
  },
  {
    id: 7,
    title: "Procesamiento de Texto y Scripting",
    shortTitle: "Scripting Bash",
    icon: "⚡",
    objective: "Manipular datos y crear scripts automáticos con Bash.",
    duration: "70 min",
    exerciseCount: 5,
    theory: [
      `Las <strong>tuberías (pipes)</strong> son una de las características más poderosas de Linux. El operador <code>|</code> conecta la salida (stdout) de un comando con la entrada (stdin) de otro, permitiendo crear cadenas de procesamiento de datos increíblemente potentes.`,
      `Las herramientas de procesamiento de texto son fundamentales: <code>grep</code> busca patrones, <code>sed</code> (Stream Editor) transforma texto, <code>awk</code> procesa columnas y campos, <code>sort</code> ordena líneas, <code>uniq</code> elimina duplicados, <code>wc</code> cuenta líneas/palabras/caracteres, y <code>cut</code> extrae columnas.`,
      `Un <strong>script de Bash</strong> es un archivo de texto que contiene una secuencia de comandos. Siempre comienza con el <strong>Shebang</strong> <code>#!/bin/bash</code> que indica al sistema qué intérprete usar. Los scripts pueden recibir <strong>argumentos</strong> ($1, $2...), usar <strong>variables</strong>, <strong>condicionales</strong> (if/else), <strong>bucles</strong> (for, while) y <strong>funciones</strong>.`,
      `Los <strong>operadores de redirección</strong> controlan el flujo de datos: <code>></code> redirige la salida a un archivo (sobrescribe), <code>>></code> añade al final del archivo, <code><</code> lee la entrada desde un archivo, <code>2></code> redirige errores, y <code>2>&1</code> combina errores con la salida estándar.`,
      `<code>find</code> busca archivos en el sistema de archivos por nombre, tamaño, fecha, permisos, etc. <code>xargs</code> convierte la entrada estándar en argumentos de un comando, útil para procesar listas de archivos encontrados con find.`
    ],
    tips: [
      { type: "tip", title: "💡 Debugging de scripts", text: "Usa <code>bash -x script.sh</code> para ejecutar un script en modo debug: muestra cada comando antes de ejecutarlo. También puedes agregar <code>set -x</code> al inicio del script." },
      { type: "note", title: "📝 Variables especiales", text: "<code>$0</code> = nombre del script, <code>$1-$9</code> = argumentos, <code>$#</code> = número de argumentos, <code>$?</code> = código de salida del último comando, <code>$@</code> = todos los argumentos." }
    ],
    commands: [
      { cmd: "grep", desc: "Busca patrones de texto en archivos" },
      { cmd: "grep -r", desc: "Busca recursivamente en directorios" },
      { cmd: "grep -i", desc: "Búsqueda sin distinguir mayúsculas/minúsculas" },
      { cmd: "sed", desc: "Editor de flujo para transformar texto" },
      { cmd: "awk", desc: "Procesa texto por columnas y campos" },
      { cmd: "sort", desc: "Ordena líneas de texto" },
      { cmd: "uniq", desc: "Elimina líneas duplicadas consecutivas" },
      { cmd: "wc", desc: "Cuenta líneas (-l), palabras (-w) y caracteres (-c)" },
      { cmd: "cut", desc: "Extrae columnas de texto" },
      { cmd: "find", desc: "Busca archivos en el sistema de archivos" },
      { cmd: "xargs", desc: "Construye comandos desde la entrada estándar" },
      { cmd: "tee", desc: "Lee de stdin y escribe a stdout y archivos" },
      { cmd: "tr", desc: "Traduce o elimina caracteres" }
    ],
    codeExamples: [
      {
        label: "Script con argumentos y condicionales",
        code: `<span class="comment">#!/bin/bash</span>
<span class="comment"># Script: permisos.sh</span>
<span class="comment"># Da permisos de ejecución a un archivo</span>

<span class="highlight">if</span> [ -z "$1" ]; <span class="highlight">then</span>
    echo "❌ Uso: $0 <archivo>"
    echo "  Ejemplo: $0 mi_script.sh"
    exit 1
<span class="highlight">fi</span>

<span class="highlight">if</span> [ ! -f "$1" ]; <span class="highlight">then</span>
    echo "❌ Error: '$1' no existe o no es un archivo"
    exit 1
<span class="highlight">fi</span>

chmod +x "$1"
echo "✅ Permisos de ejecución añadidos a: $1"
echo "   Permisos actuales: $(ls -la "$1" | awk '{print $1}')"

<span class="comment"># --- Uso del script ---</span>
<span class="command-prompt">$ </span>chmod +x permisos.sh
<span class="command-prompt">$ </span>./permisos.sh mi_programa.sh
<span class="output">✅ Permisos de ejecución añadidos a: mi_programa.sh
   Permisos actuales: -rwxr-xr-x</span>`
      },
      {
        label: "Pipes y procesamiento de texto",
        code: `<span class="comment"># Buscar errores en los logs y contar</span>
<span class="command-prompt">$ </span>grep -r "ERROR" /var/log/ 2>/dev/null | wc -l
<span class="output">47</span>

<span class="comment"># Top 5 IPs con más intentos de login fallido</span>
<span class="command-prompt">$ </span>grep "Failed password" /var/log/auth.log | \\
    awk '{print $(NF-3)}' | sort | uniq -c | sort -rn | head -5
<span class="output">    152 192.168.1.50
     43 10.0.0.15
     21 172.16.0.8</span>

<span class="comment"># Reemplazar texto con sed (cambiar puerto en config)</span>
<span class="command-prompt">$ </span>sed -i 's/Port 22/Port 2222/' /etc/ssh/sshd_config

<span class="comment"># Encontrar archivos grandes (>100MB) y listarlos</span>
<span class="command-prompt">$ </span>find / -type f -size +100M -exec ls -lh {} \\; 2>/dev/null
<span class="output">-rw-r--r-- 1 root root 245M jun 14 /var/log/syslog.old
-rw-r--r-- 1 root root 120M jun 12 /tmp/backup.tar.gz</span>`
      }
    ],
    practices: [
      {
        title: "Buscar errores en los logs",
        difficulty: "easy",
        description: "Usa <code>grep -r \"ERROR\" /var/log/</code> para buscar errores en los logs del sistema. Cuenta cuántos hay con <code>wc -l</code> y filtra por un archivo específico.",
        hint: "grep -r 'ERROR' /var/log/ 2>/dev/null | wc -l — El 2>/dev/null oculta los errores de acceso denegado."
      },
      {
        title: "Crear un script con argumentos",
        difficulty: "medium",
        description: "Crea un script <code>permisos.sh</code> que reciba un nombre de archivo como argumento (<code>$1</code>) y le asigne permisos de ejecución automáticamente. El script debe verificar que se proporcionó un argumento y que el archivo existe.",
        hint: "Usa [ -z \"$1\" ] para verificar si el argumento está vacío y [ -f \"$1\" ] para verificar si el archivo existe."
      },
      {
        title: "Reemplazar texto con sed",
        difficulty: "medium",
        description: "Crea un archivo de configuración de prueba y usa <code>sed</code> para reemplazar valores sin abrir un editor. Por ejemplo, cambia <code>puerto=80</code> por <code>puerto=8080</code>.",
        hint: "echo 'puerto=80' > config.txt && sed -i 's/puerto=80/puerto=8080/' config.txt && cat config.txt"
      },
      {
        title: "Script de respaldo automatizado",
        difficulty: "hard",
        description: "Crea un script que comprima un directorio con <code>tar</code>, le añada la fecha al nombre del archivo, y mueva el respaldo a una carpeta designada. Usa variables y el comando <code>date</code>.",
        hint: "FECHA=$(date +%Y%m%d_%H%M%S) → tar -czf respaldo_$FECHA.tar.gz /ruta/directorio → mv respaldo_*.tar.gz /respaldos/"
      },
      {
        title: "Pipeline complejo de datos",
        difficulty: "hard",
        description: "Crea un pipeline que lea un archivo de texto, convierta todo a minúsculas con <code>tr</code>, extraiga solo las palabras únicas, las ordene alfabéticamente, y guarde el resultado en un archivo nuevo.",
        hint: "cat archivo.txt | tr '[:upper:]' '[:lower:]' | tr -s ' ' '\\n' | sort | uniq > resultado.txt"
      }
    ],
    quiz: [
      {
        question: "¿Qué hace el operador | (pipe) en Linux?",
        options: ["Ejecuta dos comandos simultáneamente", "Conecta la salida de un comando con la entrada de otro", "Redirige la salida a un archivo", "Ejecuta un comando en segundo plano"],
        correct: 1,
        explanation: "El pipe (|) toma la salida estándar (stdout) del comando de la izquierda y la pasa como entrada estándar (stdin) al comando de la derecha."
      },
      {
        question: "¿Con qué línea debe comenzar todo script de Bash?",
        options: ["# script.sh", "#!/bin/bash", "// bash script", "BEGIN"],
        correct: 1,
        explanation: "El shebang (#!/bin/bash) indica al sistema operativo qué intérprete debe usar para ejecutar el script."
      },
      {
        question: "¿Qué variable contiene el primer argumento pasado a un script?",
        options: ["$0", "$1", "$#", "$@"],
        correct: 1,
        explanation: "$1 contiene el primer argumento, $2 el segundo, etc. $0 es el nombre del propio script, $# es la cantidad de argumentos."
      }
    ],
    terminalExercises: [
      { prompt: "Cuenta las líneas del archivo /etc/passwd", expected: "wc -l /etc/passwd", output: "42 /etc/passwd" },
      { prompt: "Busca la palabra 'root' en /etc/passwd", expected: "grep root /etc/passwd", output: "root:x:0:0:root:/root:/bin/bash" },
      { prompt: "Lista los usuarios del sistema (primera columna)", expected: "cut -d: -f1 /etc/passwd", output: "root\ndaemon\nbin\nsys\nsync\nwww-data\nestudiante" }
    ]
  },
  {
    id: 8,
    title: "Gestión de Almacenamiento",
    shortTitle: "Almacenamiento",
    icon: "💾",
    objective: "Administrar discos, particiones y volúmenes lógicos.",
    duration: "60 min",
    exerciseCount: 4,
    theory: [
      `En Linux, los dispositivos de almacenamiento se representan como archivos especiales en <code>/dev/</code>. Los discos duros se nombran como <code>/dev/sda</code>, <code>/dev/sdb</code>, etc. (SATA/SCSI) o <code>/dev/nvme0n1</code> (NVMe). Las particiones se numeran: <code>/dev/sda1</code>, <code>/dev/sda2</code>, etc.`,
      `A diferencia de Windows, Linux no usa letras de unidad (C:, D:). En cambio, los discos y particiones se <strong>"montan"</strong> en directorios del árbol de archivos. Por ejemplo, un USB podría montarse en <code>/mnt/usb</code> o <code>/media/usuario/USB_NAME</code>.`,
      `Los <strong>sistemas de archivos</strong> más comunes son: <code>ext4</code> (el estándar en Linux, estable y maduro), <code>XFS</code> (ideal para archivos grandes), <code>Btrfs</code> (moderno, con snapshots y compresión), y <code>swap</code> (espacio de intercambio para cuando la RAM se llena).`,
      `<strong>LVM (Logical Volume Manager)</strong> es una capa de abstracción entre los discos físicos y los sistemas de archivos. Permite: crear volúmenes lógicos que abarcan múltiples discos, <strong>redimensionar particiones "en caliente"</strong> sin desmontar, crear <strong>snapshots</strong> para respaldos, y mover datos entre discos de forma transparente.`,
      `El archivo <code>/etc/fstab</code> (File System Table) define qué particiones se montan automáticamente al arrancar el sistema. Es crítico configurarlo correctamente — un error en fstab puede impedir que el sistema arranque. Siempre usa <code>blkid</code> para obtener los UUID de las particiones y usarlos en fstab en lugar de los nombres de dispositivo que pueden cambiar.`
    ],
    tips: [
      { type: "warning", title: "⚠️ Cuidado con fstab", text: "Un error en <code>/etc/fstab</code> puede impedir que tu sistema arranque. <strong>Siempre haz una copia de seguridad</strong> antes de editarlo: <code>sudo cp /etc/fstab /etc/fstab.bak</code>. Después de editar, valida con <code>sudo mount -a</code>." },
      { type: "tip", title: "💡 UUID vs nombres de dispositivo", text: "Usa <strong>UUID</strong> en fstab en lugar de <code>/dev/sda1</code>. Los nombres de dispositivo pueden cambiar si agregas discos. Los UUID son únicos y permanentes. Obtén el UUID con <code>blkid</code>." }
    ],
    commands: [
      { cmd: "lsblk", desc: "Lista todos los dispositivos de bloque (discos y particiones)" },
      { cmd: "fdisk", desc: "Herramienta interactiva para gestionar particiones (MBR)" },
      { cmd: "parted", desc: "Herramienta avanzada para particiones (GPT y MBR)" },
      { cmd: "mkfs.ext4", desc: "Formatea una partición con sistema de archivos ext4" },
      { cmd: "mount", desc: "Monta un sistema de archivos en un directorio" },
      { cmd: "umount", desc: "Desmonta un sistema de archivos" },
      { cmd: "blkid", desc: "Muestra los UUID de las particiones" },
      { cmd: "df -h", desc: "Muestra espacio usado/disponible de las particiones montadas" },
      { cmd: "du -sh", desc: "Muestra el tamaño total de un directorio" },
      { cmd: "lvcreate", desc: "Crea un volumen lógico (LVM)" },
      { cmd: "lvextend", desc: "Amplía el tamaño de un volumen lógico" },
      { cmd: "resize2fs", desc: "Redimensiona un sistema de archivos ext4" }
    ],
    codeExamples: [
      {
        label: "Gestión de discos y particiones",
        code: `<span class="comment"># Listar todos los discos y particiones</span>
<span class="command-prompt">$ </span>lsblk
<span class="output">NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda      8:0    0    50G  0 disk 
├─sda1   8:1    0   512M  0 part /boot/efi
├─sda2   8:2    0    48G  0 part /
└─sda3   8:3    0   1.5G  0 part [SWAP]
sdb      8:16   0    20G  0 disk</span>

<span class="comment"># Crear una partición en el disco nuevo (sdb)</span>
<span class="command-prompt">$ </span>sudo fdisk /dev/sdb
<span class="output">Command: n (new partition)
Partition type: p (primary)
Partition number: 1
First sector: (default)
Last sector: (default - usa todo el disco)
Command: w (write and exit)</span>

<span class="comment"># Formatear la partición</span>
<span class="command-prompt">$ </span>sudo mkfs.ext4 /dev/sdb1
<span class="output">Creating filesystem with 5242880 4k blocks
Writing superblocks and filesystem accounting information: done</span>

<span class="comment"># Montar la partición</span>
<span class="command-prompt">$ </span>sudo mkdir /mnt/datos
<span class="command-prompt">$ </span>sudo mount /dev/sdb1 /mnt/datos

<span class="comment"># Obtener UUID para fstab</span>
<span class="command-prompt">$ </span>sudo blkid /dev/sdb1
<span class="output">/dev/sdb1: UUID="<span class="highlight">a1b2c3d4-5678-90ab-cdef</span>" TYPE="ext4"</span>

<span class="comment"># Añadir a fstab para montaje persistente</span>
<span class="command-prompt">$ </span>echo 'UUID=a1b2c3d4-5678-90ab-cdef /mnt/datos ext4 defaults 0 2' | sudo tee -a /etc/fstab

<span class="comment"># Verificar que fstab es correcto</span>
<span class="command-prompt">$ </span>sudo mount -a
<span class="comment"># Si no hay errores, ¡todo está bien!</span>`
      }
    ],
    practices: [
      {
        title: "Explorar tus discos",
        difficulty: "easy",
        description: "Usa <code>lsblk</code> para ver la estructura de discos y particiones de tu sistema. Complementa con <code>df -h</code> para ver el espacio usado y <code>blkid</code> para ver los UUID.",
        hint: "lsblk muestra la jerarquía disco→partición. df -h muestra solo las particiones montadas con su uso."
      },
      {
        title: "Crear y montar una partición",
        difficulty: "hard",
        description: "Si tienes un disco adicional o puedes agregar uno virtual en VirtualBox: crea una partición con <code>fdisk</code>, dale formato ext4 con <code>mkfs.ext4</code>, y móntala en <code>/mnt/datos</code>.",
        hint: "fdisk /dev/sdb → n (nueva) → p (primaria) → Enter (sector inicio) → Enter (sector final) → w (escribir). Luego: mkfs.ext4 /dev/sdb1 && mount /dev/sdb1 /mnt/datos"
      },
      {
        title: "Configurar montaje persistente",
        difficulty: "hard",
        description: "Obtén el UUID de tu nueva partición con <code>blkid</code> y edita <code>/etc/fstab</code> para que se monte automáticamente al arrancar. Valida con <code>sudo mount -a</code> antes de reiniciar.",
        hint: "¡IMPORTANTE! Haz backup primero: sudo cp /etc/fstab /etc/fstab.bak. Formato de línea: UUID=xxxx /mnt/datos ext4 defaults 0 2"
      },
      {
        title: "Analizar uso de disco",
        difficulty: "easy",
        description: "Encuentra qué directorios ocupan más espacio con <code>du -sh /*</code>. Profundiza en los más grandes. Combina con <code>sort -h</code> para ordenar por tamaño.",
        hint: "sudo du -sh /* 2>/dev/null | sort -rh | head -10 — Esto te muestra los 10 directorios más grandes."
      }
    ],
    quiz: [
      {
        question: "¿Por qué es mejor usar UUID en /etc/fstab en vez de /dev/sda1?",
        options: ["Es más rápido", "Los UUID son más cortos", "Los nombres /dev/sdX pueden cambiar al agregar discos", "No hay diferencia"],
        correct: 2,
        explanation: "Los nombres de dispositivo como /dev/sda pueden cambiar si agregas o quitas discos. Los UUID son identificadores únicos que no cambian, garantizando que siempre se monte la partición correcta."
      },
      {
        question: "¿Qué debes hacer después de editar /etc/fstab?",
        options: ["Reiniciar inmediatamente", "Ejecutar sudo mount -a para validar", "Nada, se aplica automáticamente", "Ejecutar sudo fstab --check"],
        correct: 1,
        explanation: "sudo mount -a intenta montar todo lo que está en fstab. Si hay un error, lo verás inmediatamente sin necesidad de reiniciar y arriesgarte a que el sistema no arranque."
      }
    ],
    terminalExercises: [
      { prompt: "Lista todos los discos y particiones", expected: "lsblk", output: "NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS\nsda      8:0    0    50G  0 disk\n├─sda1   8:1    0   512M  0 part /boot/efi\n├─sda2   8:2    0    48G  0 part /\n└─sda3   8:3    0   1.5G  0 part [SWAP]" },
      { prompt: "Muestra el espacio en disco disponible", expected: "df -h", output: "Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda2        48G   12G   34G  26% /\ntmpfs           3.9G  1.2M  3.9G   1% /dev/shm" },
      { prompt: "Muestra el tamaño del directorio /var", expected: "du -sh /var", output: "2.3G\t/var" }
    ]
  }
];


// ===== STATE MANAGEMENT =====
let completedPractices = JSON.parse(localStorage.getItem('linux_completed_practices') || '{}');
let completedQuizzes = JSON.parse(localStorage.getItem('linux_completed_quizzes') || '{}');
let currentModule = null;

function saveProgress() {
  localStorage.setItem('linux_completed_practices', JSON.stringify(completedPractices));
  localStorage.setItem('linux_completed_quizzes', JSON.stringify(completedQuizzes));
  updateGlobalProgress();
}

function getModuleProgress(moduleId) {
  const mod = MODULES.find(m => m.id === moduleId);
  if (!mod) return 0;
  const totalItems = mod.practices.length + mod.quiz.length;
  let completed = 0;
  mod.practices.forEach((_, i) => {
    if (completedPractices[`${moduleId}_${i}`]) completed++;
  });
  mod.quiz.forEach((_, i) => {
    if (completedQuizzes[`${moduleId}_${i}`]) completed++;
  });
  return totalItems > 0 ? Math.round((completed / totalItems) * 100) : 0;
}

function updateGlobalProgress() {
  let total = 0, completed = 0;
  MODULES.forEach(mod => {
    const items = mod.practices.length + mod.quiz.length;
    total += items;
    mod.practices.forEach((_, i) => {
      if (completedPractices[`${mod.id}_${i}`]) completed++;
    });
    mod.quiz.forEach((_, i) => {
      if (completedQuizzes[`${mod.id}_${i}`]) completed++;
    });
  });
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  const fill = document.getElementById('globalProgress');
  const text = document.getElementById('globalProgressText');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';
}


// ===== RENDER MODULES GRID =====
function renderModulesGrid() {
  const grid = document.getElementById('modulesRoadmap');
  if (!grid) return;

  grid.innerHTML = MODULES.map(mod => {
    const progress = getModuleProgress(mod.id);
    let statusClass = 'available';
    let statusText = 'Disponible';
    if (progress === 100) { statusClass = 'completed'; statusText = 'Completado ✓'; }
    else if (progress > 0) { statusClass = 'available'; statusText = `${progress}%`; }

    return `
      <div class="module-card animate-on-scroll" onclick="openModule(${mod.id})" id="module-card-${mod.id}">
        <div class="module-card-header">
          <div class="module-number">${mod.icon}</div>
          <span class="module-status ${statusClass}">${statusText}</span>
        </div>
        <h3>Módulo ${mod.id}: ${mod.title}</h3>
        <p>${mod.objective}</p>
        <div class="module-card-footer">
          <span class="duration">⏱️ ${mod.duration}</span>
          <span class="exercises">📝 ${mod.exerciseCount} ejercicios</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderAboutGrid() {
  const grid = document.getElementById('modulesGrid');
  if (!grid) return;

  const features = [
    { icon: "🖥️", title: "Terminal Interactivo", desc: "Practica comandos Linux directamente en el navegador con nuestro simulador de terminal integrado." },
    { icon: "📝", title: "Ejercicios Prácticos", desc: "Más de 24 ejercicios con diferentes niveles de dificultad, pistas y validación de progreso." },
    { icon: "🧠", title: "Quizzes de Conocimiento", desc: "Evalúa tu comprensión con preguntas de opción múltiple y explicaciones detalladas." },
    { icon: "💾", title: "Progreso Guardado", desc: "Tu avance se guarda automáticamente en tu navegador. Continúa donde lo dejaste." },
    { icon: "📱", title: "Diseño Responsivo", desc: "Accede al curso desde cualquier dispositivo: computadora, tablet o móvil." },
    { icon: "🆓", title: "100% Gratuito", desc: "Sin registro, sin pagos, sin limitaciones. Todo el contenido está disponible desde el primer día." }
  ];

  grid.innerHTML = features.map(f => `
    <div class="module-card animate-on-scroll">
      <div class="module-card-header">
        <div class="module-number">${f.icon}</div>
      </div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  `).join('');
}


// ===== RENDER LESSON =====
function openModule(moduleId) {
  const mod = MODULES.find(m => m.id === moduleId);
  if (!mod) return;
  currentModule = mod;

  document.getElementById('homeView').style.display = 'none';
  const lessonView = document.getElementById('lessonView');
  lessonView.classList.add('active');

  const content = document.getElementById('lessonContent');
  content.innerHTML = buildLessonHTML(mod);

  window.scrollTo({ top: 0, behavior: 'smooth' });
  initTerminal(mod);
  closeSidebar();
}

function showHome() {
  document.getElementById('homeView').style.display = 'block';
  document.getElementById('lessonView').classList.remove('active');
  currentModule = null;
  renderModulesGrid();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildLessonHTML(mod) {
  // Breadcrumb
  let html = `
    <nav class="lesson-breadcrumb">
      <a href="#" onclick="showHome(); return false;">🏠 Inicio</a>
      <span class="separator">›</span>
      <span class="current">Módulo ${mod.id}: ${mod.title}</span>
    </nav>

    <div class="lesson-header">
      <span class="module-badge">${mod.icon} Módulo ${mod.id}</span>
      <h1>${mod.title}</h1>
      <div class="objective">
        <span class="icon">🎯</span>
        <span><strong>Objetivo:</strong> ${mod.objective}</span>
      </div>
    </div>
  `;

  // Theory
  html += `
    <div class="content-block">
      <h2 class="content-block-title"><span class="icon">📚</span> Teoría</h2>
      <div class="theory-card">
        ${mod.theory.map(p => `<p>${p}</p>`).join('')}
      </div>
      ${mod.tips.map(tip => `
        <div class="info-box ${tip.type}">
          <span class="icon">${tip.type === 'tip' ? '💡' : tip.type === 'warning' ? '⚠️' : '📝'}</span>
          <div class="info-content">
            <h4>${tip.title}</h4>
            <p>${tip.text}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Commands
  html += `
    <div class="content-block">
      <h2 class="content-block-title"><span class="icon">⌨️</span> Comandos Clave</h2>
      <div class="commands-grid">
        ${mod.commands.map(c => `
          <div class="command-row">
            <span class="cmd">${c.cmd}</span>
            <span class="desc">${c.desc}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Code examples
  html += `
    <div class="content-block">
      <h2 class="content-block-title"><span class="icon">💻</span> Ejemplos de Código</h2>
      ${mod.codeExamples.map(ex => `
        <div class="code-block">
          <div class="code-block-header">
            <div class="code-block-dots"><span></span><span></span><span></span></div>
            <span class="code-block-label">${ex.label}</span>
            <button class="code-block-copy" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre>${ex.code}</pre>
        </div>
      `).join('')}
    </div>
  `;

  // Interactive Terminal
  html += `
    <div class="content-block">
      <h2 class="content-block-title"><span class="icon">🖥️</span> Terminal Interactivo — ¡Practica aquí!</h2>
      <p style="color: var(--text-secondary); margin-bottom: var(--space-md); font-size: 0.9rem;">
        Escribe los comandos sugeridos para practicar. El simulador reconoce los comandos del módulo y muestra resultados de ejemplo.
      </p>
      <div class="terminal-sim" id="terminal-${mod.id}">
        <div class="terminal-sim-header">
          <div class="dots"><span></span><span></span><span></span></div>
          <span class="title">estudiante@linux:~$</span>
        </div>
        <div class="terminal-sim-body" id="termBody-${mod.id}">
          <div class="line output-line">Bienvenido al terminal interactivo — Módulo ${mod.id}</div>
          <div class="line output-line">Escribe un comando y presiona Enter. Escribe "help" para ver comandos disponibles.</div>
          <div class="line output-line">─────────────────────────────────────────</div>
        </div>
        <div class="terminal-input-line">
          <span class="prompt-symbol">$ </span>
          <input type="text" id="termInput-${mod.id}" placeholder="Escribe un comando..." autocomplete="off" spellcheck="false">
        </div>
      </div>
      ${mod.terminalExercises ? `
        <div class="info-box note" style="margin-top: var(--space-sm);">
          <span class="icon">📝</span>
          <div class="info-content">
            <h4>Ejercicios del Terminal</h4>
            <p>${mod.terminalExercises.map((te, i) => `<strong>${i+1}.</strong> ${te.prompt}`).join('<br>')}</p>
          </div>
        </div>
      ` : ''}
    </div>
  `;

  // Practices
  html += `
    <div class="content-block">
      <h2 class="content-block-title"><span class="icon">🏋️</span> Ejercicios Prácticos</h2>
      ${mod.practices.map((p, i) => {
        const isCompleted = completedPractices[`${mod.id}_${i}`];
        return `
          <div class="practice-card" id="practice-${mod.id}-${i}">
            <div class="practice-card-header">
              <span class="practice-number">📝 Ejercicio ${i + 1}: ${p.title}</span>
              <span class="practice-difficulty ${p.difficulty}">${p.difficulty === 'easy' ? 'Fácil' : p.difficulty === 'medium' ? 'Medio' : 'Avanzado'}</span>
            </div>
            <div class="practice-card-body">
              <p>${p.description}</p>
              <div class="hint" id="hint-${mod.id}-${i}">${p.hint}</div>
              <div class="practice-actions">
                <button class="btn-sm btn-hint" onclick="toggleHint(${mod.id}, ${i})">💡 Ver pista</button>
                <button class="btn-sm btn-check ${isCompleted ? 'completed' : ''}" onclick="togglePractice(${mod.id}, ${i})" id="btnPractice-${mod.id}-${i}">
                  ${isCompleted ? '✅ Completado' : '☐ Marcar como completado'}
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Quiz
  html += `
    <div class="content-block">
      <h2 class="content-block-title"><span class="icon">🧠</span> Quiz — Pon a Prueba tu Conocimiento</h2>
      <div class="quiz-container">
        ${mod.quiz.map((q, i) => `
          <div class="quiz-question" id="quiz-${mod.id}-${i}">
            <p><strong>Pregunta ${i + 1}:</strong> ${q.question}</p>
            <div class="quiz-options">
              ${q.options.map((opt, j) => `
                <div class="quiz-option" onclick="selectQuizOption(${mod.id}, ${i}, ${j}, ${q.correct})" id="quizOpt-${mod.id}-${i}-${j}">
                  <span class="option-letter">${String.fromCharCode(65 + j)}</span>
                  <span>${opt}</span>
                </div>
              `).join('')}
            </div>
            <div class="quiz-feedback" id="quizFeedback-${mod.id}-${i}"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Navigation
  const prevMod = MODULES.find(m => m.id === mod.id - 1);
  const nextMod = MODULES.find(m => m.id === mod.id + 1);

  html += `
    <div class="lesson-nav">
      ${prevMod ? `
        <button class="btn btn-secondary" onclick="openModule(${prevMod.id})">
          <span>
            <span class="nav-label">← Anterior</span>
            <span class="nav-title">Módulo ${prevMod.id}: ${prevMod.shortTitle}</span>
          </span>
        </button>
      ` : '<div></div>'}
      ${nextMod ? `
        <button class="btn btn-primary" onclick="openModule(${nextMod.id})">
          <span>
            <span class="nav-label">Siguiente →</span>
            <span class="nav-title">Módulo ${nextMod.id}: ${nextMod.shortTitle}</span>
          </span>
        </button>
      ` : `
        <button class="btn btn-primary" onclick="showHome()">
          <span>
            <span class="nav-label">🎉 ¡Felicidades!</span>
            <span class="nav-title">Has completado el curso</span>
          </span>
        </button>
      `}
    </div>
  `;

  return html;
}


// ===== INTERACTIVE TERMINAL =====
function initTerminal(mod) {
  const input = document.getElementById(`termInput-${mod.id}`);
  if (!input) return;

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const cmd = this.value.trim();
      if (!cmd) return;
      processCommand(mod, cmd);
      this.value = '';
    }
  });

  input.focus();
}

function processCommand(mod, cmd) {
  const body = document.getElementById(`termBody-${mod.id}`);

  // Add command line
  const cmdLine = document.createElement('div');
  cmdLine.className = 'line prompt-line';
  cmdLine.textContent = `$ ${cmd}`;
  body.appendChild(cmdLine);

  // Process command
  let output = '';
  let lineClass = 'output-line';

  if (cmd === 'help') {
    output = `Comandos disponibles en este módulo:\n${mod.commands.map(c => `  ${c.cmd.padEnd(18)} - ${c.desc}`).join('\n')}\n\nComandos generales:\n  clear              - Limpia la terminal\n  help               - Muestra esta ayuda\n  whoami             - Muestra el usuario actual\n  date               - Muestra la fecha y hora\n  echo <texto>       - Imprime texto`;
  } else if (cmd === 'clear') {
    body.innerHTML = '';
    return;
  } else if (cmd === 'whoami') {
    output = 'estudiante';
  } else if (cmd === 'date') {
    output = new Date().toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'medium' });
  } else if (cmd.startsWith('echo ')) {
    output = cmd.substring(5).replace(/['"]/g, '');
  } else if (cmd === 'pwd') {
    output = '/home/estudiante';
  } else if (cmd === 'hostname') {
    output = 'linux-curso';
  } else if (cmd === 'uptime') {
    output = ' ' + new Date().toLocaleTimeString('es-ES') + ' up 3 days, 2:15, 1 user, load average: 0.52, 0.48, 0.45';
  } else {
    // Check if it matches any terminal exercise
    const exercise = mod.terminalExercises?.find(te => {
      const normalizedCmd = cmd.replace(/\s+/g, ' ').trim().toLowerCase();
      const normalizedExpected = te.expected.replace(/\s+/g, ' ').trim().toLowerCase();
      return normalizedCmd === normalizedExpected;
    });

    if (exercise && exercise.output) {
      output = exercise.output;
      lineClass = 'output-line';
    } else {
      // Check if command starts with a known command keyword
      const baseCmd = cmd.split(' ')[0];
      const knownCmd = mod.commands.find(c => c.cmd.split(' ')[0] === baseCmd);
      if (knownCmd) {
        output = `[Simulación] ${knownCmd.desc}\n(Este es un simulador — en una terminal real verías la salida del comando)`;
        lineClass = 'success-line';
      } else {
        output = `bash: ${baseCmd}: comando no encontrado\nEscribe "help" para ver los comandos disponibles`;
        lineClass = 'error-line';
      }
    }
  }

  if (output) {
    const outputLine = document.createElement('div');
    outputLine.className = `line ${lineClass}`;
    outputLine.textContent = output;
    body.appendChild(outputLine);
  }

  body.scrollTop = body.scrollHeight;
}


// ===== PRACTICE & QUIZ INTERACTIONS =====
function toggleHint(modId, practiceIdx) {
  const hint = document.getElementById(`hint-${modId}-${practiceIdx}`);
  if (hint) hint.classList.toggle('visible');
}

function togglePractice(modId, practiceIdx) {
  const key = `${modId}_${practiceIdx}`;
  completedPractices[key] = !completedPractices[key];
  saveProgress();

  const btn = document.getElementById(`btnPractice-${modId}-${practiceIdx}`);
  if (btn) {
    if (completedPractices[key]) {
      btn.classList.add('completed');
      btn.textContent = '✅ Completado';
    } else {
      btn.classList.remove('completed');
      btn.textContent = '☐ Marcar como completado';
    }
  }
}

function selectQuizOption(modId, quizIdx, optIdx, correctIdx) {
  const key = `${modId}_${quizIdx}`;
  if (completedQuizzes[key]) return; // Already answered

  const mod = MODULES.find(m => m.id === modId);
  const quiz = mod.quiz[quizIdx];

  // Mark all options
  quiz.options.forEach((_, j) => {
    const optEl = document.getElementById(`quizOpt-${modId}-${quizIdx}-${j}`);
    if (optEl) {
      optEl.classList.remove('selected');
      if (j === correctIdx) {
        optEl.classList.add('correct');
      } else if (j === optIdx && j !== correctIdx) {
        optEl.classList.add('incorrect');
      }
    }
  });

  // Show feedback
  const feedback = document.getElementById(`quizFeedback-${modId}-${quizIdx}`);
  if (feedback) {
    if (optIdx === correctIdx) {
      feedback.className = 'quiz-feedback correct';
      feedback.textContent = `✅ ¡Correcto! ${quiz.explanation}`;
    } else {
      feedback.className = 'quiz-feedback incorrect';
      feedback.textContent = `❌ Incorrecto. ${quiz.explanation}`;
    }
  }

  completedQuizzes[key] = true;
  saveProgress();
}


// ===== COPY CODE =====
function copyCode(btn) {
  const codeBlock = btn.closest('.code-block');
  const pre = codeBlock.querySelector('pre');
  const text = pre.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ Copiado';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copiar';
      btn.classList.remove('copied');
    }, 2000);
  });
}


// ===== SIDEBAR =====
function openSidebar() {
  document.getElementById('sidebar').classList.add('active');
  document.getElementById('sidebarOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('active');
  document.getElementById('sidebarOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function renderSidebar() {
  const ul = document.getElementById('sidebarModules');
  ul.innerHTML = MODULES.map(mod => `
    <li>
      <a href="#" onclick="openModule(${mod.id}); return false;" class="${currentModule && currentModule.id === mod.id ? 'active' : ''}">
        <span class="mod-num">${mod.id}</span>
        <span>${mod.shortTitle}</span>
      </a>
    </li>
  `).join('') + `
    <li style="margin-top: var(--space-md); padding-top: var(--space-md); border-top: 1px solid var(--border-color);">
      <a href="#" onclick="showHome(); return false;">
        <span class="mod-num">🏠</span>
        <span>Inicio</span>
      </a>
    </li>
  `;
}


// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}


// ===== NAVBAR SCROLL =====
function initNavbar() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}


// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  renderAboutGrid();
  renderModulesGrid();
  renderSidebar();
  updateGlobalProgress();
  initScrollAnimations();
  initNavbar();

  // Sidebar events
  document.getElementById('menuBtn').addEventListener('click', openSidebar);
  document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

  // Re-observe after dynamic content
  setTimeout(initScrollAnimations, 100);
});
