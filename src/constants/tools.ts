import { Tool } from "@/types/toolTypes";

const tools: Tool[] = [
  {
    amountId: 'pending',
    name: 'Pendientes en salir',
    icon: 'mdi-clock',
    path: '/iniciar-reporte-pilotos',
    bg: 'background-color: #4158D0;background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);',
  },
  {
    amountId: 'totalReports',
    name: 'Total de reportes del día',
    icon: 'mdi-timetable',
    path: '/reporte-pilotos',
    bg: 'background-color: #FFE53B;background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);',
  },
  {
    amountId: 'totalDrivers',
    name: 'Total de pilotos',
    icon: 'mdi-card-account-details',
    path: '/pilotos',
    bg: 'background-color: #FF3CAC;background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);',
  },
  {
    name: 'Iniciar reporte de pilotos',
    icon: 'mdi-table-edit',
    path: '/iniciar-reporte-pilotos',
    bg: 'background-color: #FF9A8B;background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);',
  },
  {
    name: 'Reporte de pilotos',
    icon: 'mdi-car-clock',
    path: '/reporte-pilotos',
    bg: 'background-color: #0093E9;background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);',
  },
  {
    name: 'Configurar pilotos',
    icon: 'mdi-truck',
    path: '/pilotos',
    bg: 'background-color: #8BC6EC;background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);',
  },
];

export { tools };
