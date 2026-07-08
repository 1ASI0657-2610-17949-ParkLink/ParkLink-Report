# ParkLink — Evidencias de despliegue, pruebas y capturas

Fecha de verificación: **2026-07-07**

## 1. Base de datos de ParkLink

La base de datos productiva de ParkLink está en **Render PostgreSQL**.

| Campo | Valor |
|---|---|
| Proveedor | Render PostgreSQL |
| Render Postgres ID | `dpg-d8sd4hvavr4c73fki1ng-a` |
| Nombre Render | `parklink-db-lima-seed-20260622` |
| Dashboard | https://dashboard.render.com/d/dpg-d8sd4hvavr4c73fki1ng-a |
| Región | `virginia` |
| PostgreSQL | `16` |
| Database | `parklink_db_7eqn` |
| User | `parklink_user` |
| External URL | `postgresql://parklink_user:***@dpg-d8sd4hvavr4c73fki1ng-a.virginia-postgres.render.com:5432/parklink_db_7eqn?sslmode=require` |
| Configuración backend | Variable `DATABASE_URL` en Vercel, proyecto `parklink-platform` |

> La contraseña real no se documenta. En Vercel la variable aparece cifrada como **Encrypted**.

---

## 2. Capturas de pantalla

### 2.1 App web — dashboard con mapa

**URL verificada:** https://parklink-eta.vercel.app/dashboard

![Dashboard web ParkLink](screenshots/web-dashboard.png)

**Qué se verifica:**

- La web productiva carga correctamente.
- El usuario autenticado entra al dashboard.
- El mapa y los espacios disponibles se muestran.
- El bundle productivo apunta al API Gateway y no al backend directo.

---

### 2.2 Backend — ruta principal abre Swagger

**URL verificada:** https://parklink-platform.vercel.app/

![Swagger backend en ruta raíz](screenshots/backend-swagger-root.png)

**Qué se verifica:**

- La ruta raíz `/` del backend abre Swagger.
- `GET /docs-json` responde OpenAPI JSON.
- El backend productivo está desplegado y documenta Auth, Users, Parking, Reservations, Payments, Notifications, Maps y Health.

---

### 2.3 API Gateway — ruta principal abre Swagger

**URL verificada:** https://api-gateway-xi-five.vercel.app/

![Swagger gateway en ruta raíz](screenshots/gateway-swagger-root.png)

**Qué se verifica:**

- La ruta raíz `/` del gateway abre Swagger.
- El gateway expone documentación propia.
- El health del gateway reporta backend `available`.

---

### 2.4 App mobile Flutter — capturas y pruebas visuales del flujo

Las siguientes capturas corresponden al flujo mobile Flutter documentado en el reporte. En esta sesión no había un emulador Android conectado; por eso se reutilizan las capturas ya guardadas y se complementan con pruebas técnicas actuales: `flutter test`, `flutter analyze` y `flutter build apk --debug` apuntando al API Gateway productivo.

#### 2.4.1 Login mobile

![Flutter login](../screenshots/flutter/flutter-login.png)

**Qué estoy haciendo:** abro la pantalla inicial de autenticación de la app mobile.

**Qué verifico:**

- Que exista el formulario de inicio de sesión.
- Que el usuario pueda ingresar correo y contraseña.
- Que el flujo mobile tenga entrada clara para usuarios registrados.

**Resultado:** pantalla de login disponible como punto de entrada al flujo mobile.

---

#### 2.4.2 Registro mobile

![Flutter registro](../screenshots/flutter/flutter-register.png)

**Qué estoy haciendo:** reviso la pantalla de creación de cuenta desde la app mobile.

**Qué verifico:**

- Que exista flujo de registro para nuevos usuarios.
- Que el formulario capture datos necesarios para conductor/usuario.
- Que la app mobile cubra autenticación inicial y onboarding.

**Resultado:** pantalla de registro disponible y conectada al flujo de autenticación.

---

#### 2.4.3 Mapa mobile con Google Maps

![Flutter mapa Google Maps](../screenshots/flutter/flutter-map-googlemaps.png)

**Qué estoy haciendo:** entro a la pantalla principal del conductor donde se muestran cocheras en mapa.

**Qué verifico:**

- Que Google Maps renderice dentro de la app Flutter.
- Que se muestren estacionamientos disponibles como marcadores.
- Que la app mobile consuma datos reales del backend/gateway para descubrir espacios.
- Que la configuración de Maps Android compile correctamente con `GOOGLE_MAPS_API_KEY`.

