import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { MXWinHome } from '../components/win-home';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        ClarityModule,
        RouterModule.forChild([
            {
                path: '',
                component: MXWinHome
            }
        ])
    ],
    declarations: [
        MXWinHome
    ]
})
export class HomeModule {

}