import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  error: boolean;
  success: boolean;
  qrResultString: string;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  clearResult(): void {
    this.qrResultString = null;
    this.error = false;
    this.success = false;
  }

  scanSuccessHandler(resultString: string) {
    console.log('scanSuccessHandler: ', resultString);
    this.qrResultString = resultString;
    this.error = false;
    this.success = true;
    this.openSnackBarResult(resultString);
  }

  scanErrorHandler(event) {
    console.log('scanErrorHandler: ');   
    this.error = true;
    this.success = false;
  }

  scanFailureHandler(event) {
    console.log('scanFailureHandler: ');
    this.error = true;
    this.success = false;
  }

  scanCompleteHandler(event) {
    console.log('scanCompleteHandler: ');
  }

  onTorchCompatible(event) {
    console.log('onTorchCompatible: ');
  }

  camerasFoundHandler(event) {
    console.log('camerasFoundHandler: ');
  }

  camerasNotFoundHandler(event) {
    console.log('camerasNotFoundHandler: ');
  }

  openSnackBarResult(result: string) {
    this._snackBar.open(`QRCODE succes !result: ${result}`, 'Close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
