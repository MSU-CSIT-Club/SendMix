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
    MatTooltipModule
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
        MatTooltipModule
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
        MatTooltipModule
    ]
})
export class MaterialImportModule {
}
