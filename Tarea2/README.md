# Instrucciones Tarea 2

## 1. Instalar las Dependencias

Primero, necesitas instalar todas las dependencias del proyecto. Abre una terminal en el directorio del proyecto y ejecuta el siguiente comando:

    npm install

## 2. Compilar el DIST

Después de instalar las dependencias, al correr el siguiente comando creara la carpeta **dist** donde se podra abrir el archivo html:

    npm run build

## 3. Cambios al JSON

En la carpeta de assets en src tiene el json de la informacion que se puede cambiar, si se quiere cambiar el correo de destino del form debera ser el **formEmail** y volver a correr el build para que se hagan los cambias

    {
    "name": "Aldair Vargas Plascencia",
    "email": "aldayrplas@gmail.com",
    "phone": "+52 33 1220 5181",
    "formEmail": "aldayrplas@gmail.com"
    }

A tomar en cuenta que formsubmit.co puede llegar a ser muy tardado para los request y por lo que utilizar varios correos de prueba podria servir
