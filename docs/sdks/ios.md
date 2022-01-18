# iOS

El presente documento muestra los pasos necesarios para realizar la integración del servicio SmartID dentro de las Bancas Móviles.

!!! info "IMPORTANTE"
    Los métodos descritos a continuación se implementan mediante el uso de una librería nativa generada para iOS con compatibilidad a partir de la versión iOS10+

## Instalación SDK
Agregar referencia al repositorio de DevelSystems en la sección de Swift Package Manager del proyecto.

=== "SmartID"
    ``` js
    url: https://github.com/DevelSystems/SmartID-iOS
    branch: 4.2.0_3_psapp
    ```

=== "Dependencia"
    ``` js
    url: https://github.com/kishikawakatsumi/KeychainAccess
    version: 4.2.2
    ```

## Inicializar framework
Para este paso debemos inicializar el framework con los datos iniciales para su funcionamiento correcto

### Integración
Para utilizar el SDK de iOS se debe `inicializar` el `framework` al hacer `login` en la aplicación

``` js
import SmartId;
SID.start(license: "licence", username: “username", isProduction: true)
```

### Parámetros
=== "Parámetros"

    | Parámetro      | Tipo    | Descripción                                             |
    | :------------: | :-----: | :-----------------------------------------------------: |
    | `license`      | String  | Licencia del producto de SmartID                        |
    | `username`     | String  | Usuario que ingresa a la banca móvil `Ej. lesther.vega` |
    | `isProduction` | Boolean | `true` = Producción / `false` = Desarrollo/QA           |

## Enlazar dispositivo
Sirve para iniciar el rastreo de un dispositivo en el servicio de SmartID, este método debe de ser ejecutado al momento de iniciar sesión de forma exitosa.

### Integración
Se debe llamar al método `Link` con los siguientes parámetros:

``` js
import SmartId
SID.shared.link(channel: "channel", session: "session")
```

### Parámetros

=== "Channel"

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

=== "Session"

    !!! info "Session"
        Sesión generada por el canal

## Rastrear dispositivo
Método par detectar posibles fraudes. Este método debe ser ejecutado en las pantallas donde se realicen transacciones.

### Integración
Se debe llamar al método `Tracking` con los siguientes parámetros:

``` js
import SmartId;
SID.shared.tracking(channel: channelProd, session: "", action: "PAGO_TERCEROS")
```

### Parámetros

=== "Channel"

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

=== "Session"

    !!! info "Session"
        Sesión generada por la banca

=== "Action"

    !!! info "Action"
        Pantalla desde donde se genera el tracking. `Ejemplo: TRANFERENCIA_TERCEROS`

## Desenlazar Dispositivo
Para finalizar el rastreo de un dispositivo en el servicio de SmartID. Este método debe ser ejecutado al momento de finalizar sesión.

### Integración
Se debe llamar al método UnLink con los siguientes parámetros:

``` js
import SmartId;
SID.shared.unlink(channel: “channel”, session: "session")
```

### Parámetros
=== "Channel"

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

=== "Session"

    !!! info "Session"
        Sesión generada por la banca

## Información de dispositivo
Este método tiene como finalidad obtener la información relacioanda al dispositivo. Este método se debe ejecutar con sesión.

### Integración
Se debe llamar al método getDeviceInfo con los siguientes parámetros:

``` js
import SmartId;
SID.shared.getDeviceInfo(channel: "String", session: "String") -> String?
```

### Parámetros
=== "Channel"

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

=== "Session"

    !!! info "Session"
        Sesión generada por la banca