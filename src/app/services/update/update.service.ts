import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private updates: SwUpdate, private _snackBar: MatSnackBar) {
    if (environment.production) {
      this.updateInitialize(updates);
    }
  }

  private updateInitialize(updates: SwUpdate) {
    updates.available.subscribe(event => {
      this.openSnackBarUpdateAvailable();
      updates.activateUpdate().then();
      //() => document.location.reload()
    });

    updates.activated.subscribe(event => {
      this.openSnackBarUpdated();
    });
  }

  private openSnackBarUpdateAvailable() {
    this._snackBar.open('An update is available', 'Close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  private openSnackBarUpdated() {
    this._snackBar.open('Application successfully updated!', 'Close', {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  public checkForUpdates() {
    if (environment.production) {
      this.updates.checkForUpdate();
    }
  }
}
