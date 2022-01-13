# Instalación

## ¿Cómo enlazar el dispositivo?
Este método debe de ser ejecutado al momento de iniciar sesión de forma exitosa y esto iniciará con el rastreo de un dispositivo en el servicio de SmartID.

### Inclusión del script

Para la `inclusión del Script` se debe agregar una referencia a nuestro script como el siguiente `ejemplo`:

### Ejemplos de inclusión de script

=== "Producción"

    _Ejemplo_:
    ```
    <script src="https://stats.bi.com.gt/bel/analytics-1.2.js"></script>
    <script src="https://stats.bi.com.gt/bb/analytics-1.2.js"></script>
    ```

=== "Desarrollo y Pruebas"

    _Ejemplo_:
    ```
    <script src="https://stats.bi.com.gt/bel/dev/analytics-1.2.js"></script>
    <script src="https://stats.bi.com.gt/bb/dev/analytics-1.2.js"></script>
    ```

### Personalization_caller()
En el onload inicial después de realizar un inicio de sesión exitoso mandar a llamar el
método `personalization_caller()`, método que creará el enlace inicial para poder hacer el
registro del dispositivo.

`Ejemplo:`
```
personalization_caller(channel, username, session, login_date);

```
### Parámetros del personalization_caller()

=== "Channel"

    Canal electrónico por el cual se está identificando el dispositivo.

    | Canal       | Descripción                          |
    | ----------- | ------------------------------------ |
    | `1`         | Banca Individual                     |
    | `2`         | Banca Corporativa                    |
    | `3`         | Aplicación Móvil – Banca Individual  |
    | `4`         | Aplicación Móvil – Banca Corporativa |
    | `5`         | Banpais                              |
    | `6`         | Banpais App                          |
    | `7`         | BI SV                                |
    | `8`         | BI SV App                            |
    | `9`         | Bibank                               |
    | `10`        | Bibank App                           |
    | `11`        | Teclado Virtual                      |
    | `12`        | Exeboard                             |
    | `13`        | Exeboard App                         |
    

=== "Username"

    !!! info "Usuario que ingresa a la banca móvil."
    _Ejemplo_:
    `Lesther Vega`

=== "Session"
    !!! info "Sesión generada por la banca."

=== "Login_date"
    !!! info "Fecha y hora del inicio de sesión identificado en formato `dd-MM-yyyy HH:mm:ss`"

## ¿Cómo rastrear el dispositivo?
Este método es principalmente para detectar posibles fraudes en páginas de consulta.

### Inclusión del script

Para la `inclusión del Script` se debe agregar una referencia a nuestro script como el siguiente `ejemplo`:

### Ejemplos de inclusión de script

=== "Producción"

    _Ejemplo_:
    ```
    <script src="https://stats.bi.com.gt/bel/analytics-1.2.js"></script>
    <script src="https://stats.bi.com.gt/bb/analytics-1.2.js"></script>
    ```

=== "Desarrollo y Pruebas"

    _Ejemplo_:
    ```
    <script src="https://stats.bi.com.gt/bel/dev/analytics-1.2.js"></script>
    <script src="https://stats.bi.com.gt/bb/dev/analytics-1.2.js"></script>
    ```

### Personalization_caller()
En el onload inicial después de realizar un inicio de sesión exitoso mandar a llamar el
método `personalization_caller()`, método que creará el enlace inicial para poder hacer el
registro del dispositivo.

`Ejemplo:`
```
personalization_tracking(channel, username, session, fecha, ”TRANSFERENCIA_ACH”);

```
### Parámetros del personalization_tracking()

=== "Canal"

    Canal electrónico por el cual se está identificando el dispositivo.

    | Canal       | Descripción                          |
    | :---------: | :----------------------------------: |
    | `1`         | Banca Individual                     |
    | `2`         | Banca Corporativa                    |
    | `3`         | Aplicación Móvil – Banca Individual  |
    | `4`         | Aplicación Móvil – Banca Corporativa |
    | `5`         | Banpais                              |
    | `6`         | Banpais App                          |
    | `7`         | BI SV                                |
    | `8`         | BI SV App                            |
    | `9`         | Bibank                               |
    | `10`        | Bibank App                           |
    | `11`        | Teclado Virtual                      |
    | `12`        | Exeboard                             |
    | `13`        | Exeboard App                         |

