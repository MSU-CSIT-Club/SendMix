import { Component, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mixTitle: string;
  mixAuthor: string;
  writeProtection: boolean;
  rowsOfSongs: number = 1;

  constructor(private _dialog: MatDialog) {}

  /*
  openSettings() {
    const dialogRef = this._dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
        // do things after the dialog closes
    });
  }
  */
}

/*
// main settings dialog
@Component({
  selector: 'app-root',
  templateUrl: '../dialogs/main.settings.dialog.html',
  styleUrls: ['../dialogs/main.settings.dialog.css']
})
export class DialogContentComponent {
  constructor( @Optional() public dialogRef: MatDialogRef<DialogContentComponent>) { }
} 

*/