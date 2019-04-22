import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'project',
                loadChildren: './project/project.module#DemoProjectModule'
            },
            {
                path: 'label',
                loadChildren: './label/label.module#DemoLabelModule'
            },
            {
                path: 'ticket',
                loadChildren: './ticket/ticket.module#DemoTicketModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoEntityModule {}
