# Versiones de SDK's | Android

## Bi en línea { id="BEL" }

### Version - 4.2 <small>_ Noviembre 3, 2021</small> { id="BEL_4.2" }

=== "Referencia al repositorio"
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

=== "build.gradle"
    ``` js
    dependencies {
        implementation 'com.develsystems.bi:smartid:1.1.3'
    }
    ```

=== "AndroidManifest.xml"
    ``` xml
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    **Opcionales
    **<uses-permission android:name="android.permission.READ_PHONE_STATE" />
    **<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    ```


<!-- ## BiBanking { id="BiBanking" } -->

## Bi en línea - El Salvador { id="BELSV" }

### Version - 4.2 <small>_ Octubre 6, 2021</small> { id="BELSV_4.2" }

=== "Referencia al repositorio"
    ``` js
    allprojects {
        repositories {
            maven {
                url 'https://mymavenrepo.com/repo/8bE3rIqPQ4pQHe7B1aiF/'
            }
        }
    }
    ```

=== "build.gradle"
    ``` js
    dependencies {
        implementation 'com.develsystems.bisv:smartid:1.1.3'
    }
    ```

=== "AndroidManifest.xml"
    ``` xml
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    **Opcionales
    **<uses-permission android:name="android.permission.READ_PHONE_STATE" />
    **<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    ```

## BiBank { id="BiBank" }

### Version - 4.2 <small>_ Octubre 6, 2021</small> { id="BiBank_4.2" }

=== "Referencia al repositorio"
    ``` js
    allprojects {
        repositories {
            maven {
                url 'https://mymavenrepo.com/repo/8bE3rIqPQ4pQHe7B1aiF/'
            }
        }
    }
    ```

=== "build.gradle"
    ``` js
    dependencies {
        implementation 'com.develsystems.bibank:smartid:1.1.3'
    }
    ```

=== "AndroidManifest.xml"
    ``` xml
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    **Opcionales
    **<uses-permission android:name="android.permission.READ_PHONE_STATE" />
    **<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    ```

## BanPais { id="BanPais" }

### Version - 4.2 <small>_ Septiembre 29, 2021</small> { id="BanPais_4.2" }

=== "Referencia al repositorio"
    ``` js
    allprojects {
        repositories {
            maven {
                url 'https://mymavenrepo.com/repo/8bE3rIqPQ4pQHe7B1aiF/'
            }
        }
    }
    ```

=== "build.gradle"
    ``` js
    dependencies {
        implementation 'com.develsystems.banpais:smartid:1.1.3'
    }
    ```

=== "AndroidManifest.xml"
    ``` xml
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    **Opcionales
    **<uses-permission android:name="android.permission.READ_PHONE_STATE" />
    **<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    ```