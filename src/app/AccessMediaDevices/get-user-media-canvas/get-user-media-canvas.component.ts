import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-user-media-canvas',
  templateUrl: './get-user-media-canvas.component.html',
  styleUrls: ['./get-user-media-canvas.component.css']
})
export class GetUserMediaCanvasComponent implements OnInit {

  constraints = {
    'video': true,
    'audio': false
  }

  image!: HTMLVideoElement;
  

  constructor() { }

  ngOnInit(): void {
    //Creación del objeto de video
    navigator.mediaDevices.getUserMedia(this.constraints)
      .then(stream => {
          console.log('Got MediaStream:', stream);
      })
      .catch(error => {
          console.error('Error accessing media devices.', error);
      });

      this.playVideoFromCamera();
  }

  //Reproduce el video de la cámara
  async playVideoFromCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
        const videoElement = document.querySelector('#video') as HTMLVideoElement;
        videoElement.srcObject = stream;
        this.image = videoElement;
    } catch(error) {
        alert('Error opening video camera.\nDetails: ' + error);
    }
    
  }

  //Tomar captura de pantalla
  takeScreenshot() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    canvas.width = this.image.videoWidth;
    canvas.height = this.image.videoHeight;
    canvas.getContext('2d')?.drawImage(this.image, 0, 0);
  }


}
