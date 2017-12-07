import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatTooltipModule,
    MatSidenavModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatGridListModule,
        MatDialogModule,
        MatTooltipModule,
        MatSidenavModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatGridListModule,
        MatDialogModule,
        MatTooltipModule,
        MatSidenavModule
    ]
})
export class MaterialImportModule {
}
