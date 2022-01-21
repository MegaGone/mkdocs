# Android

El presente documento muestra los pasos necesarios para realizar la integración del servicio SmartID dentro de las Bancas Móviles.

!!! info "IMPORTANTE"
    Los métodos descritos a continuación se implementan mediante el uso de una librería nativa generada para Android con compatibilidad a partir de la versión 4.0.3 (API 15)

## Instalación SDK

- Agregar referencia al repositorio de DevelSystems en el archivo.gradle del proyecto.

=== "example.gradle"
    ``` js
    allprojects {
        repositories {
            maven {
                url 'https://mymavenrepo.com/repo/RbCl0bo3GGziIIJjcRoH/'
                credentials
                {
                username 'bi'
                password '8jLvGf6Hj4vo2fG8'
                }
            }
        }
    }
    ```

- Agregue las dependencias en su archivo build.gradle.

=== "build.gradle"
    ``` js
    dependencies {
        implementation 'com.develsystems.bi:smartid:1.1.3'
    }
    ```

- Agregar los siguientes permisos en el archivo AndroidManifest.xml, para Android 6 y superiores se deben de solicitar en tiempo de ejecución.

=== "AndroidManifest.xml"
    ``` xml
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    **Opcionales
    **<uses-permission android:name="android.permission.READ_PHONE_STATE" />
    **<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    ```

## Crear Instancia
Este método debe de ser ejecutado al momento de abrir la aplicación.

### Integración
Para utilizar el SDK de Android se debe crear una instancia de la clase SmartId.

``` js
import com.develsystems.smartid.SmartId;
SmartId.initInstance(Context,license, user, isProduction);
```
### Parámetros
=== "Parámetros"

    | Parámetro   | Tipo    | Descripción                                             |
    | :---------: | :-----: | :-----------------------------------------------------: |
    | `context`   | Context | Contexto de la aplicación                               |
    | `license`   | String  | Licencia del producto de SmartID                        |
    | `user`      | String  | Usuario que ingresa a la banca móvil `Ej. lesther.vega` |
    | `isProduct` | Boolean | `true` = Producción / `false` = Desarrollo/QA           |

## Enlazar Dispositivo
Este método inicia el rastreo de un dispositivo en el servicio de SmartID, este método debe de ser ejecutado al momento de iniciar sesión de forma exitosa.

### Integración
Se debe llamar al método `Link` con los siguientes parámetros

### Parámetros
``` js
import com.develsystems.smartid.SmartId;
SmartId.getInstance().Link(channel, session);
```

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
Detectar posibles fraudes. Este método debe ser ejecutado en las pantallas donde se realicen transacciones.

### Integración
Se debe llamar al método Tracking con los siguientes parámetros:

``` js
import com.develsystems.smartid.SmartId;
SmartId.getInstance().Tracking(channel, session, activity);
```

### Parámetros

=== "Channel"

    Todos los canáles son del tipo `Int`

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
        Sesión generada por la banca. `String`

=== "Session"

    !!! info "Activity"
        Pantalla desde donde se genera el tracking. `Ejemplo: TRANFERENCIA_TERCEROS`. `String`

## Desenlazar dispositivo

Este método tienen como objetivo finalizar el rastreo de un dispositivo en el servicio de SmartID. Este método debe ser ejecutado al momento de finalizar sesión.

### Integración
Se debe llamar al método UnLink con los siguientes parámetros:

``` js
import com.develsystems.smartid.SmartId;
SmartId.getInstance().UnLink(channel, session);
```

### Parámetros
=== "Channel"

    Todos los canáles son del tipo `Int`

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
        Sesión generada por la banca. `String`