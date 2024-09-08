import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { getCurrentUser } from 'vuefire';

export async function authGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const currentUser = await getCurrentUser();
  const requiresAuth = to.meta.requiresAuth;

  if (requiresAuth) {
    if (!currentUser) next('/login')
    else next()
  } else {
    if (to.path === '/login' && currentUser) next('/')
    else next()
  }
}
