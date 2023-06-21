# Assimove
> HACK PUEBLA 2023

# Tabla de Contenidos

1. [Arquitectura](#arquitectura)

# Arquitectura

Se diseñaron dos posibles arquitecturas para la aplicación.

## Arquitectura de desarrollo y producción con pocos usuarios

La primera arquitectura es una aproximación de monolito, que aprovecha las ventajas de AWS Amplify.

Entre las más importantes:

> Crear un back-end de AWS para su web, iOS o aplicación de Android con autenticación, datos, almacenamiento y más en cuestión de minutos.

> Crear de manera visual una IU de front-end con integración Figma de diseño a código y conecte la IU a un back-end con unos pocos clics.

Y aprovechando que todos los mocks de la aplicación se hicieron con Figma, la integración y desarrollo sería relativamente rápida cumpliendo de igual forma los requisitos de funcionalidad en tiempo real.

A continuación se ilustran los flujos a seguir para el backend y frontend respectivamente, así como la arquitectura propuesta:

![](assets/img/diagrams/Amplify_Create-App-Backend.png)
![](assets/img/diagrams/AWS-Amplify_Build-Frontend-UI.png)

![](assets/img/diagrams/AWS%20Dev%20Infra.png)

## Arquitectura de producción altamente escalable

La segunda arquitectura es una aproximación de microservicios en la que se aprovecha la escabilidad y robustez que logramos a través de conexiones más complejas.

Entre las ventajas más importantes de esta aproximación:

> Se puede escalar por separado el frontend de los usuarios del frontend de los preestadores de servicio (mooviers), como si estas fueran aplicaciones distintas, logrando una mayor disponibilidad en la aplicación.

> Se pueden lograr costos menores debido al uso de servicios *serverless* como AWS Lambda para realizar y segmentar aún más las operaciones de la aplicación.

> La comunicación en tiempo real podría ser mucho más rápida a través de Amazon ElastiCache for Redis

A continuación se ilustra la arquitectura propuesta:

![](assets/img/diagrams/AWS%20Prod%20Infra.png)