**Resultado:** mapa mobile disponible; build APK validado con key de Maps y `PARKLINK_API_URL=https://api-gateway-xi-five.vercel.app`.

---

#### 2.4.4 Mapa mobile alternativo / vista de búsqueda

![Flutter mapa](../screenshots/flutter/flutter-map.png)

**Qué estoy haciendo:** reviso la vista de búsqueda móvil donde el usuario explora cocheras.

**Qué verifico:**

- Que la pantalla de mapa tenga estado visual correcto.
- Que el usuario pueda navegar desde búsqueda hacia detalle de una cochera.
- Que el flujo principal del conductor empiece desde el mapa.

**Resultado:** pantalla de exploración mobile documentada como evidencia funcional.

---

#### 2.4.5 Detalle de estacionamiento mobile

![Flutter detalle de estacionamiento](../screenshots/flutter/flutter-parking-detail.png)

**Qué estoy haciendo:** selecciono una cochera desde el mapa para revisar su información.

**Qué verifico:**

- Que la app muestre nombre, ubicación y precio de la cochera.
- Que exista navegación desde el mapa hacia el detalle.
- Que el usuario tenga suficiente información antes de reservar.

**Resultado:** detalle de cochera disponible y listo para iniciar reserva.

---

#### 2.4.6 Formulario de reserva mobile

![Flutter reserva](../screenshots/flutter/flutter-reservation.png)

**Qué estoy haciendo:** inicio una reserva desde el detalle de la cochera.

**Qué verifico:**

- Que el usuario pueda seleccionar horario de inicio y fin.
- Que se calcule el total estimado.
- Que la app envíe la reserva al endpoint `/reservations` mediante el API Gateway.
- Que el backend rechace horarios inválidos o solapados.

**Resultado:** flujo de creación de reserva disponible; además, en producción se validó que una segunda reserva del mismo espacio/hora responde `400`.

---

#### 2.4.7 Pago mobile

![Flutter pago](../screenshots/flutter/flutter-payment.png)

**Qué estoy haciendo:** continúo desde una reserva pendiente hacia la pantalla de pago.

**Qué verifico:**

- Que el usuario pueda revisar el monto de la reserva.
- Que exista una acción de pago asociada a la reserva.
- Que el flujo conecte reserva → pago.

**Resultado:** pantalla de pago disponible para completar el flujo conductor.

---

#### 2.4.8 Resultado de pago mobile

![Flutter resultado de pago](../screenshots/flutter/flutter-payment-result.png)

**Qué estoy haciendo:** reviso el estado final después de procesar el pago simulado.

**Qué verifico:**

- Que la app muestre confirmación del pago.
- Que el usuario reciba feedback claro del resultado.
- Que el flujo cierre correctamente después de reservar y pagar.

**Resultado:** flujo reserva → pago → resultado documentado visualmente.

---

## 3. Pruebas ejecutadas

### 3.1 Backend local

| Prueba | Resultado | Qué verifica |
|---|---|---|
| `bun run test:backend` | OK — 3 suites, 9 tests | Servicios backend, pagos, reservas, búsqueda y control anti-overlap. |
| `bun run test:api-gateway` | OK — 2 suites, 3 tests | Proxy del gateway, reenvío de headers y retry ante 5xx. |
| `bun run lint` | OK — 0 errores | Calidad estática TypeScript backend/gateway. |
| `bun run build:backend && bun run build:api-gateway` | OK | Compilación productiva de backend y gateway. |

---

### 3.2 Web local

| Prueba | Resultado | Qué verifica |
|---|---|---|
| `bun run test` | OK — 3 files, 6 tests | Store, helpers API y componentes base. |
| `bun run build` | OK | Build Vite productivo. |
| `bun run lint` | OK con 4 warnings previos | No hay errores; warnings existentes de React Hook Form / deps. |

---

### 3.3 Mobile Flutter local

| Prueba | Resultado | Qué verifica |
|---|---|---|
| `flutter test` | OK — 1 test passed | Pantalla de auth login/registro. |
| `flutter analyze` | OK — No issues found | Análisis estático Dart/Flutter. |
| `flutter build apk --debug --dart-define=PARKLINK_API_URL=https://api-gateway-xi-five.vercel.app` | OK | La app compila usando API Gateway y Google Maps key. |

Detalle de lo realizado en mobile:

