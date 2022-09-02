import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-only-audio-local',
  templateUrl: './get-only-audio-local.component.html',
  styleUrls: ['./get-only-audio-local.component.css']
})
export class GetOnlyAudioLocalComponent implements OnInit {

  audio!: HTMLAudioElement;

  constraints = {
    audio: true,
    video: false
  };

  constructor() { }

  ngOnInit(): void {
    //Inicializa el elemento audio
    this.audio = document.querySelector('#audio') as HTMLAudioElement;
    //Creación del objeto de audio
    navigator.mediaDevices.getUserMedia(this.constraints)
    .then(stream => {
        console.log('Got MediaStream:', stream);
    })
    .catch(error => {
        console.error('Error accessing media devices.', error);
    });
    this.iniciarAudio();
  }

  //Reproduce el audio del dispositivo (Prederminado)
  async iniciarAudio() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.audio.srcObject = stream;
  } catch(error) {
      alert('Error opening microphone.\nDetails: ' + error);
  }
  }

}
