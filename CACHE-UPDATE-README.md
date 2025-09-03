# 🔄 GUÍA DE ACTUALIZACIÓN Y CACHÉ - Lume 2.1.0

## 🚨 PROBLEMA COMÚN: CACHÉ DESACTUALIZADO

Cuando actualizas el diseño o funcionalidades de la web, los usuarios pueden ver la versión anterior debido al caché del navegador.

## ✅ SOLUCIONES IMPLEMENTADAS

### 1. **Versionado Automático de Archivos**
- Todos los archivos CSS, JS y recursos tienen parámetros de versión: `?v=2.1.0`
- El service worker se actualiza automáticamente
- El manifest.json incluye la versión actual

### 2. **Script de Actualización Forzada**
- Detecta automáticamente nuevas versiones
- Limpia el caché local del navegador
- Muestra notificación al usuario
- Recarga la página automáticamente

### 3. **Control de Caché del Servidor**
- Archivo `.htaccess` para controlar caché del servidor
- HTML no se cachea (siempre actualizado)
- CSS/JS se cachean con versión específica
- Imágenes se cachean a largo plazo

### 4. **Meta Tags Anti-Caché**
- `Cache-Control: no-cache, no-store, must-revalidate`
- `Pragma: no-cache`
- `Expires: 0`

## 🚀 CÓMO USAR

### **Para Desarrollo:**
```bash
npm run dev
```

### **Para Build Normal:**
```bash
npm run build
```

### **Para Build con Versión Única (RECOMENDADO):**
```bash
npm run build:versioned
```

Este comando:
- Genera un timestamp único
- Actualiza todas las versiones automáticamente
- Ejecuta el build
- Prepara todo para producción

## 📱 QUÉ PASA EN EL NAVEGADOR

### **Primera Visita:**
- Se descargan todos los recursos
- Se instala el service worker
- Se cachean los recursos

### **Visitas Posteriores:**
- Se cargan recursos desde caché
- El script verifica si hay nueva versión
- Si hay cambios, se actualiza automáticamente

### **Cuando Hay Actualizaciones:**
1. Se detecta nueva versión
2. Se muestra notificación al usuario
3. Se limpia caché local
4. Se recarga la página
5. Se descargan nuevos recursos

## 🔧 SOLUCIÓN MANUAL PARA USUARIOS

Si algún usuario sigue viendo la versión anterior:

### **Opción 1: Recargar Forzado**
- **Chrome/Edge:** `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac)
- **Firefox:** `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac)

### **Opción 2: Limpiar Caché del Navegador**
1. Abrir DevTools (`F12`)
2. Click derecho en el botón de recarga
3. Seleccionar "Vaciar caché y recargar"

### **Opción 3: Modo Incógnito**
- Abrir la web en ventana privada/incógnito
- Siempre carga la versión más reciente

## 🚀 DESPLIEGUE EN PRODUCCIÓN

### **1. Ejecutar Build Versionado:**
```bash
npm run build:versioned
```

### **2. Subir Archivos:**
- Todo el contenido de `dist/`
- El archivo `.htaccess`
- Cualquier otro archivo de configuración

### **3. Verificar:**
- La web se carga correctamente
- El service worker se actualiza
- Los usuarios ven la nueva versión

## 📊 MONITOREO

### **Console del Navegador:**
- ✅ "Service Worker registrado"
- ✅ "Service Worker activado"
- 🔄 "Nueva versión detectada" (cuando hay cambios)

### **Network Tab:**
- Los archivos CSS/JS incluyen parámetros de versión
- No hay errores 404 o caché desactualizado

## 🆘 SOLUCIÓN DE PROBLEMAS

### **Problema: Usuarios siguen viendo versión anterior**
**Solución:**
1. Verificar que se ejecutó `npm run build:versioned`
2. Confirmar que se subieron todos los archivos
3. Verificar que el `.htaccess` está en el servidor
4. Esperar máximo 24 horas (el script verifica automáticamente)

### **Problema: Service Worker no se actualiza**
**Solución:**
1. Verificar que `sw.js` tiene la nueva versión
2. Los usuarios pueden cerrar y abrir la web
3. El script verifica cada hora automáticamente

### **Problema: Caché del servidor persistente**
**Solución:**
1. Verificar que `.htaccess` está en el servidor
2. Contactar al proveedor de hosting si es necesario
3. Algunos CDNs pueden requerir configuración adicional

## 🎯 MEJORES PRÁCTICAS

1. **Siempre usar `npm run build:versioned`** para producción
2. **Probar en modo incógnito** antes de subir
3. **Verificar la consola** para mensajes de actualización
4. **Comunicar cambios** a los usuarios si son importantes
5. **Monitorear métricas** de carga y rendimiento

## 📞 SOPORTE

Si tienes problemas persistentes:
1. Revisar la consola del navegador
2. Verificar que todos los archivos están actualizados
3. Confirmar que el service worker se registra correctamente
4. Probar en diferentes navegadores y dispositivos

---

**🎉 Con estas implementaciones, los problemas de caché deberían resolverse automáticamente para la mayoría de los usuarios.**
