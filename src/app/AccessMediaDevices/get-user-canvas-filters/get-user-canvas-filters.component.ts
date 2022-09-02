import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-user-canvas-filters',
  templateUrl: './get-user-canvas-filters.component.html',
  styleUrls: ['./get-user-canvas-filters.component.css']
})
export class GetUserCanvasFiltersComponent implements OnInit {

  filters = ['none', 'grayscale', 'sepia', 'blur', 'invert'];
  image !: HTMLVideoElement;
  filtro !: HTMLSelectElement;
  //filterSelect = document.querySelector('select#filter') as HTMLSelectElement;
  constrains = {
    'video': true,
    'audio': false
  }

  constructor() { }

  ngOnInit(): void {

  //Creación del objeto de video
  navigator.mediaDevices.getUserMedia(this.constrains)
    .then(stream => {
        console.log('Got MediaStream:', stream);
    })
    .catch(error => {
        console.error('Error accessing media devices.', error);
    });
    
    this.aplicarFiltro();
  }

  //Reproduce el video de la cámara
  async playVideoFromCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(this.constrains);
        const videoElement = document.querySelector('#videoFilter') as HTMLVideoElement;
        
        videoElement.className = this.filtro.value;
        
        console.log(videoElement.className);
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
    //Aplica al filtro al tomar la captura
    canvas.className = this.filtro.value;    
  }

  iniciarFiltro(){
    //this.filtro.value = 'none';
  }


  aplicarFiltro() {
      //Lectura del filtro seleccionado en tiempo real
      const filterSelect = document.querySelector('#filter') as HTMLSelectElement;
      this.filtro = filterSelect;
      //Cambiar el filtro en tiempo real al video 
      this.playVideoFromCamera();
  }

}
