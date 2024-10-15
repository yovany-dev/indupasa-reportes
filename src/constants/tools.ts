import { Tool } from "@/types/toolTypes";

const tools: Tool[] = [
  {
    amountId: 'pending',
    name: 'Pendientes en salir',
    icon: 'mdi-clock',
    path: '/iniciar-reporte',
    bg: 'background-color: #0AA649; background-image: linear-gradient(90deg, #0AA649 0%, #0B5733 50%, #053321 100%);',
  },
  {
    amountId: 'totalReports',
    name: 'Total de reportes del día',
    icon: 'mdi-timetable',
    path: '/reporte-del-dia',
    bg: 'background-color: #0AA649; background-image: linear-gradient(90deg, #0AA649 0%, #0B5733 50%, #053321 100%);',
  },
  {
    amountId: 'totalDrivers',
    name: 'Total de pilotos',
    icon: 'mdi-card-account-details',
    path: '/configurar-pilotos',
    bg: 'background-color: #0AA649; background-image: linear-gradient(90deg, #0AA649 0%, #0B5733 50%, #053321 100%);',
  },
  {
    name: 'Iniciar reporte',
    icon: 'mdi-table-edit',
    path: '/iniciar-reporte',
    bg: 'background-color: #0AA649; background-image: linear-gradient(90deg, #0AA649 0%, #0B5733 50%, #053321 100%);',
  },
  {
    name: 'Reporte del día',
    icon: 'mdi-car-clock',
    path: '/reporte-del-dia',
    bg: 'background-color: #0AA649; background-image: linear-gradient(90deg, #0AA649 0%, #0B5733 50%, #053321 100%);',
  },
  {
    name: 'Configurar pilotos',
    icon: 'mdi-truck',
    path: '/configurar-pilotos',
    bg: 'background-color: #0AA649; background-image: linear-gradient(90deg, #0AA649 0%, #0B5733 50%, #053321 100%);',
  },
];

export { tools };
