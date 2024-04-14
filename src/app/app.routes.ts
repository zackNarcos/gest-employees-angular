import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', loadChildren: () => import('./pages/employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'services', loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule) },
  { path: 'leaves', loadChildren: () => import('./pages/leaves/leaves.module').then(m => m.LeavesModule) },
  { path: '**', redirectTo: '/employees' } // Redirection par défaut en cas de route non trouvée
];