| Evidencia mobile | Qué estoy haciendo | Qué se valida |
|---|---|---|
| Login | Abro la app en el flujo de acceso. | Existe autenticación mobile y la pantalla se renderiza correctamente. |
| Registro | Cambio al modo de creación de cuenta. | Existe onboarding/registro para usuarios nuevos. |
| Mapa | Entro al home del conductor. | La app tiene navegación basada en mapa y soporte Google Maps. |
| Detalle de cochera | Selecciono un parking desde el mapa. | El usuario puede revisar información antes de reservar. |
| Reserva | Selecciono hora de inicio/fin. | La app prepara payload para `/reservations` y el backend controla solapes. |
| Pago | Continúo con una reserva pendiente. | Existe flujo reserva → pago. |
| Resultado de pago | Finalizo pago simulado. | El usuario recibe confirmación del resultado. |

Comando de build mobile usado:

```bash
GOOGLE_MAPS_API_KEY=<key-publica-maps> \
flutter build apk --debug \
  --dart-define=PARKLINK_API_URL=https://api-gateway-xi-five.vercel.app
```

Resultado relevante:

```text
✓ Built build/app/outputs/flutter-apk/app-debug.apk
```

---

## 4. Pruebas productivas ejecutadas

### 4.1 Smoke test backend/gateway

| Endpoint | Resultado | Qué verifica |
|---|---|---|
| `GET https://parklink-platform.vercel.app/` | `200` | La ruta principal del backend abre Swagger. |
| `GET https://parklink-platform.vercel.app/docs-json` | `200` | OpenAPI JSON disponible. |
| `GET https://api-gateway-xi-five.vercel.app/` | `200` | La ruta principal del gateway abre Swagger. |
| `GET https://api-gateway-xi-five.vercel.app/health` | `200`, status `ok`, backend `available` | Gateway conectado al backend. |
| `GET https://api-gateway-xi-five.vercel.app/parking-spaces/search?limit=1` | `200` | Búsqueda de cocheras vía gateway. |
| `GET https://api-gateway-xi-five.vercel.app/maps/geocode?address=Lima%2C%20Peru` | `200` | Maps backend funciona con key productiva. |

Salida relevante:

```text
backendRoot=200:true
gatewayRoot=200:true
gatewayHealth=200 backend=available
mapsGeocode=200
```

---

### 4.2 Prueba anti doble-reserva

Se ejecutó contra producción usando dos conductores distintos:

- `driver01@parklink.test`
- `driver02@parklink.test`

Ambos intentaron reservar el **mismo parking** en el **mismo rango horario**.

| Paso | Resultado | Qué verifica |
|---|---|---|
| Login conductor 1 | OK | JWT válido vía gateway. |
| Login conductor 2 | OK | Segundo usuario válido vía gateway. |
| Crear primera reserva | `201` | El parking queda reservado para ese horario. |
| Crear segunda reserva mismo parking/hora | `400` | El backend bloquea mezcla/doble reserva. |
| Cancelar reserva de prueba | `200` | Limpieza de la reserva creada para no dejar basura. |

Salida relevante:

```text
firstReservation=201
secondReservation=400 {"message":"Parking space already has a reservation in this time range"}
cleanupCancel=200
```

**Conclusión:** dos personas no pueden reservar el mismo parking a la misma hora.

---

### 4.3 Verificación web productiva

| URL | Resultado | Qué verifica |
|---|---|---|
| https://parklink-eta.vercel.app | `200` | Web principal disponible. |
| https://parklink-web.vercel.app | `200` | Segundo deployment web disponible. |
| Bundle web | `gateway=true` | La web consume API Gateway. |
| Bundle web | `backendDirect=false` | La web ya no apunta al backend directo. |
| Bundle web | `googleKey=true` | Google Maps key pública está configurada. |

Salida relevante:

```text
https://parklink-eta.vercel.app gateway=true googleKey=true backendDirect=false
https://parklink-web.vercel.app gateway=true googleKey=true backendDirect=false
```

---

## 5. Despliegues verificados

| Componente | URL producción | Estado |
|---|---|---|
| Backend | https://parklink-platform.vercel.app | OK |
| API Gateway | https://api-gateway-xi-five.vercel.app | OK |
| Web principal | https://parklink-eta.vercel.app | OK |
| Web alternativa | https://parklink-web.vercel.app | OK |

## 6. Notas

- La protección anti doble-reserva funciona en producción por validación transaccional del backend.
- La migración SQL de constraint anti-overlap queda en el repo para reforzar la regla también a nivel base de datos.
- No se imprimen secretos reales en este documento.