=== "Usuario"

    !!! info "Usuario que ingresa a la banca móvil."
    _Ejemplo_:
    `Lesther Vega`

=== "Sesion"

    !!! info "Sesión generada por la banca."

=== "Fecha"

    !!! info "Fecha y hora del inicio de sesión identificado en formato `dd-MM-yyyy HH:mm:ss`"

=== "Accion"
    !!! info "Página en donde se encuentra el cliente."


## ¿Cómo desenlazar el dispositivo?
Este médodo tiene como finalidad finalizar el rastreo de un dispositivo en el servicio de SmartID.

### Inclusión del script
Para la inclusión del Script se debe `agregar` una referencia a un `nuevo script` llamado
`anijs`, este script debe ser incluido en las páginas a analizar, exceptuando la página a la
que se redirecciona luego de un inicio de sesión exitoso.

Para la `inclusión del Script` se debe agregar una referencia a nuestro script como el siguiente `ejemplo`:

### Ejemplos de inclusión de script

=== "Producción"
    _Ejemplo_:
    ```
    <script src="https://stats.bi.com.gt/bel/analytics-1.2.js"></script>
    <script src="https://stats.bi.com.gt/bb/analytics-1.2.js"></script>
    ```

=== "Desarrollo y Pruebas"
    _Ejemplo_:
    ```
    <script src="https://stats.bi.com.gt/bel/dev/analytics-1.2.js"></script>
    <script src="https://stats.bi.com.gt/bb/dev/analytics-1.2.js"></script>
    ```
### Personalization_logout()
Al momento de que el usuario cierre sesión en la banca deberá consumir el método
personalization_logout para dejar de hacer el rastreo del dispositivo.

`Ejemplo`
```
personalization_logout(channel, username, session);
```

### Parámetros del personalization_logout()

=== "Canal"

    Canal electrónico por el cual se está identificando el dispositivo.

    | Canal       | Descripción                          |
    | :---------: | :----------------------------------: |
    | `1`         | Banca Individual                     |
    | `2`         | Banca Corporativa                    |
    | `3`         | Aplicación Móvil – Banca Individual  |
    | `4`         | Aplicación Móvil – Banca Corporativa |
    | `5`         | Banpais                              |
    | `6`         | Banpais App                          |
    | `7`         | BI SV                                |
    | `8`         | BI SV App                            |
    | `9`         | Bibank                               |
    | `10`        | Bibank App                           |
    | `11`        | Teclado Virtual                      |
    | `12`        | Exeboard                             |
    | `13`        | Exeboard App                         |

=== "Usuario"

    !!! info "Usuario que ingresa a la banca móvil."
    _Ejemplo_:
    `Lesther Vega`

=== "Sesion"

    !!! info "Sesión generada por la banca."

## ¿Cómo validar la integridad?
Este médodo tiene como finalidad analizar los elementos de una página especifica.

### Inclusión del script
Para la inclusión del Script se debe `agregar` una referencia a un `nuevo script` llamado
`anijs`, este script debe ser incluido en las páginas a analizar, exceptuando la página a la
que se redirecciona luego de un inicio de sesión exitoso.

Para la `inclusión del Script` se debe agregar una referencia a nuestro script como el siguiente `ejemplo`:

### Ejemplos de inclusión de script

=== "Producción / Desarrollo"
    _Ejemplo_:
    ```
    <script src="https://stats.bi.com.gt/bel/anijs-min-1.0.js"></script>
    <script src="https://stats.bi.com.gt/bb/anijs-min-1.0.js"></script>
    ```

Posteriormente debe incluirse el script de SmartID de la siguiente manera, ya que estos
scripts trabajan en conjunto

=== "Producción"
    _Ejemplo_:
    ```
    <script src="https://stats.bi.com.gt/bel/analytics-2.1.js"></script>
    <script src="https://stats.bi.com.gt/bb/analytics-2.1.js"></script>
    ```

=== "Desarrollo y Pruebas"
    _Ejemplo_:
    ```
    <script src="https://stats.bi.com.gt/bel/dev/analytics-2.1.js"></script>
    <script src="https://stats.bi.com.gt/bb/dev/analytics-2.1.js"></script>
    ```

!!! info "ACLARACIÓN"

    Para esta funcionalidad no es necesario llamar a ningún método extra.