export const routeMeta: Record<string, any> = {
  '/': { requiresAuth: true },
  '/login': { requiresAuth: false },
  '/staff': { requiresAuth: true },
  '/trans': { requiresAuth: true },
}
