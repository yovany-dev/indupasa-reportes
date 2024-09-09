export const routeMeta: Record<string, any> = {
  '/': { requiresAuth: true },
  '/login': { requiresAuth: false },
  '/personal': { requiresAuth: true },
  '/transportes': { requiresAuth: true },
}
