import { getCurrentUser } from 'vuefire';

export async function getUid() {
  const user = await getCurrentUser();
  const uid = user?.uid!;
  return uid
}
