import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-user-media-basic',
  templateUrl: './get-user-media-basic.component.html',
  styleUrls: ['./get-user-media-basic.component.css']
})
export class GetUserMediaBasicComponent implements OnInit{

  //Restricciones de la reproducción de video
  constraints = {
    'video': true,
    'audio': false
  }

  constructor() { }
  
  ngOnInit() {
    
  //this.buttonAction();
  }

  //Función principal que se ejecuta al pulsar el botón (Inicializa la creación del objeto de video)
  buttonAction(){
    navigator.mediaDevices.getUserMedia(this.constraints)
      .then(stream => {
          console.log('Got MediaStream:', stream);
      })
      .catch(error => {
          console.error('Error accessing media devices.', error);
      });
    this.getConnectedDevices('videoinput', cameras => console.log('Cameras found', cameras));
    this.playVideoFromCamera();
  }

  //Muestra los dispositivos conectados disponibles
  getConnectedDevices(type: string, callback: (arg0: MediaDeviceInfo[]) => void) {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const filtered = devices.filter(device => device.kind === type);
            callback(filtered);
        });
  }

  //Reproduce el video de la cámara
  async playVideoFromCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
        const videoElement = document.querySelector('#video') as HTMLVideoElement;
        videoElement.srcObject = stream;
    } catch(error) {
        console.error('Error opening video camera.', error);
    }
}
  
}
