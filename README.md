# Proyecto en React - Redux Toolkit

En este proyecto, hemos desarrollado una aplicación para la gestión de finanzas del usuario utilizando **Redux Toolkit**, una herramienta eficiente para gestionar el estado en aplicaciones React.

# Vista Principales:

## Home 🏠

La vista principal muestra todas las transacciones ingresadas por el usuario en una tabla detallada, que incluye:

- Descripción
- Monto ingresado
- Categoría
- Fecha
- Gasto/Ingreso

Ademas implemente un buscador que permite filtrar las transacciones por **categoría**. Si no se encuentran resultados para la búsqueda, se muestra una alerta informativa.

> 'No se encontraron registros para la búsqueda.'

Le agregue por aparte un gráfico de torta utilizando al librería **recharts** que proporciona una visualización clara de los gastos a través de un gráfico interactivo..
![Estructura](https://res.cloudinary.com/dtbfspso5/image/upload/v1719883012/torta_nphhd6.png)

Al final de la página, se muestra un resumen del balance total de gastos e ingresos registrados por el usuario.

## Agregar ✔

En esta vista, se implemento un formulario que permite al usuario agregar nuevas transacciones. Después de agregar una transacción, se muestra un modal de SweetAlert confirmando la acción realizada.
![Estructura](https://res.cloudinary.com/dtbfspso5/image/upload/v1719882882/modificar_qlgxol.png)

## Acciones - Panel de gestión ✔✔

Esta vista muestra todas las transacciones en una tabla similar a la vista de Home, pero con la adición de las columnas de Acciones:

- Editar: Permite al usuario modificar los detalles de una transacción seleccionada. Al realizar cambios, se muestra una alerta para confirmar la modificación.
  ![Estructura](https://res.cloudinary.com/dtbfspso5/image/upload/v1719882882/modificar_qlgxol.png)
- Eliminar: Cuenta con un modal de SweetAlert para validar la eliminación de una transacción seleccionada.:
  ![Estructura](https://res.cloudinary.com/dtbfspso5/image/upload/v1719882482/validacion_ds0fsd.png)

## Tecnologias / Herramientas ⚙

- React
- Redux Toolkit
- React-Redux
- React Bootstrap
- React Router DOM
- Recharts
- SweetAlert2
- FontAwesome

## Requisitos 💻

Deberás realizar una aplicación de gestión de finanzas. El usuario deberá poder agregar transacciones con detalles como descripción, monto, categoría, tipo (gasto o ingreso) y fecha. El usuario deberá también poder editar y eliminar dichas transacciones. Todos los formularios deben contener validación y el usuario debe ser notificado en cada acción. La aplicación deberá contener una vista donde poder agregar transacciones, otra vista donde se muestre la lista de transacciones con las acciones de editar y eliminar. La siguiente vista deberá contener un buscador y filtrar por categorías. Por último un resumen total de las transacciones realizadas.

## Como Clonar el repositorio 💻

```bash
Agrego el link de mi repo [repositorio](https://github.com/MartinGramajo/gestor-finanzas.git

git clone https://github.com/MartinGramajo/gestor-finanzas.git
```

## Como contribuir con el repositorio 🤝

Para contribuir en el proyecto debe ponerse en contacto al siguiente mail: **martingramajo08@gmail.com**

## Autores 🤺

1. Martin Gramajo ( 🎩 Mago )

## Licencia 📃

copyright (c) 2024
