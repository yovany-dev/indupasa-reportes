export const routeMeta: Record<string, any> = {
  '/': { requiresAuth: true },
  '/login': { requiresAuth: false },
  '/iniciar-reporte': { requiresAuth: true },
  '/reporte-del-dia': { requiresAuth: true },
  '/configurar-pilotos': { requiresAuth: true },
}
