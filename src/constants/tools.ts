import { Tool } from "@/types/toolTypes";

const tools: Tool[] = [
  {
    amountId: 'pending',
    name: 'Pendientes en salir',
    icon: 'mdi-clock',
    path: '/iniciar-reporte',
    bg: 'background-color: #0B5733; background-image: linear-gradient(45deg, #0B5733 0%, #0AA649 50%, #0AB665 100%);',
  },
  {
    amountId: 'totalReports',
    name: 'Total de reportes del día',
    icon: 'mdi-timetable',
    path: '/reporte-del-dia',
    bg: 'background-color: #053321; background-image: linear-gradient(120deg, #053321 0%, #076B33 40%, #0AB665 100%);',
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
    bg: 'background-color: #0AB665; background-image: linear-gradient(60deg, #0AB665 0%, #0AA649 30%, #0B5733 70%, #053321 100%);',
  },
  {
    name: 'Reporte del día',
    icon: 'mdi-car-clock',
    path: '/reporte-del-dia',
    bg: 'background-color: #076B33; background-image: linear-gradient(135deg, #076B33 0%, #0AA649 25%, #0B5733 50%, #0AB665 75%, #053321 100%);',
  },
  {
    name: 'Configurar pilotos',
    icon: 'mdi-truck',
    path: '/configurar-pilotos',
    bg: 'background-color: #0B5733; background-image: linear-gradient(225deg, #0B5733 0%, #0AA649 30%, #0AB665 60%, #076B33 100%);',
  },
];

export { tools };
