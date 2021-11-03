import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { SolicitudInscripcionComponent } from '../../pages/solicitud-inscripcion/solicitud-inscripcion.component';
import { AceptacionComponent } from '../../pages/aceptacion/aceptacion.component';
import { AcuseComponent } from '../../pages/acuse/acuse.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'solicitud-inscripcion',        component: SolicitudInscripcionComponent },
    { path: 'solicitud-aceptacion',        component: AceptacionComponent },
    { path: 'acuse',        component:  AcuseComponent}
];
