import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-user-select-resolution',
  templateUrl: './get-user-select-resolution.component.html',
  styleUrls: ['./get-user-select-resolution.component.css']
})
export class GetUserSelectResolutionComponent implements OnInit {

  //Variables
  constrains: object = {};
  actualResolution : string = '';
  
  constructor() { }

  ngOnInit(): void {
    
  }

  //Llamada al método que inicia el video con las restricciónes del botón pulsado
  iniciarObjetoVideo(constrains: any) {
    navigator.mediaDevices.getUserMedia(constrains)
    .then(stream => {
      console.log('Got MediaStream:', stream);
    })
    .catch(error => {
        console.error('Error accessing media devices.', error);
    });
    this.constrains = constrains;
    this.actualResolution = constrains.video.width.exact + 'x' + constrains.video.height.exact;
    this.playVideoFromCamera();
    
  }

  //Activar cámara en resolución QVGA
  qvgaActivate() {
    var qvgaConstraints  = {
      audio: false,
      video: {width: {exact: 320}, height: {exact: 240}}
    };
    console.log(qvgaConstraints);
    this.iniciarObjetoVideo(qvgaConstraints);
  }

  //Activar cámara en resolución VGA
  vgaActivate() {
    var vgaConstraints = {
      audio: false,
      video: {width: {exact: 640}, height: {exact: 480}}
    };
    console.log(vgaConstraints);
    this.iniciarObjetoVideo(vgaConstraints);
  }

  //Activar cámara en resolución HD
  hdActivate() {
    var hdConstraints = {
      audio: false,
      video: {width: {exact: 1280}, height: {exact: 720}}
    };
    console.log(hdConstraints);
    this.iniciarObjetoVideo(hdConstraints);
  }

  //Reproduce el video de la cámara
  async playVideoFromCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(this.constrains);
        const videoElement = document.querySelector('#video') as HTMLVideoElement;
        videoElement.srcObject = stream;
    } catch(error) {
        alert('Error opening video camera.\nDetails: ' + error);
    }
  }

}