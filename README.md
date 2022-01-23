# SuperMelico 🛒

Aplicación diseñada en React Native + Expo + Sqlite + Firebase + Google Auth
H<sub>2</sub>O
Version Productiva en : https://expo.io/artifacts/5d2faaa8-2cc8-4c80-93c1-da7c051129b9

- [x] Lista de Compras
- [X] Carrito en Linea (Firebase)
- [X] Validacion de Usuario mediante Firebase
- [X] Estado General
- [X] Base de Datos de compras
- [ ] Base de Datos de producto
- [ ] Guardar Sesion de Usuario

Trabajo realizado durante un curso.[^coder] .

[^coder]: Curso de Desarrollo de aplicaciones en Coderhouse.


## Galeria
<p align="center">
<img src="imagenesreadme/intro.jpeg" width="30%" height="600em" border="10"/>
<img src="imagenesreadme/login.jpeg" width="30%" height="600em" border="10"/>
<img src="imagenesreadme/list.jpeg" width="30%" height="600em" border="10"/>
</p>
<p align="center">
<img src="imagenesreadme/menu.jpeg" width="30%" height="600em" border="10"/>
<img src="imagenesreadme/category.jpeg" width="30%" height="600em" border="10"/>
<img src="imagenesreadme/product.jpeg" width="30%" height="600em" border="10"/>
</p>
<p align="center">
<img src="imagenesreadme/user.jpeg" width="30%" height="600em" border="10"/>
<img src="imagenesreadme/userlocation.jpeg" width="30%" height="600em" border="10"/>
<img src="imagenesreadme/userlocation2.jpeg" width="30%" height="600em" border="10"/>
</p>

## Porque React?
* Es una libreria que acelera el flujo de trabajo.
+ React esta orientada a componentes y esta ideado para desarrollar facilmente interfaces.
- Sus componentes tienen funcionalidad y estado(sus propios datos), lo cual brinda gran flexibilidad para un trabajo como este.
+ Rendimiento y Velocidad al utilizar la virtual DOM para mostrar los cambios.
- React es como una navaja suiza para crear interfaces.

## Tecnologia utilizada
<p align="center">
<img src="https://miro.medium.com/max/1024/1*zTdZMxbTkVdXCOoZlXLnsg.png" width="30%" height="100em" border="10"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwB14KMDkyBYBzGoYEtnUpvnVcYwIoXDz5w&usqp=CAU" width="30%" height="100em" border="10"/>   
<img src="https://media.vlpt.us/images/choiish98/post/e7c5eeb7-cf53-4d01-ba8a-0f2e3bcca9fa/redux.png" width="30%" height="100em" border="10"/>    
</p>

# Arquitectura
Esta App se realizo con un arbol de carpetas que se detalla a continuacion. Se priorizo mas que nada que se encuentre lo mas modularizado posible. Gracias a esto el test y el debug se realizo de una manera optima, detectando facilmente los errores y bugs que iban surgiendo.

## Componentes

AddItem.js
Componente que contiene un imput y un boton agregar, se le pasa el comportamiento necesario para agregar un componente a la lista.

Modal.js
Componente que maneja los distintos Modals de la Lista de compras.

./Auth:
AuthScreenWrapper.js
Input.js
Impute s el formulario y AuthScreenWrapper es el componente que brinda la pantalla .

./Cart:
cartItem.js
Contiene el codigo de cada item particular.

./Grid:
GridItem.js
ProductGrid.js
Correspondiente a Grilla de Categoria y Grilla de Productos, consumidos de los datos de la carpeta DATA.

./List:
List.js
Componente que contiene toda la lista de Compras.

ListItem.js
Componente que define la cantidad a comprar.

./Profile:
LocationSelector.js
MapPreview.js
Contienen los componentes de Location, se desarrollaron de acuerdo a la documentacion original de React Native. No tiene grandes cambios.

## Data - Datos de la aplicacion en formato JSON

### Categorias

```json
    {
      id: '1',
      name: 'VÍVERES',
      color: COLORS.PERSIAN,
      pic: "https://angelicasmarket.com/wp-content/uploads/2020/09/COMBO-VIVERES-1.jpg"
    },
```
### Productos

```json
    {
      id: '1',
      category: '1',
      name: 'Huevos',
      description: 'Huevos Naturales y Organicos',
      weight: 450,
      price: 120,
    },
```

## Constantes:

./constant

colors.js
Paleta de colores utilizada en la aplicación.[^color] .

[^color]: Paleta Coolors https://coolors.co/364652-071108-b5bec6-c7dbe6-659157

database.js
claves de API para acceder a los distintos servicios (FIREBASE, GOOGLE AUTH, GOOGLE MAPS)


## Database (Carpeta db y models)

En archivo js, todos los metodos para el CRUD de la base de datos.
El store se comunica desde orders.reducer.js .

En Models estan las Clases que seran equivalentes a las tablas de la base.

## Navigation
El index principal index.js tiene la siguiente estructura, la cual depende de estar logueado o no :

    <NavigationContainer>
      {userId
        ? <TabNavigator />
        : <AuthNavigator />}
    </NavigationContainer>

Authnavigator es un Snack compuesto por 2 pantallas Login y Register.

Tab Navigator son 4 Tabs, donde 3 de ellas son Stacks y la ultima una pantalla (ListScreen)

En Orden:
ProductNavigator
CartNavigator
ListScreen

| Tab 1      | Tab 2 | Tab 3      | Tab 4 |
| ----------- | ----------- | ----------- | ----------- |
| Tienda   | Carrito        | Mi Lista   | Usuario        |
| Stack Product   | Stack Cart        | ListScreen   | Stack Auth        |

