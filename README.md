# Grupo 2

Proyecto para el curso Taller de Desarrollo Web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

***
* ## 1. Para levantar la Aplicación:

1.1. Agregar el `node_modules` package
```sh
npm install
```
1.2. Agregar `nodemon` package
```sh
npm install -g nodemon
```
1.3. Agregar `sweetalert2` package
```sh
npm install --save sweetalert2
```
1.4. Agregar `angular cdk` package
```sh
npm install @angular/cdk --save
```
1.5. Agregar `ngx charts` package
```sh
npm install @swimlane/ngx-charts --save
```
1.6. Agregar `captcha` package
```sh
npm i ngx-captcha
```
***
* ## 2. Para iniciar el server del api rest en 4001
Ejecutar:
```sh
npm run start:api
```
> Nota: Este comando ejecuta el servicio `"start:api": "nodemon server/server.js"`

***
* ## 3. Para iniciar el server de Angular en 4201
Ejecutar:
```sh
npm run start:server
```
> Nota: Este comando ejecuta el servicio `"start:server": "ng serve --proxy-config proxy.conf.js"`

  ***     
* ## 4. (opcional) Construir en GithubPages
Agregar la dependencia:
```sh
ng add angular-cli-ghpages
```

Ejecutar:
```sh
ng deploy --base-href=https://nicolasbncruz.github.io/upc
```

